// src/utils/convertToBase64.js
import fs from "fs";
import path from "path";

export function convertToBase64(imagePath) {
  try {
    const fullPath = path.join(process.cwd(), imagePath);
    const imageBuffer = fs.readFileSync(fullPath);
    const base64 = imageBuffer.toString("base64");

    // deteksi ekstensi otomatis
    const ext = path.extname(imagePath).substring(1); // jpg, png, dll
    return `data:image/${ext};base64,${base64}`;
  } catch (error) {
    console.error("Error converting image:", imagePath, error);
    return null;
  }
}
