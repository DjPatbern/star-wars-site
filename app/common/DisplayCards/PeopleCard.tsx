import React, { useEffect, useState } from "react";
import Link from "next/link";
import { garamond } from "@/src/utils/font";
import { convertBirthYearToGregorian } from "@/src/utils/formatTime";
import axios from "axios";

type Props = {
  person: any;
};

export const PeopleCard = ({ person }: Props) => {
  const [films, setFilms] = useState<any>([]);
  const [species, setSpecies] = useState<any>([]);
  const gender = person?.gender === "n/a" ? "NOT SPECIFIED" : person?.gender;
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const fetchPromises = person?.films.map((url: any) => axios.get(url));
        const filmsData = await Promise.all(fetchPromises);
        setFilms(filmsData.map((film) => film?.data));
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    const fetchSpecies = async () => {
      try {
        const fetchPromises = person?.species.map((url: any) => axios.get(url));
        const speciesData = await Promise.all(fetchPromises);
        setSpecies(speciesData.map((species) => species?.data));
      } catch (error) {
        console.error("Error fetching species data:", error);
      }
    };

    fetchFilms();
    fetchSpecies();
  }, [person?.films, person?.species]);

  return (
    <Link href={`/people/?id=${person?.name}`}>
      <div className="flex-col items-center justify-start pt-5 flex py-1.5 px-1.5 rounded-xl gap-4 hover:border-[#F9F871] h-80 border-4 border-dotted border-ts-faded-purple md:mb-8 mb-10">
        <div>
          <p
            className={`${garamond.className} font-semibold text-[1.37500rem] leading-6`}
          >
            {person?.name}
          </p>
        </div>

        <div>
          <p className="font-extralight text-center text-[10px] uppercase leading-3 text-[#F9F871]">
            Birth Year: {convertBirthYearToGregorian(person?.birth_year)}
          </p>
          <p className="font-extralight text-[10px] uppercase leading-3 text-[#969696]">
            Gender: {gender}
          </p>
        </div>
        <ul className="lg:w-full lg:ml-20">
          <li>Films:</li>
          {films.map((film: any, index: number) => (
            <li
              key={index}
              className="flex gap-2 text-xs mb-1 hover:text-[#F9F871] font-light"
            >
              <p>{index + 1}:</p>
              <Link href={`/films?id=${film?.episode_id}`}>{film?.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-left lg:w-full lg:ml-20">
          <li>Species:</li>
          {species.map((specie: any, index: number) => (
            <li
              key={index}
              className="flex gap-2 text-xs mb-1 text-[#F9F871] font-light"
            >
              <p>{index + 1}:</p>
              <p>{specie?.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
