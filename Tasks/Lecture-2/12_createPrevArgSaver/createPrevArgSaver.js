export const createPrevArgSaver = () => {
  let previosArgument = undefined;

  return (value) => {
    const returnedArgument = previosArgument;

    previosArgument = value;

    return returnedArgument;
  };
};
