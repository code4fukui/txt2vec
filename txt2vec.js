import { txt2vec } from "./Embedding.js";
import { IEEE32 } from "./IEEE32.js";
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";

if (Deno.args.length == 0) {
  console.log("txt2vec [input]");
  Deno.exit(1);
}
const input = Deno.args[0];
const res = await txt2vec(input);
//await Deno.writeFile(prompt.replace(/ /g, "_") + ".png", bin);
console.log(res);
const vec = Base64URL.encode(IEEE32.encode(res));
console.log(vec);
