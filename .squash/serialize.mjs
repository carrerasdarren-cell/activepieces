// Mirrors activepieces#14972: form-urlencoded serialization flattens array values to a
// comma-joined scalar instead of key[]=value. Fix so array values serialize as bracket notation.
export function serializeBody(obj) {
  const p = new URLSearchParams();
  for (const [k, v] of Object.entries(obj)) {
    if (Array.isArray(v)) {
      for (const value of v) p.append(`${k}[]`, value);
    } else {
      p.append(k, v);
    }
  }
  return p.toString();
}
