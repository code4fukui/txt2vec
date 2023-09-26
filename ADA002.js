//import { fetchAPI } from "https://code4fukui.github.io/ai_chat/openai.js";
import { fetchAPI } from "https://code4fukui.github.io/txt2img/fetchAPI.js";

export const txt2vec = async (text) => { // ret 1536 length float array
  const url = "https://api.openai.com/v1/embeddings";
  const model = "text-embedding-ada-002";
  const input = text;
  const req = { input, model };
  const res = await fetchAPI(url, req);
  //await Deno.writeTextFile("res.json", JSON.stringify(res, null, 2));
  // res.data[n].embedding (1536 float values)
  const resf = res.data.map(d => new Float32Array(d.embedding));
  if (Array.isArray(text)) {
    return resf;
  }
  return resf[0];
};
