import React, { useEffect, useState } from "react";
import Link from "next/link";
import { garamond } from "@/src/utils/font";
import axios from "axios";

type Props = {
  planet: any;
};

export const PlanetCard = ({ planet }: Props) => {
  const [films, setFilms] = useState<any>([]);
  const [residents, setResidents] = useState<any>([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const fetchPromises = planet?.films.map((url: any) => axios.get(url));
        const filmsData = await Promise.all(fetchPromises);
        setFilms(filmsData.map((film) => film?.data));
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    const fetchResidents = async () => {
      try {
        const fetchPromises = planet?.residents.map((url: any) =>
          axios.get(url)
        );
        const residentsData = await Promise.all(fetchPromises);
        setResidents(residentsData.map((residents) => residents?.data));
      } catch (error) {
        console.error("Error fetching residents data:", error);
      }
    };

    fetchFilms();
    fetchResidents();
  }, [planet?.films, planet?.residents]);

  return (
    <Link href={`/planet/?id=${planet?.name}`}>
      <div className="flex-col items-center justify-start pt-5 flex py-1.5 px-1.5 rounded-xl gap-4 hover:border-[#F9F871] h-80 border-4 border-dotted border-ts-faded-purple md:mb-8 mb-10">
        <div>
          <p
            className={`${garamond.className} font-semibold text-[1.37500rem] leading-6`}
          >
            {planet?.name}
          </p>
        </div>

        <div>
          <p className="font-extralight text-center text-[10px] uppercase leading-3 text-[#F9F871]">
            Gravity: {planet?.gravity}
          </p>
          <p className="font-extralight text-[10px] uppercase leading-3 text-[#969696]">
            Climate: {planet?.climate}
          </p>
        </div>
        <ul className="lg:w-full lg:ml-20">
          <li>Films:</li>
          {films.slice(0, 3).map((film: any, index: number) => (
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
          <li>Residents:</li>
          {residents.slice(0, 3).map((resident: any, index: number) => (
            <li
              key={index}
              className="flex gap-2 text-xs mb-1 text-[#F9F871] font-light"
            >
              <p>{index + 1}:</p>
              <p>{resident?.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
