function getTime(str) {
  let results = '';
  let arr = str.split(" ");

  let arrOfTimes = arr.map (i => {
    if (i.startsWith('0') || i.startsWith('1') || i.startsWith('2')) {
      return i
    } else {
      return ""
    }
  })
  .filter(item => item !== "");


  for (i = 0; i< arrOfTimes.length; i++) {

    const time = arrOfTimes[i].split(":");
    const hours = time[0];
    const minutes = time[1];

    if (hours < 24 && parseInt(minutes) < 60) {
      results = `${hours}:${minutes.slice(0,2)}`;
      break;
    }
  }

  return results;
}

module.exports = getTime;
