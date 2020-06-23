
export const format = {
  number: (value: number) => {
    return new Intl.NumberFormat().format(value);
  },
  text: (value: string) => {
    if (value.length > 100)
      return `${value.substring(0, 100)} ...`;
    return value;
  }
}