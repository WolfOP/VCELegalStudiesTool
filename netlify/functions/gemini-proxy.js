// File: netlify/functions/gemini-proxy.js

// Netlify Functions can use global fetch if your Node.js version supports it (usually Node 18+)
// If you need a specific fetch version or have issues, you might install 'node-fetch'
// via npm install node-fetch and then:
// const fetch = require('node-fetch'); // or import fetch from 'node-fetch';

exports.handler = async function(event, context) {
    // 1. Get your Gemini API Key from Netlify's environment variables
    //    NEVER hardcode it here.
    const GEMINI_API_KEY_SECRET = process.env.GEMINI_API_KEY_SECRET;

    if (!GEMINI_API_KEY_SECRET) {
        console.error("Gemini API key not configured on server.");
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({ error: { message: "API key not configured on server." } }),
        };
    }

    // 2. Ensure it's a POST request
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405, // Method Not Allowed
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({ error: { message: "Only POST requests are allowed." } }),
        };
    }

    // 3. Get the prompt from the client's request body
    let requestBody;
    try {
        requestBody = JSON.parse(event.body);
    } catch (e) {
        console.error("Invalid JSON in request body:", event.body);
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({ error: { message: "Invalid JSON in request body." } }),
        };
    }

    const promptText = requestBody.prompt;
    if (!promptText) {
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({ error: { message: "No prompt provided in request." } }),
        };
    }

    // 4. Construct the request to the Gemini API
    // Using gemini-2.0-flash as per previous client-side setup
    const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY_SECRET}`;
    const geminiPayload = {
        contents: [{ role: "user", parts: [{ text: promptText }] }]
    };

    try {
        const geminiResponse = await fetch(geminiApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geminiPayload)
        });

        const geminiResult = await geminiResponse.json();

        if (!geminiResponse.ok) {
            console.error("Error from Gemini API:", geminiResult);
            return {
                statusCode: geminiResponse.status,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "POST, OPTIONS"
                },
                // Return Gemini's error message if available
                body: JSON.stringify({ 
                    error: { 
                        message: `Gemini API Error: ${geminiResult?.error?.message || geminiResponse.statusText}`,
                        details: geminiResult?.error // Include full error details if present
                    } 
                }),
            };
        }

        if (geminiResult.candidates && geminiResult.candidates.length > 0 &&
            geminiResult.candidates[0].content && geminiResult.candidates[0].content.parts &&
            geminiResult.candidates[0].content.parts.length > 0) {
            // 5. Send the extracted text back to your client
            return {
                statusCode: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "POST, OPTIONS"
                },
                body: JSON.stringify({ text: geminiResult.candidates[0].content.parts[0].text }),
            };
        } else {
            console.error("Unexpected response structure from Gemini API:", geminiResult);
            return {
                statusCode: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "POST, OPTIONS"
                },
                body: JSON.stringify({ error: { message: "Could not extract text from Gemini response via proxy." } }),
            };
        }

    } catch (error) {
        console.error("Error in Netlify function:", error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({ error: { message: `Netlify function error: ${error.message}` } }),
        };
    }
};