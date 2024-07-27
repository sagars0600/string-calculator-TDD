function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].slice(2);

    if (delimiterPart.startsWith("[")) {
      // Multiple delimiters
      const delimiterRegex = delimiterPart
        .match(/\[(.*?)\]/g)
        .map((d) => d.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
        .join("|");
      delimiter = new RegExp(delimiterRegex);
    } else {
      // Single delimiter
      delimiter = new RegExp(
        delimiterPart.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      );
    }
    numbers = parts[1];
  }

  const numArray = numbers
    .split(delimiter)
    .map(Number)
    .filter((num) => num <= 1000);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
