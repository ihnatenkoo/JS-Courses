function isPalindrome(str) {

  const a = str.split('')
                .filter(i => i.match(/[A-Za-z0-9]/))
                .join("")
                .toLowerCase()

  const b = str.split('')
                .reverse()
                .filter(i => i.match(/[A-Za-z0-9]/))
                .join("")
                .toLowerCase()

  return a === b ? true : false;
}

module.exports = isPalindrome;

