export const capitalize = (word) => {
  return `${word[0].toUpperCase() + word.slice(1)}`;
};

export const range = (start, end) => {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1).fill('').map((_, index) => {
    return start + index;
  });
};
