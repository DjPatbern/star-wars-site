import Image from "next/image";
import Link from "next/link";
import Container from "../../Container";
// import logo from "@/public/svg/logoFull.svg";
// import logoDark from "@/public/svg/logoDarkFooter.svg";

const Footer = () => {
  const color = "text-ts-white";
  const linkColor = "text-ts-white";
  // const logoIcon = darkBg ? logoDark : logo
  return (
    <footer
      className={`${color} w-full md:pt-16 pb-5`}
    >
      <hr />
      <Container>
        <div className="md:flex justify-between w-full leading-4 mt-10">
          <div className="pb-8 md:block flex justify-center">
            <div className="text-[#F9F871] border-2 border-dotted border-[#F9F871] inline-block px-4 py-2 rounded-xl">
              <Link href="/">DEMOVIEZ</Link>
            </div>
          </div>

          <div className="flex gap-10 justify-center">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className={`${linkColor} hover:text-[#F9F871] text-xs font-normal leading-4`}
              >
                Home
              </Link>
              <Link
                href="/"
                className={`${linkColor} hover:text-[#F9F871] text-xs font-normal leading-4`}
              >
                Instagram
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className={`${linkColor} hover:text-[#F9F871] text-xs font-normal leading-4`}
              >
                Terms of Use
              </Link>
              <Link
                href="/"
                className={`${linkColor} hover:text-[#F9F871] text-xs font-normal leading-4`}
              >
                Twitter
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className={`${linkColor} hover:text-[#F9F871] text-xs font-normal leading-4`}
              >
                Privacy Policies
              </Link>
              <Link
                href="/"
                className={`${linkColor} hover:text-[#F9F871] text-xs font-normal leading-4`}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="text-xs leading-4 md:text-left text-center md:mt-0 mt-5">
          © 2024 Demoviez. All rights reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
