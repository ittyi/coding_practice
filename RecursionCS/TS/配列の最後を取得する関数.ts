function checkLastDigits(x:number, y:number, z:number): boolean{
    return getLastChar((x * y).toString()) === getLastChar(z.toString())
}

const getLastChar = (str: string): string => {
  return str[str.length-1];
};
