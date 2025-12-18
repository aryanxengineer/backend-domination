import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD as string,
    socket: {
        host: process.env.REDIS_HOST as string,
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
    }
});

client.on('connect', () => {
    console.log('Connected to Redis server successfully!');
})

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

export default client;

