import { GoogleGenAI } from "@google/genai";
import { GEMINI_AI_API_KEY } from "./constant";

export const ai = new GoogleGenAI({ apiKey: GEMINI_AI_API_KEY});