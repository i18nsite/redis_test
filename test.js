#!/usr/bin/env bun

import { createSentinel } from "redis";
import CONF from "./conf.js";

const S = await createSentinel(CONF)
  .on("error", (err) => {
    console.error("Redis Error:", err);
  })
  .connect();

console.log(CONF);

console.log(await S.hello());
console.log(await S.hello(3));
process.exit();
