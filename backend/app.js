// jshint esversion:6
const http = require("http");
const express = require("express");
const { Server: SocketServer } = require("socket.io");
const os = require("os");
const pty = require("node-pty");

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

// app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

const shell = os.platform() === "win32" ? "powershell.exe" : "bash";

const ptyProcess = pty.spawn(shell, [], {
  name: "xterm-color",
  cols: 80,
  rows: 30,
  cwd: process.env.INIT_CWD,
  env: process.env,
});

ptyProcess.onData((data) => {
  io.emit("terminal:read", data);
});

io.on("connection", (socket) => {
  console.log("Socket connection established.");

  socket.on("terminal:write", (data) => {
    ptyProcess.write(data);
  });
});

let port = process.env.PORT;
if (port == null || port == "") port = 3001;
server.listen(port, function () {
  console.log(`Listening playground server on port ${port}.`);
});
