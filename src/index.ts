import express from "express";
import client from "./config/redis";

const PORT = 8088;
const app = express();

const cache = async (key: string, value: string) => {
  await client.set(key, value);
};

app.get("/cache", async (req, res) => {
  const key = "redisKey";
  await cache(key, "Welcome to GhibliGains");
  res.send(`<h3>cache done go to api point  getcache to see result</h3>`);
});

app.get("/getcache", async(req ,res)=>{
    res.send(`<h1> ${await client.get("redisKey")}</h1>`)

})

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error while lisetining to PORT ", PORT, err);
    return;
  }
  console.log("Successfully connected to PORT , ", PORT);
});
