import { txt2vec } from "./ADA002.js";

const input = [
  "西武ライオンズとふわっちコラボ、始球式動画＆ARで体験する時速160km投球",
  "境界を超えてつながるデジタル社会を目指そう！地域情報化アドバイザー秋の全体会議2023",
];
const res = await txt2vec(input);
//await Deno.writeFile(prompt.replace(/ /g, "_") + ".png", bin);
console.log(res);
