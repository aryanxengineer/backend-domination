// src/server.ts
import { createServer } from "http";
import { Server } from "socket.io";
import app from "./index.js";
import { log } from "console";

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  log("connected")

  // custon event handling using socket io
  // socket.on("custom-event", (data) => {
  //   log("Custom event received:", data);
  //   socket.emit("custom-response", { message: "Hello from server!" });
  // })

  // This is how we are creating rooms using socket io
  // socket.join("room1")
  // socket._cleanup()
  // socket._error('error related socket');
  // socket._onclose("forced close", 'client close this forcefully');


  // connect and disconnect using buttons












  // This is all about the emiiting events from server side and how to emit and recieve event from client and how to learn broadcasting aswell.

  // socket.on("client-message", (data) => {
  //   console.log("📩 Message received:", data);

  //   socket.emit("messageReceived", {
  //     status: "ok",
  //     text: data.message,
  //   });
  // });

  // socket.on("typing", () => {
  //   socket.broadcast.emit("typing");
  // });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
