import axios from "axios";
import type { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constants";

export abstract class HttpService {
  protected readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
    });
  }
}
