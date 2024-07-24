import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import chevronDownWhite from "@/public/svg/chev_down_w.svg";
import profileIcon from "@/public/images/person.webp";
import { useToast } from "@/src/hooks/useToast";
import { useAuth } from "@/src/user.context";
import { signOut } from "firebase/auth";
import { auth } from "@/config/FirebaseConfig";

const Profie = () => {
  const { user, isAuthenticated } = useAuth();
  const arrowDown = chevronDownWhite;
  const toast = useToast();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast("You Logged Out Successfully", "success");
      })
      .catch((error) => {
        // An error happened.
        toast("Sorry something went wrong, Try again", "failure");
      });
  };

  return (
    <>
      {isAuthenticated && (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger
              className={`${"bg-[#040309] px-3"} text-sm leading-5 `}
            >
              <Image
                src={user?.photoURL || profileIcon}
                alt="Profile icon"
                width={40}
                height={40}
                priority
                className="mr-2 rounded-full"
              />
              <span className={`truncate ${"text-ts-white"}`}>
                {user?.displayName || "Login"}
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
              onClick={handleSignOut}
            >
              <MenubarItem className="cursor-pointer">
                <p className="text-lg ml-4">Log out</p>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
    </>
  );
};

export default Profie;
