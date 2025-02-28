import { OpenAI } from "openai";

export default async function handler(req, res) {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Server-side environment variable
    });

    const { messages, model } = req.body;

    const completion = await openai.chat.completions.create({
      model: model || "gpt-3.5-turbo",
      messages: messages,
    });

    return res.status(200).json(completion);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data,
    });
  }
}
