import Image from 'next/image';
import Link from 'next/link';
// import logoFull from '@/public/svg/logoFull.svg';
// import logoSmall from '@/public/svg/logoSmall.svg';
// import logoDark from '@/public/svg/logoDarkBg.svg';


const LogoHeader = () => {
  // const logoIcon = darkBg ? logoDark : logoFull
  return (
    <Link href="/">
      {/* <Image src={logoSmall} alt="The Park DB" className="md:hidden" priority /> */}
      Logo Big
      {/* <Image
        src={logoIcon}
        alt="The Park DB"
        className="hidden md:block max-w-[160px]"
        priority
      /> */}
    </Link>
  );
};

export default LogoHeader;
