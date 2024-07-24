import {
  convertBirthYearToGregorian,
  formatDate,
} from "@/src/utils/formatTime";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "../../common/Spinner";
import { useAuth } from "@/src/user.context";
import { useEffect } from "react";

const PeopleDetails = ({ people }: { people: any }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const person = people?.find((person: any) => person?.name === id);
  const gender = person?.gender === "n/a" ? "NOT SPECIFIED" : person?.gender;
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, loading, router]);
  return (
    <>
      {!person ? (
        <Spinner className="w-12 h-12 m-auto my-10" />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 ">
            <p className="text-ts-black text-lg font-semibold">
              {person?.name}
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Gender</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {gender}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Birth Year</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {convertBirthYearToGregorian(person?.birth_year)}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Creation Date</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {formatDate(person?.created)}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Edition Date</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {formatDate(person?.edited)}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Height</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {person?.height}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Mass</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {person?.mass}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Hair Color</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {person?.hair_color}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Skin Color</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {person?.skin_color}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Eye Color</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {person?.eye_color}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PeopleDetails;
