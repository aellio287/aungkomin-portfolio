
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please check your environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are 'Aung Ko Min's Personal Library Assistant'. Aung Ko Min is a Library Assistant from Mandalay, Myanmar. Your job is to help visitors of his portfolio. You should be friendly, polite, and knowledgeable about books and libraries. If someone asks who Aung is, explain his passion for books and his dedication to library services. If someone asks for book recommendations, give 2-3 tailored suggestions based on their interests. Keep responses concise and scholarly yet warm.",
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
