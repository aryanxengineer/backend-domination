import app from "./index.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer);

let users: any = [];

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  /******** STEP 1: USER READY ********/
  socket.on("ready", () => {
    users.push(socket.id);

    // Only first user becomes caller
    if (users.length === 2) {
      io.to(users[0]).emit("start-call");
    }
  });

  /******** STEP 2: OFFER ********/
  socket.on("offer", (offer) => {
    socket.broadcast.emit("offer", offer);
  });

  /******** STEP 3: ANSWER ********/
  socket.on("answer", (answer) => {
    socket.broadcast.emit("answer", answer);
  });

  /******** STEP 4: ICE ********/
  socket.on("ice-candidate", (candidate) => {
    socket.broadcast.emit("ice-candidate", candidate);
  });

  /******** STEP 5: CLEANUP ********/
  socket.on("disconnect", () => {
    users = users.filter((id: any) => id !== socket.id);
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
