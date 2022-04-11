import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const notesDirectory = join(process.cwd(), "src/markdown/notes");

export function getNoteSlugs() {
  return fs.readdirSync(notesDirectory);
}

export function getNoteBySlug(slug: string, fields: string[] = []) {
  // slug may be a file name or a slug
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(notesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllNotes(fields: string[] = []) {
  const slugs = getNoteSlugs();
  const notes = slugs
    .map((slug) => getNoteBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((note1, note2) => (note1.date > note2.date ? -1 : 1));
  return notes;
}
