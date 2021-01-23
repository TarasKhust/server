import { EntitySchema } from 'typeorm';
import { Author } from "./author.entity";

export const AuthorSchema = new EntitySchema<Author>({
  name: 'Author',
  target: Author,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    author: {
      type: String,
    },
    text: {
      type: String,
    },
    name: {
      type: String,
    },
  },
});
