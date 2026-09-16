import fs from "fs/promises";
export async function notesManager(operation, id, text) {
  const data = await fs.readFile("notes.json", "utf-8");
  const notes = JSON.parse(data);
  const existingNotes = notes.find((note) => note.id === id);
  if (operation === "add" && id !== undefined && text !== undefined) {
    if (!existingNotes) {
      const newNote = { id: id, text: text };
      await fs.writeFile(
        "notes.json",
        JSON.stringify([...notes, newNote], null, 2),
      );
      console.log("Note added Sucessfully...");
    } else {
      console.log("Note already exists with id -", id);
    }
  } else if (operation === "list") {
    console.log(notes);
  } else if (operation === "delete" && id !== undefined) {
    if (existingNotes) {
      const updatedNotes = notes.filter((note) => note.id !== existingNotes.id);
      await fs.writeFile("notes.json", JSON.stringify(updatedNotes, null, 2));
      console.log("Note deleted Sucessfully...");
    } else {
      console.log("No note found...");
    }
  } else {
    console.log("Wrong Operation...");
  }
}
