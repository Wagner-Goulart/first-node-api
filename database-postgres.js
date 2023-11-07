import { randomUUID } from "crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  async list(search) {
    let videos;

    if (search) {
      videos = await sql`select * from videos where title ilike ${
        "%" + search + "%"
      }`;
    } else {
      videos = await sql`select * from videos`;
    }

    return videos
  }

  async create(video) {
    const video_id = randomUUID();
    const { title, description, duration } = video;

    await sql`insert into videos ( video_id, title, description, duration) VALUES(${video_id}, ${title}, ${description}, ${duration}
    )`;
  }

  async update(id, video) {
    const { title, description, duration } = video;

    await sql`update videos set title =${title}, description=${description}, duration=${duration} where video_id = ${id}`
  }

 async delete(id) {
     await sql`delete from videos where video_id = ${id}`
  }
}
