import { filmsService } from "@/src/services/films.service";
import { QUERY_PATHS } from "@/src/utils/constants";
import { useQuery } from "react-query";

export const useFilms = (enable?: boolean) => {
  return useQuery({
    queryKey: [QUERY_PATHS.FILMS],
    queryFn: () => filmsService.getFilms(),
    enabled: enable,
  });
};

export const useFilm = (enable?: boolean, id?: string) => {
  return useQuery({
    queryKey: [QUERY_PATHS.FILMS],
    queryFn: () => filmsService.getFilm(id),
    enabled: enable,
  });
};