<h1 align="center">
CV-Generator
</h1>
<p align="center">
Nodejs/Expressjs, ejs, socket.io
</p>

> CV Generator is a API for generating CV. First, User connect to the notification socket server and get userId(socketId) from there. Now, User send CV information to the main API server along with that userId, the server creates CV in pdf format using background process so that main thread has less load and response back to the user with a message. After CV is created, the server send notificaiton object along with CV generated url and that userId to the notificaiton API server. Notification API server communicate and passes the notification object along with userId(socketId) to notificaton socket server.And finally, notificaton socket server emits realtime notificaton to the user.


## clone or download
```terminal
$ git clone https://github.com/AanandBhandari/cv-generator.git
```

## project structure
```terminal
api/
   app.ts
   notificationServer.ts
   package.json
   .env
   ...
```

# Usage (run API on your machine)

## Prerequisites
- [Node](https://nodejs.org/en/download/) ^14.0.0
- [npm](https://nodejs.org/en/download/package-manager/)


## Server-side usage

```terminal
$ cd api   // go to api folder
$ npm i       // npm install packages
$ npm run start // run main API server locally
$ npm run start-notification // run notification API server along with socket server locally
```

### ENV variables inside api folder
```terminal
SITE=http://localhost:5003
PORT=5003
NOTIFICATION_SERVER=http://localhost:5004
NOTIFICATION_SERVER_PORT=5004
SOCKET_PORT=3000
```

# Screenshots of this project

User connect to the notification socket server and get userId(socketId)
![User connect to the notification server](https://res.cloudinary.com/dttllxiw2/image/upload/v1654503581/Screenshot_from_2022-06-06_13-57-17_riaajn.png)

User send CV information along with userid(socketId) to the main API server
![User sends CV information](https://res.cloudinary.com/dttllxiw2/image/upload/v1654503582/Screenshot_from_2022-06-06_13-59-20_cjjgbh.png)

The notification socket server emits the notificaton to the client 
![User receive notificaton ](https://res.cloudinary.com/dttllxiw2/image/upload/v1654503582/Screenshot_from_2022-06-06_14-00-16_jdzd5j.png)

The final output of the CV
![The CV ](https://res.cloudinary.com/dttllxiw2/image/upload/v1654503582/Screenshot_from_2022-06-06_14-01-31_k6o1og.png)

## BUGs or comments

[Create new Issues](https://github.com/AanandBhandari/cv-generator/issues) (preferred)

Email Me: aanandbhandari143@gmail.com



