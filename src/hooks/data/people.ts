import { peopleService } from "@/src/services/people.service";
import { QUERY_PATHS } from "@/src/utils/constants";
import { useQuery } from "react-query";

export const usePeople = (pageNumber: number, enable?: boolean) => {
  return useQuery({
    queryKey: [QUERY_PATHS.PEOPLE, pageNumber],
    queryFn: () => peopleService.getPeople(pageNumber),
    enabled: enable,
  });
};

export const usePerson = (enable?: boolean, id?: string) => {
  return useQuery({
    queryKey: [QUERY_PATHS.PEOPLE],
    queryFn: () => peopleService.getPersonById(id),
    enabled: enable,
  });
};
