import { ICV } from "../interfaces/index.interface";
import { generatePDF } from "../utils/helper";

class CVService {

  async generateCV(data = {} as ICV, userId: string) {
    try {
      //todo use child process to generate pdf
      let url = await generatePDF(data, userId);
      return url;      
    } catch (error) {
      return null
    }
  }
}

export default CVService;
