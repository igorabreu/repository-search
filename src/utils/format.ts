
const format = {
  number: (value: number) => {
    return new Intl.NumberFormat().format(value);
  },
  text: (value: string, limit: number) => {
    if (value.length > limit)
      return `${value.substring(0, limit)} ...`;
    return value;
  }
}

export default format;