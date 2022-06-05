import { ICV } from '../interfaces/index.interface';
import { generatePDF } from './helper';

process.on("message", async({data, userId}) => { 
  try { 
        let url = await generatePDF(data, userId);   
        process.send(url);
  } catch (error) {
        console.log(error);
        process.send(null);
  } finally {
    process.exit();
  }
})
