export const openOrSenior = (arrayOfMembers) => {
  const minAge = 40;
  const minExp = 15;

  const memberStatus = arrayOfMembers.flatMap(item => {
    return (item[0] >= minAge && item[1] >= minExp) ? 'Senior' : 'Open';
  });

  return memberStatus;
};