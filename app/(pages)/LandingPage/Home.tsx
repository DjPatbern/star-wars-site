"use client";
import DashboardLayout from "@/app/common/layouts/dashboardLayout";
import { movieTypes } from "@/src/data";
import { garamond } from "@/src/utils/font";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import cinema from "@/public/images/cinema2.jpg";
import Image from "next/image";
import Container from "@/app/common/Container";
import Link from "next/link";
import { useAuth } from "@/src/user.context";
import { useRouter } from "next/navigation";

const Home = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/films"); // Redirect to films if  authenticated
    }
  }, [isAuthenticated, loading, router]);

  return (
    <DashboardLayout>
      <>
        <Container>
          <div className="2xl:max-w-7xl mx-auto w-full pl-4">
            <div className="md:flex w-full md:py-[59px] md:justify-between 4xl:py-24 sm:gap-14 xl:gap-40 py-10 flex-row-reverse">
              <div className="flex-1 md:mb-0 mb-12 flex justify-center items-center flex-col">
                <Image
                  src={cinema}
                  className="rounded-md"
                  alt="hero image"
                  priority
                />
              </div>
              <div className="flex-1 text-left gap-4 flex flex-col">
                <h1
                  className={`${garamond.className} lg:text-[3.5rem] text-[1.75rem] text-ts-white  font-semibold leading-10 lg:leading-[3.625rem] lg:tracking-[-0.07rem]`}
                >
                  Enjoy Your Best{" "}
                  <span className="text-ts-purple block">
                    <TypeAnimation
                      sequence={movieTypes}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: "1em", display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </span>{" "}
                  Movies here on our website.
                </h1>
                <p className="text-ts-accent-grey-600">Sign up to access Films, People and Planets</p>
                <div className="flex gap-10 mt-4 items-center justify-start">
                  <Link
                    href="/login"
                    className=" text-center  zoom-animation bg-[#F9F871] hover:bg-ts-faded-purple text-ts-black-primary font-bold py-2 px-4 rounded-2xl"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/login"
                    className=" text-center  zoom-animation bg-ts-faded-purple hover:bg-ts-black-300 text-white font-bold py-2 px-4 rounded-2xl"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    </DashboardLayout>
  );
};

export default Home;
