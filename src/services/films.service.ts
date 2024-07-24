import { QUERY_PATHS } from "../utils/constants";
import { HttpService } from "./http.sevice";

class FilmsService extends HttpService {
  constructor() {
    super();
  }

  public async getFilms() {
    const { data } = await this.http.get(QUERY_PATHS.FILMS);
    return data;
  }
}

export const filmsService = new FilmsService();
