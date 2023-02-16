module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 != 0) { return false };
  let i;  

  for (i = 0; i < str.length; i += 1) {
    bracketsConfig.forEach(elem => {
      if (str[i] === elem[0] && str[i + 1] === elem[1]) {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
        i = i - 2;
      }
    })

  }
  return (i === 0);
}
