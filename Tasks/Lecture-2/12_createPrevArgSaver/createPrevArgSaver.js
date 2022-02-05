export const createPrevArgSaver = () => {
  let previosArgument;

  return (value) => {
    const returnedArgument = previosArgument;

    previosArgument = value;

    return returnedArgument;
  };
};
