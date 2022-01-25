function createPhoneNumber(arr) {
  const a = arr.slice(0,3).join('');
  const b = arr.slice(3,6).join('');
  const c = arr.slice(6).join('');
  const result = `(${a}) ${b}-${c}`;

  return result;
}

module.exports = createPhoneNumber;