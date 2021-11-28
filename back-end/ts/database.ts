import { Pool } from 'pg';

export const pool = new Pool ({
    user: 'postgres',
    password: 'habra234',
    host: 'localhost',
    port: 5432,
    database: 'Contenidos'
});