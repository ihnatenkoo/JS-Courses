export function vowelCount(string) {
  const counter = string.match(/a|e|i|o|u/g) ?? [];

  return counter.length;
}

