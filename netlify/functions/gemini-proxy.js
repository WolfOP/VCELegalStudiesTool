// File: netlify/functions/gemini-proxy.js

// Netlify Functions can use global fetch if your Node.js version supports it (usually Node 18+)
// If you need a specific fetch version or have issues, you might install 'node-fetch'
// via npm install node-fetch and then:
// const fetch = require('node-fetch'); // or import fetch from 'node-fetch';

exports.handler = async function(event, context) {
    // Handle OPTIONS request for CORS preflight
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
            },
            body: "" // Empty body for OPTIONS
        };
    }

    // 1. Check for POST request
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405, // Method Not Allowed
            headers: { 
                "Content-Type": "application/json", 
                "Allow": "POST",
                "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS"
            },
            body: JSON.stringify({ error: { message: "Method Not Allowed. Please use POST." } }),
        };
    }

    // 2. Get your Gemini API Key from environment variables
    //    Set this in your Netlify site settings (Build & deploy > Environment > Environment variables)
    const GEMINI_API_KEY_SECRET = process.env.GEMINI_API_KEY_SECRET;

    if (!GEMINI_API_KEY_SECRET) {
        console.error("Gemini API key not configured on server.");
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/" },
            body: JSON.stringify({ error: { message: "API key not configured on server." } }),
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
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/" },
            body: JSON.stringify({ error: { message: "Invalid JSON in request body." } }),
        };
    }

    const promptText = requestBody.prompt;
    if (!promptText) {
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/" },
            body: JSON.stringify({ error: { message: "No prompt provided in request." } }),
        };
    }

    // 4. Construct the request to the Gemini API
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
                statusCode: geminiResponse.status, // Forward Gemini's status
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/" },
                body: JSON.stringify({ error: { message: `Gemini API Error: ${geminiResult?.error?.message || geminiResponse.statusText}` } }),
            };
        }

        if (geminiResult.candidates && geminiResult.candidates.length > 0 &&
            geminiResult.candidates[0].content && geminiResult.candidates[0].content.parts &&
            geminiResult.candidates[0].content.parts.length > 0) {
            
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
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/" },
                body: JSON.stringify({ error: { message: "Could not extract text from Gemini response via proxy." } }),
            };
        }

    } catch (error) {
        console.error("Error in serverless function execution:", error);
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://wolfop.github.io/VCELegalStudiesTool/" },
            body: JSON.stringify({ error: { message: `Serverless function execution error: ${error.message}` } }),
        };
    }
};