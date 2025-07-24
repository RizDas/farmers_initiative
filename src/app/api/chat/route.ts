// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Server-side SYSTEM_PROMPT
const SYSTEM_PROMPT = `You are a helpful AI assistant.
- Provide clear and concise responses
- Be friendly and professional
- If you're not sure about something, say so
- Keep responses focused and relevant
- Use markdown formatting when appropriate`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('Missing GEMINI_API_KEY environment variable');
    }
    const { messages } = await req.json();

    // Map only user & assistant messages to Gemini format
    const history = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Start chat with server-side system prompt and history
    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        ...history
      ]
    });

    // Send last user message
    const lastUser = messages.slice(-1)[0].content;
    const result = await chat.sendMessage(lastUser);
    const response = await result.response;
    const text = await response.text();

    return NextResponse.json({ text });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}