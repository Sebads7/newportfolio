// Define a list of colors, including predefined ones
const predefinedColors = ["#FFFFFF", "#F8F6F4", "#FAFAF6", "#FFFFFF"];

// Function to generate a random color from predefined colors
export const generateRandomColor = (): string => {
  // Get a random index from the predefined colors array
  const randomIndex = Math.floor(Math.random() * predefinedColors.length);
  return predefinedColors[randomIndex];
};
