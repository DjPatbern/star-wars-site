import { QUERY_PATHS } from "../utils/constants";
import { HttpService } from "./http.sevice";

class PlanetService extends HttpService {
  constructor() {
    super();
  }

  public async getPlanets(pageNumber: number) {
    const { data } = await this.http.get(
      `${QUERY_PATHS.PLANETS}/?page=${pageNumber}`
    );
    return data;
  }

  public async getPlanetById(id?: string) {
    const { data } = await this.http.get(`${QUERY_PATHS.PLANETS}/${id}`);
    return data;
  }
}

export const planetService = new PlanetService();
