import { readFile, writeFile } from "fs/promises";
// Read file with readFile
// const read_file = async (filename) => {
//   const data = await readFile(filename, "utf-8");
//   console.log(data);
// };
// read_file("notes.md");
// Write file with writeFile
const write_file = async () => {
  await writeFile("sample.md", "This file is created by writeFile module");
  console.log("File created successfully....");
};
write_file();
