import Image from "next/image";
import Link from "next/link";
import Container from "../../Container";
// import logo from "@/public/svg/logoFull.svg";
// import logoDark from "@/public/svg/logoDarkFooter.svg";


const Footer = () => {
  const color = "text-ts-white" 
  const linkColor = "text-ts-white" 
  // const logoIcon = darkBg ? logoDark : logo
  return (
    <footer className={`${color} w-full md:pt-16 md:pb-20 py-12 2xl:pt-20  2xl:pb-[6.5rem]`}>
      <Container>
        <div className="pb-8 md:block flex justify-center">
          <div>
            <Link href="/">
            Logo
              {/* <Image src={logoIcon} alt="The Park DB" className="w-[288.98px]" priority /> */}
            </Link>
          </div>
        </div>
        <div className="md:flex justify-between w-full leading-4">
          <div className="text-sm leading-5 my-5 md:my-0 md:text-left text-center">
          Your ultimate guide to every visitor attraction in the world.  
          </div>
          <div className="flex gap-10 justify-center">
           <div className="flex flex-col gap-3">
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Home</Link>
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Parks</Link>
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>FAQ</Link>
           <Link href="/about" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>About</Link>
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Services</Link>
           </div>
           <div className="flex flex-col gap-3">
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Terms of Use</Link>
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Cookies</Link>
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Privacy Policy</Link>
           </div>
           <div className="flex flex-col gap-3">
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>Twitter</Link>
           <Link href="/" className={`${linkColor} hover:text-ts-Green text-xs font-normal leading-4`}>LinkedIn</Link>
           </div>
          </div>
        </div>
        <div className="text-xs leading-4 md:text-left text-center md:mt-0 mt-5">© 2024 The Park Database. All rights reserved</div>
      </Container>
    </footer>
  );
};

export default Footer;
