import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(bodyParser.json());

app.get('/messages', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT content FROM messages');
        console.log(rows);
        res.json(rows);

    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(err)
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
