export function getTime(sentence) {
  let result = '';

  const timeOfSentence = sentence.match(/[0-9]{2}:[0-9]{2}/g);

  if (timeOfSentence) {
    for (let i = 0; i < timeOfSentence.length; i++) {
      const time = timeOfSentence[i].split(':');
      const hours = time[0];
      const minutes = time[1];
  
      if (hours < 24 && minutes < 60) {
        result = timeOfSentence[i];
        break;
      }
    }
  
    return result;
  } 

  return ''; 
}