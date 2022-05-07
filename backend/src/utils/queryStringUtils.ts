export function getNumberArray(queryStr: any): number[] {
  let result = [];

  if (Array.isArray(queryStr)) {
    result = queryStr
      .map((query) => Number.parseInt(query))
      .filter((num) => !isNaN(num));
  } else {
    const queryArray = `${queryStr}`.split(',');
    if (queryArray.length) {
      result = getNumberArray(queryArray);
    }
  }

  return result;
}
