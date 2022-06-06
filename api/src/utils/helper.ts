import ejs from 'ejs';
import path from 'path';
import axios from 'axios';
import pdf, {CreateOptions} from 'html-pdf';
import { ICV } from '../interfaces/index.interface';


export const success = (data: any, message?: string) => {
  return {
    status: "success",
    data,
    message,
  };
};

export const failure = (error?: any, data: null | string = null) => {
  return {
    status: "error",
    data,
    error,
  };
};


export const generatePDF = async(data:ICV, userId:string) => {
  return new Promise<string>((resolve, reject) => {
    ejs.renderFile(path.join(__dirname, './template/', "cv-template.ejs"), 
    data
    , (err, data) => {
      if (err) {
        console.log(err);
         reject(err);
      } else {
          const filename = `cv-${userId}.pdf`;
          const options = {
              "format": "Tabloid",
              "orientation": "portrait",
              "header": {
                  "height": "10mm",
              },
              "footer": {
                  "height": "10mm",
              },
  
          };
          pdf.create(data, options as CreateOptions).toFile(`${__dirname}/../public/${filename}`, function (err, data) {
              if (err) {
                  console.log(err);
                  reject(err);
              } else {
                   resolve(`${process.env.SITE}/${filename}`);
              }
          });
      }
    });
  })
}

export const sendNotification = (notificationObj:any, socketId:string) => {
  axios.post(`${process.env.NOTIFICATION_SERVER}/notification`, {notificationObj, socketId}).catch(err => {
    console.log(err);
  });
}
