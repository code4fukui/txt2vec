import * as t from "https://deno.land/std/testing/asserts.ts";
import * as Vec2 from "./Vec2.js";

Deno.test("dot", () => {
  const a = [1, 2];
  const b = [3, 4];
  t.assertEquals(Vec2.dot(a, b), 11);
});
Deno.test("similarity", () => {
  const a = [.1, .2];
  const b = [.2, .4];
  const c = [.1, .3];
  const d = [-.1, .3];
  const e = [-.1, -.2];
  t.assertEquals(Vec2.similarity(a, b), 1);
  t.assertEquals(Vec2.similarity(b, a), 1);
  t.assertEquals(Vec2.similarity(a, a), 1);
  t.assertEquals(Vec2.similarity(a, c), 0.9899494936611665);
  t.assertEquals(Vec2.similarity(a, d), 0.7071067811865474);
  t.assertEquals(Vec2.similarity(a, e), -1);
});
