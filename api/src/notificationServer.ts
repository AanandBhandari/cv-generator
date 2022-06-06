import express, { Application, Request, Response } from "express";
import {Server} from 'socket.io';
import cors from "cors";
import * as dotenv from "dotenv";
import { success } from "./utils/helper";
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

// const server = createServer(app);
const io = new Server({
    cors: {
      origin: "*",
    },
  });

io.on("connection", (socket) => {
    socket.emit('getSocketId', socket.id);
});


app.post('/notification', (req: Request, res: Response) => {
    const { notificationObj, socketId } = req.body;
    io.to(socketId).emit('notification', notificationObj);
    return res.json(success(notificationObj, 'Notification sent.'));
})



app.listen(+process.env.NOTIFICATION_SERVER_PORT, () => {
    console.log(`Notification server is running on port ${process.env.NOTIFICATION_SERVER_PORT}`);
});

io.listen(+process.env.SOCKET_PORT);