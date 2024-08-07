const { Client } = require("pg");
const client = new Client(
  `postgresql://harisumiran_2iwl_user:Axzm418IxBbvSWUwAUA66PSqQJO77fwL@dpg-cqpul00gph6c7381kfq0-a/harisumiran_2iwl`
);

module.exports = client;
