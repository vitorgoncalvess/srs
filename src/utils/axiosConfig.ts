import axios from "axios";

const instance = axios.create();

export class SectionRepository {
  async getSections() {
    try {
      const response = await instance.get("/api/sections");
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async getSectionInfo(id: number) {
    try {
      const response = await instance.get(`/api/sections/${id}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export default instance;
