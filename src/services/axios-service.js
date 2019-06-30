import axios from "axios";

class AxiosService {
  axiosInstance = {};

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.for9a.com/opportunity"
    });

    return this.axiosInstance;
  }

  getInstance() {
    return this.axiosInstance || this.initInstance();
  }
}

export default new AxiosService();
