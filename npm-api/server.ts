import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
  socket.emit("hello", "world");
});

// Server.emitWithAck exists in socket.io 4.7.0 and was removed in 4.7.2.
// Bumping past it breaks this call at compile time.
export async function pingAll(): Promise<unknown[]> {
  return io.emitWithAck("ping");
}
