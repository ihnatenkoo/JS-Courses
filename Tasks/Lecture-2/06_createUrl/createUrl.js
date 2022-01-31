export const createUrl = (template, params) => {

  let url = template;
  const arrOfPaths = template.match(/(?<=\{).+?(?=\})/gi);

  for (let i = 0; i < arrOfPaths.length; i++) {

    if (Object.keys(params).includes(arrOfPaths[i])) {
      url = url.replace(`{${arrOfPaths[i]}}`, params[`${arrOfPaths[i]}`]);
    } else {
      url = url.replace(`{${arrOfPaths[i]}}`, 'undefined');
    }
  }

  return url;
};

