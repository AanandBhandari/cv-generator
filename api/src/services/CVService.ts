import path from 'path';
import { ICV, INotificationObj } from "../interfaces/index.interface";
import { sendNotification } from "../utils/helper";
import { fork } from 'child_process';
class CVService {

  generateCV(data = {} as ICV, userId: string) {
    let notificationObj: INotificationObj
    try { 
      const cp = fork( path.join(__dirname + '/../utils/bgWorker.ts'));
      cp.send({data, userId})

      cp.on("message", (url:string) => {
        if (url) {
          notificationObj = {
            title: "CV",
            status: "success",
            message: "Your CV has been created successfully.",
            url: url,
          }
          sendNotification(notificationObj, userId);
        } else {
          notificationObj = {
            title: "CV",
            status: "error",
            message: "Your CV could not be created successfully.",
            url: null
          }
          sendNotification(notificationObj, userId);
        }
      })

    } catch (error) {

      console.log(error);
      notificationObj = {
        title: "CV",
        status: "error",
        message: "Internal server error.",
        url: null
      }
      sendNotification(notificationObj, userId);
    }
  }
}

export default CVService;
