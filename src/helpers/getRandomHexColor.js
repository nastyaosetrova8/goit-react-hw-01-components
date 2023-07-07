export const getRandomHexColor = () => {
    return ('#' + Math.floor(Math.random() * 2 ** 16)
      .toString(16)
      .padStart(6, 'f'));
  }