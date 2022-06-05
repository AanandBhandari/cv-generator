import { ICV } from "../interfaces/index.interface";
import { generatePDF } from "../utils/helper";
import path from 'path';
import { fork } from 'child_process';
class CVService {

  async generateCV(data = {} as ICV, userId: string) {
    try { 
      const cp = fork( path.join(__dirname + '/../utils/bgWorker.ts'));
      cp.send({data, userId})

      let url = await new Promise<string>((resolve, reject) => {
      cp.on("message", (url:string) => {
        resolve(url);
      })    
    })
      return url;
    } catch (error) {
      return null
    }
  }
}

export default CVService;
