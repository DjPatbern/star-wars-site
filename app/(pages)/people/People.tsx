"use client";
import Container from "@/app/common/Container";
import { PeopleCard } from "@/app/common/DisplayCards";
import { Drawer, DrawerHeader } from "@/app/common/Drawer";
import { Spinner } from "@/app/common/Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PeopleDetails from "./PeopleDetails";
import { usePeople } from "@/src/hooks/data/people";
import FetchPagination from "@/app/common/Pagination";
import { useAuth } from "@/src/user.context";

const People = () => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: allPeople, isLoading } = usePeople(currentPage, true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { push } = useRouter();
  const people = allPeople?.results || [];

  const searchedPeople = people.filter((people: any) =>
    people?.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const peopleToDisplay = search === "" ? people : searchedPeople;
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
            placeholder="Search Person's Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {isLoading ? (
          <Spinner className="w-12 h-12 m-auto my-10" />
        ) : (
          <>
            <div className="md:grid lg:grid-cols-4 md:grid-cols-3 gap-8">
              {peopleToDisplay.map((person: any, index: number) => (
                <div key={index}>
                  <PeopleCard person={person} />
                </div>
              ))}
            </div>
            <FetchPagination
              pages={5}
              lastPage={Math.ceil((allPeople?.count || 0) / 10)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
        <Drawer isOpen={!!id} onClose={() => push(`/people`)}>
          <DrawerHeader title="Person Details" />
          <PeopleDetails people={people} />
        </Drawer>
      </div>
    </Container>
  );
};

export default People;
