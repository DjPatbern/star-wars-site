"use client";
import Container from "@/app/common/Container";
import { PlanetCard } from "@/app/common/DisplayCards";
import { Drawer, DrawerHeader } from "@/app/common/Drawer";
import { Spinner } from "@/app/common/Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchPagination from "@/app/common/Pagination";
import { useAuth } from "@/src/user.context";
import PlanetDetails from "./PlanetDetails";
import { usePlanets } from "@/src/hooks/data/planets";

const Planet = () => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: allPlanet, isLoading } = usePlanets(currentPage, true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { push } = useRouter();
  const planets = allPlanet?.results || [];

  const searchedPlanet = planets.filter((planet: any) =>
    planet?.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const planetsToDisplay = search === "" ? planets : searchedPlanet;
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, loading, push]);

  return (
    <Container>
      <div className="text-ts-white my-5 min-h-[100vh]">
        <div className="flex justify-center items-center mb-10">
          <input
            type="text"
            className="border border-[#F9F871] outline-none p-3 w-1/2 text-ts-purple rounded-xl"
            value={search}
            placeholder="Search Planet Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {isLoading ? (
          <Spinner className="w-12 h-12 m-auto my-10" />
        ) : (
          <>
            <div className="md:grid lg:grid-cols-4 md:grid-cols-3 gap-8">
              {planetsToDisplay.map((planet: any, index: number) => (
                <div key={index}>
                  <PlanetCard planet={planet} />
                </div>
              ))}
            </div>
            <FetchPagination
              pages={5}
              lastPage={Math.ceil((allPlanet?.count || 0) / 10)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
        <Drawer isOpen={!!id} onClose={() => push(`/planet`)}>
          <DrawerHeader title="Planet Details" />
          <PlanetDetails planets={planets} />
        </Drawer>
      </div>
    </Container>
  );
};

export default Planet;
