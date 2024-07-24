import { QUERY_PATHS } from "../utils/constants";
import { HttpService } from "./http.sevice";

class PeopleService extends HttpService {
  constructor() {
    super();
  }

  public async getPeople(pageNumber:number) {
    const { data } = await this.http.get(`${QUERY_PATHS.PEOPLE}/?page=${pageNumber}`);
    return data;
  }

  public async getPersonById(id?: string) {
    const { data } = await this.http.get(`${QUERY_PATHS.PEOPLE}/${id}`);
    return data;
  }
}

export const peopleService = new PeopleService();
