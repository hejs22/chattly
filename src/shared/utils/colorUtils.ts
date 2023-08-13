export const getRandomHEXColor = () => {
  return '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
};
