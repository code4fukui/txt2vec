export const dot = (a, b) => {
  let n = 0;
  for (let i = 0; i < a.length; i++) {
    n += a[i] * b[i];
  }
  return n;
};
export const similarity = (a, b) => {
  return dot(a, b) / (Math.sqrt(dot(a, a)) * Math.sqrt(dot(b, b)));
};
