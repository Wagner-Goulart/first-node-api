import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos`.then(()=>{
//     console.log("TABELA EXCLUIDA")
// });

sql`
CREATE TABLE videos (
    video_id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER
);
`.then(() => {
  console.log("TABELA CRIADA");
});
