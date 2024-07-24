"use client";
import Container from "@/app/common/Container";
import { FilmCard } from "@/app/common/DisplayCards";
import FilmDetails from "@/app/(pages)/films/FilmDetails";
import { Drawer, DrawerHeader } from "@/app/common/Drawer";
import { Spinner } from "@/app/common/Spinner";
import { useFilms } from "@/src/hooks/data/films";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/src/user.context";

const Films = () => {
  const [search, setSearch] = useState<string>("");
  const { data: allFilms, isLoading } = useFilms(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { push } = useRouter();
  const films = allFilms?.results || [];

  const searchedFilms = films.filter((film: any) =>
    film?.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  const filmsToDisplay = search === "" ? films : searchedFilms;
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
            placeholder="Search Movie Title"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {isLoading ? (
          <Spinner className="w-12 h-12 m-auto my-10" />
        ) : (
          <div className="md:grid lg:grid-cols-4 md:grid-cols-3 gap-8 ">
            {filmsToDisplay.map((film: any, index: number) => (
              <div key={index}>
                <FilmCard film={film} />
              </div>
            ))}
          </div>
        )}
        <Drawer isOpen={!!id} onClose={() => push(`/films`)}>
          <DrawerHeader title="Film Details" />
          <FilmDetails films={films} />
        </Drawer>
      </div>
    </Container>
  );
};

export default Films;
