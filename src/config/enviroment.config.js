import dotenv from 'dotenv';
dotenv.config()

export default {
    PORT: process.env.PORT,

    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_DOCKER_PORT: process.env.DATABASE_DOCKER_PORT,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_TYPE: process.env.DATABASE_TYPE,
    DATABASE_HOST: process.env.DATABASE_HOST,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,

    CORS_ALLOWED_ORIGINS: process.env.CORS_ALLOWED_ORIGINS
}