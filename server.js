import pg from "pg";
const { Client } = pg;
const client = new Client();
await client.connect();

const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
console.log(res.rows[0].message);
await client.end();
