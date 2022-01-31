export const openOrSenior = (arrayOfMembers) => {
  const memberStatus = arrayOfMembers.flatMap(item => {
    return (item[0] >= 40 && item[1] >= 15) ? 'Senior' : 'Open';
  });

  return memberStatus;
};