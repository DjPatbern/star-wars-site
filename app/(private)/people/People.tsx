"use client";
import Container from "@/app/common/Container";
import { PeopleCard } from "@/app/common/DisplayCards";
import { Drawer, DrawerHeader } from "@/app/common/Drawer";
import { Spinner } from "@/app/common/Spinner";
import { useFilms } from "@/src/hooks/data/films";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import PeopleDetails from "./PeopleDetails";

const People = () => {
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

  return (
    <Container>
      <div className="text-ts-white my-5">
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
          <div className="md:grid md:grid-cols-4 gap-8">
            {filmsToDisplay.map((film: any, index: number) => (
              <div key={index}>
                <PeopleCard film={film} />
              </div>
            ))}
          </div>
        )}
        <Drawer isOpen={!!id} onClose={() => push(`/films`)}>
          <DrawerHeader title="Film Details" />
          <PeopleDetails films={films} />
        </Drawer>
      </div>
    </Container>
  );
};

export default People;
