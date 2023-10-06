//Untri
export function generateCustomCode(characters, length) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  let numStr = Math.floor(Math.random() * (max - min + 1)) + min;
  let code = characters + numStr;
  return code;
}
