import { createClient } from "redis";
const client = createClient({
  url: "redis://localhost:6379",
  socket: {
    connectTimeout: 10000,
  },
});
client.on("error", (error) => {
  
});
(async () => {
  await client.connect();
  console.log("Connected to Redis");
})();
export default client;

