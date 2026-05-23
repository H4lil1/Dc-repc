const RPC = require("discord-rpc");

const clientId = "YOUR_APP_ID";

RPC.register(clientId);

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  rpc.setActivity({
    details: "On my phone",
    state: "PC turned off",
    startTimestamp: new Date(),
  });

  console.log("RPC running");
});

rpc.login({ clientId });
