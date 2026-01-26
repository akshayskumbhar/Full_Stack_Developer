

// step 1: Import modules
import express from 'express';
import mysql from 'mysql/promise';

// step 2: create Express app
const app = express();
app.use(express.json());

//step 3: set up MySQL connection pool
const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'testdb',
})

//step 4: simple API endpoint to get users
app.get('/users', async (req, res) => {
    try{
        const [rows] = await pool.query(
            'SELECT * FROM users'
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({
            error: 'Database error'
        })
    }
})

// step 5: start server

app.listen(300, ( => {
    console.log('API running on PORT 3000')
}))