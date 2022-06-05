import {Server} from 'socket.io';
import * as dotenv from "dotenv";
dotenv.config();

const io = new Server({
    cors: {
      origin: "*",
    },
  });

let users = [];

const addUser = (socketId:string) => {
!users.some((user) => user === socketId) &&
    users.push(socketId);
};

const removeUser = (socketId:string) => {
users = users.filter((user) => user !== socketId);
};


io.on("connection", (socket) => {
    addUser( socket.id);

    socket.emit('getSocketId', socket.id);

    socket.on('send-notification',({notificationObj, socketId}) => {
        io.to(socketId).emit('receive-notification', notificationObj);
    })

    socket.on("disconnect", () => {
        removeUser(socket.id);
    });
});

io.listen(+process.env.SOCKET_PORT);

console.log("Socket server started on port " + process.env.SOCKET_PORT);

export default io;







// import express, { Application, Request, Response, NextFunction } from "express";
// import {Server} from 'socket.io';
// import { createServer } from "http";
// import cors from "cors";
// import * as dotenv from "dotenv";
// import { success } from "./utils/helper";
// dotenv.config();

// const app: Application = express();

// app.use(express.json());
// app.use(cors());

// const server = createServer(app);
// const io = new Server(server,{
//     cors: {
//       origin: "*",
//     },
//   });

// io.on("connection", (socket) => {
//     socket.emit('getSocketId', socket.id);
// });

// app.get("/", async (req: Request, res: Response) => {
//     res.send(success(null, "Hello World"));
// });
// app.post('/notification', (req: Request, res: Response) => {
//     const { notificationObj, socketId } = req.body;
//     io.to(socketId).emit('notification', notificationObj);
//     res.json(success(notificationObj, 'Notification sent.'));
// })



// app.listen(+process.env.SOCKET_PORT, () => {
//     console.log(`Socket server is running on port ${process.env.SOCKET_PORT}`);
// });

// export default io;