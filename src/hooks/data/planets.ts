import { planetService } from "@/src/services/planet.service";
import { QUERY_PATHS } from "@/src/utils/constants";
import { useQuery } from "react-query";

export const usePlanets = (pageNumber: number, enable?: boolean) => {
  return useQuery({
    queryKey: [QUERY_PATHS.PLANETS, pageNumber],
    queryFn: () => planetService.getPlanets(pageNumber),
    enabled: enable,
  });
};

export const usePlanet = (enable?: boolean, id?: string) => {
  return useQuery({
    queryKey: [QUERY_PATHS.PLANETS],
    queryFn: () => planetService.getPlanetById(id),
    enabled: enable,
  });
};
