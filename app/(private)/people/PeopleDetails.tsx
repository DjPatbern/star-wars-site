import ShowMoreText from "react-show-more-text";
import { formatDate } from "@/src/utils/formatTime";
import { useSearchParams } from "next/navigation";
import { Spinner } from "../../common/Spinner";

const PeopleDetails = ({ films }: { films: any }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const film = films?.find((film: any) => film?.episode_id === Number(id));
  return (
    <>
      {!film ? (
        <Spinner className="w-12 h-12 m-auto my-10" />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 ">
            <p className="text-ts-black text-lg font-semibold">{film?.title}</p>
          </div>

          <div className="w-full text-ts-black text-sm my-4">
            <ShowMoreText
              lines={5}
              more="Read more"
              less="Read less"
              anchorClass="text-ts-purple m-2 rounded mt-5 cursor-pointer"
              expanded={false}
            >
              <p className="text-ts-black-primary w-full">
                {film?.opening_crawl.replace(/<\/?p>/g, "")}
              </p>
            </ShowMoreText>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Release Date</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {formatDate(film?.release_date)}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Director</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {film?.director}
              </p>
            </div>

            <div className="flex items-center w-full">
              <p className="w-[130px] text-ts-grey-900">Producer</p>
              <p className="flex-1 text-ts-black-primary font-medium">
                {film?.producer}
              </p>
            </div>
            <div className="flex gap-5 mt-4 items-center justify-center md:justify-start">
              <button className=" text-center  zoom-animation bg-ts-purple hover:bg-ts-faded-purple text-white font-bold py-2 px-4 rounded-2xl">
                Play Now
              </button>
              <span className="text-[#686868] text-base">Or</span>
              <button className=" text-center  zoom-animation bg-ts-black-400 hover:bg-ts-black-300 text-white font-bold py-2 px-4 rounded-2xl">
                Download
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PeopleDetails;
