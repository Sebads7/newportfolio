// Define a list of colors, including predefined ones
const predefinedColors = ["#FAF9F9", "#F8F6F4", "#F0F0F0", "#F7F6F2"];

// Function to generate a random color from predefined colors
export const generateRandomColor = (): string => {
  // Get a random index from the predefined colors array
  const randomIndex = Math.floor(Math.random() * predefinedColors.length);
  return predefinedColors[randomIndex];
};
