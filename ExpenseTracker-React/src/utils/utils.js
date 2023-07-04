export const generateDate = () => {
  //date generator for posts and puts
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getCurrentMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let monthNumber = currentDate.getMonth() + 1;
  let monthName = currentDate.toLocaleString("default", { month: "long" });

  monthNumber = monthNumber < 10 ? "0" + monthNumber : monthNumber;

  return { year, monthNumber, monthName };
};

export const getPreviousMonth = () => {
  const currentDate = new Date();
  const previousDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );

  const previousYear = previousDate.getFullYear();
  let previousMonthNumber = previousDate.getMonth() + 1;
  let previousMonthName = previousDate.toLocaleString("default", {
    month: "long",
  });

  previousMonthNumber =
    previousMonthNumber < 10 ? "0" + previousMonthNumber : previousMonthNumber;

  return {
    previousYear: previousYear,
    previousMonthNumber: previousMonthNumber,
    previousMonthName: previousMonthName,
  };
};

export const processObject = (obj) => {
  const processedData = [];

  for (const [key, value] of Object.entries(obj)) {
    const [category, amount] = value.split(',');

    processedData[key] = {
      category: category.trim(),
      amount: parseFloat(amount.trim())
    };
  }

  console.log(processedData);
  return processedData;
};

export const generateColors = (numColors) => {
  const colors = [];

  for (let i = 0; i < numColors; i++) {
    const hue = (i * 255) / numColors;
    const color = `hsl(${hue}, 70%, 50%)`;
    colors.push(color);
  }

  return colors;
};