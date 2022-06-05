import path from 'path';
import axios from 'axios'
import { ICV } from "../interfaces/index.interface";
import { generatePDF } from "../utils/helper";
import { fork } from 'child_process';
class CVService {

  generateCV(data = {} as ICV, userId: string) {
    try { 
      const cp = fork( path.join(__dirname + '/../utils/bgWorker.ts'));
      cp.send({data, userId})

      cp.on("message", (url:string) => {
        if (url) {
          const notificationObj = {
            title: "CV Generated",
            message: "Your CV has been generated successfully.",
            url: url
          }
          axios.post(`${process.env.SOCKET_SITE}/notification/${userId}`, {notificationObj, socketId: userId});
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export default CVService;
