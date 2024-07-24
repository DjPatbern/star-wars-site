"use client";
import Container from "@/app/common/Container";
import { FilmCard } from "@/app/common/DisplayCards";
import { Spinner } from "@/app/common/Spinner";
import { useFilms } from "@/src/hooks/data/films";
import React from "react";

const Films = () => {
  const { data: allFilms, isLoading, isError } = useFilms(true);
  return (
    <Container>
      <div className="text-ts-white my-5">
        {isLoading ? (
          <Spinner className="w-12 h-12 m-auto my-10" />
        ) : (
          <div className="md:grid md:grid-cols-4 gap-8">
            {allFilms?.results?.map((film: any, index: number) => (
              <div key={index}>
                <FilmCard film={film} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Films;
