import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();


async function getUsers() {
  const [rows]  = await pool.query('SELECT * FROM users')
  return rows;
}


async function getUser(id){
    const [row] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return row;
}

async function createUser(name, email) {
    const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    const id = result.insertId;
    return await getUser(id);
}

export { getUsers, getUser, createUser };