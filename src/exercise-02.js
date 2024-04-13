const getFileExtension = (str) => {
  // Check if filename is provided and not empty
  if (!str || typeof str !== "string") {
    return "";
  }
  // Find the last index of the period (.)
  const lastIndex = str.lastIndexOf('.');

  // If period (.) is not found or it's the last character, return an empty string
  if (lastIndex === -1 || lastIndex === str.length - 1) {
    return '';
  }
};

export { getFileExtension };