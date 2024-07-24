'use client';
import { auth } from "@/config/FirebaseConfig";
import { useToast } from "@/src/hooks/useToast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React, { useEffect } from "react";
import arrowPurple from "@/public/svg/arrow_right_purple.svg";
import google from "@/public/svg/google.svg";
import LoginImg from "@/public/images/login.webp";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/user.context";

const Login = () => {
  const toast = useToast();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/films"); // Redirect to films if  authenticated
    }
  }, [isAuthenticated, router]);


  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        toast("You Logged In Successfully", "success");
        router.push("/films")
      })
      .catch((error) => {
        toast("Something went wrong, please try again", "failure");
      });
  };
  return (
    <>
      <div className="my-10">
        <div className="text-[#F9F871] text-center px-4 py-2 rounded-xl">
          <h1>LOGIN HERE!!!</h1>
        </div>
        <Image src={LoginImg} className="m-auto my-10 rounded-xl" width={290} height={290} priority alt="login image" />
        <button
          className="py-2 px-4 border-2 bg-ts-white hover:bg-ts-light-white border-[#AD9FF1] rounded-full items-center m-auto flex gap-[10px]"
          onClick={handleSignIn}
        >
          <Image src={google} alt="google" priority />
          <p className="text-[#7D7D7D]">Continue with Google</p>
          <Image src={arrowPurple} alt="google" priority />
        </button>
      </div>
    </>
  );
};

export default Login;
