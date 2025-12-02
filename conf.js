export default {
  RESP: 3,
  sentinelOptions: {
    RESP: 3,
  },
  sentinelRootNodes: [
    { host: "127.0.0.1", port: 26379 },
    { host: "127.0.0.1", port: 26380 },
    { host: "127.0.0.1", port: 26381 },
  ],
  name: "mymaster",
};
