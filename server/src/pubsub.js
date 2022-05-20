// import { RedisPubSub } from "graphql-redis-subscriptions";
// import Redis from "ioredis";
// import dotenv from "dotenv";

// dotenv.config();

// const options = {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD,
//   retryStrategy: (times) => {
//     // reconnect after
//     return Math.min(times * 50, 2000);
//   },
// };

// const pubsub = new RedisPubSub({
//   publisher: new Redis(options),
//   subscriber: new Redis(options),
// });

import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

export default pubSub;
