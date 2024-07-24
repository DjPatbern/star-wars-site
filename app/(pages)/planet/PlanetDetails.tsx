import {
  formatDate,
} from "@/src/utils/formatTime";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "../../common/Spinner";
import { useAuth } from "@/src/user.context";
import { useEffect } from "react";

const PlanetDetails = ({ planets }: { planets: any }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const planet = planets?.find((planet: any) => planet?.name === id);
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, loading, router]);
  return (
    <>
      {!planet ? (
        <Spinner className="w-12 h-12 m-auto my-10" />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 ">
            <p className="text-ts-black text-lg font-semibold">
              {planet?.name}
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Climate</p>
              <p className="flex-1 text-ts-black-primary font-medium">
               {planet?.climate}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Gravity</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.gravity}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Creation Date</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {formatDate(planet?.created)}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Edition Date</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {formatDate(planet?.edited)}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Population</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.population}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Terrain</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.terrain}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Diameter</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.diameter}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Orbital Period</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.orbital_period}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Rotation Period</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.rotation_period}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Surface Water</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {planet?.surface_water}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PlanetDetails;
