import { createClient } from "redis";
const client = createClient({
  url: "redis://localhost:6379",
  socket: {
    connectTimeout: 15000,
  },
});
client.on("error", (error) => {
 
});
(async () => {
  await client.connect();
  console.log("redis connected");
})();
export default client;
