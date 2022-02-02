export const openOrSenior = (arrayOfMembers) => {
  if (Array.isArray(arrayOfMembers)) {
    const minAge = 40;
    const minExp = 15;
  
    const memberStatus = arrayOfMembers.flatMap(item => {
      return (item[0] >= minAge && item[1] >= minExp) ? 'Senior' : 'Open';
    });
  
    return memberStatus;
  } else {
    console.error(
      `Error! Value ${arrayOfMembers} - is not an Array. Pleace pass to the function correct Array value`,
    );
  }

};