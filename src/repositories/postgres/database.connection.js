import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';
import User from './entities/User.js';
import Processo from './entities/Processo.js';

dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    synchronize: true,
    logging: true,
    entities: [User, Processo],
});

export const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conexão com o banco de dados estabelecida com sucesso');
        return AppDataSource;
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
        throw error;
    }
};

export default AppDataSource;
