const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");


  const apiKey = 'AIzaSyALAox4hCiz1lkd2win3JSlG3QBcUE7nrY'
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "PROFESSIONAL TONE AND ANY REPLY MUST BE IN AN EMPLOYMENT, RESUME CONTEXT ",

});
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
export const AiChatSession = model.startChat({
    generationConfig,
    // safetySettings,
    history:[]
})  