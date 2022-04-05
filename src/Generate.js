import { writeFile as _writeFile, copyFile as _copyFile } from "fs";

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    console.log("working");
    console.log(fileContent);
    _writeFile("./dist/TeamProfile.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    _copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Stylesheet created",
      });
    });
  });
};

export default {
  writeFile,
  copyFile,
};
