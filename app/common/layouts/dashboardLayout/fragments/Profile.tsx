import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import chevronDown from "@/public/svg/chevronDown.svg";
import chevronDownWhite from "@/public/svg/chev_down_w.svg";
import profileIcon from "@/public/svg/profileIcon.svg";
// import { useUserContext } from "@/src/stores/user.context";
import { useRouter } from "next/navigation";
// import { useLogout } from "@/src/hooks/data/user";
import { useToast } from "@/src/hooks/useToast";
// import axios from "axios";
// import { BASE_URL, QUERY_PATHS } from "@/src/utils/constants";
// import { StorageKeys, getStorageData } from "@/src/utils/storage";

const Profie = () => {
  // const { isAuthenticated, setIsAuthenticated, displayName } = useUserContext();
  const arrowDown = chevronDownWhite;
  const router = useRouter();
  const toast = useToast();
  // const {
  //   data
  // } = useLogout(isAuthenticated);
  // const token = getStorageData(StorageKeys.TOKEN);
  // const photoIcon = photoUrl !== "undefined" ? photoUrl : profileIcon;
  // const handLogout = () => {
  //   localStorage.clear();
  //   setIsAuthenticated(false);
  //   toast("data.message", "success");
  //   router.push("/")
  // };

  // const handleLogout = async () => {
  //   localStorage.clear();
  //   setIsAuthenticated(false);
  //   toast("Logged Out succesfully", "success");
  //   router.push("/");
  //   try {
  //     // Assuming `token` is defined and contains the correct token value
  //     const { data } = await axios.get(`${BASE_URL}${QUERY_PATHS.LOGOUT}`, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });

  //     // Assuming response contains a `code` and `message` field
  //     if (data && data.code === 200) {
  //       localStorage.clear();
  //       setIsAuthenticated(false);
  //       toast(data.message, "success");
  //       router.push("/");
  //     } else {
  //       toast(data.message, "failure");
  //     }
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error logging out:", error);
  //     // toast("Logged Out succesfully", "failure");
  //   }
  // };

  return (
    <>
      {" "}
      {/* {isAuthenticated ? ( */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            className={`${"bg-[#040309] px-3"} text-sm leading-5 `}
          >
            <Image
              src={profileIcon}
              alt="Profile icon"
              width={30}
              height={30}
              priority
              className="mr-2"
            />
            <span className={`truncate ${"text-ts-white"}`}>
              {/* {displayName} */}
              Name
            </span>
            <Image
              src={arrowDown}
              alt="chevron icon"
              priority
              className="ml-2 max-w-2"
            />
          </MenubarTrigger>
          <MenubarContent
            className="bg-white px-0 rounded-2xl"
            align="end"
            // onClick={handleLogout}
          >
            <MenubarItem className="cursor-pointer">
              <p className="text-lg ml-4">Log out</p>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/* ) : <></>} */}
    </>
  );
};

export default Profie;
