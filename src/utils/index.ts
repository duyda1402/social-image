export function capitalizeWords(inputString: string) {
  const words = inputString.split(" ");

  const capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

export function formatNumber(num: number) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
}
