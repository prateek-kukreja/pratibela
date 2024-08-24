// Function to extract text from content JSON
export const extractTextFromContent = (content) => {
  if (!content) return "";

  const parsedContent = JSON.parse(content);
  let text = "";

  parsedContent.blocks.forEach((block) => {
    if (block.type === "paragraph" || block.type === "header") {
      text = text + block.data.text + " ";
    }
  });

  return text;
};
