import Container from "../../Container";
import LogoHeader from "./fragments/LogoHeader";
import LinkItems from "./fragments/LinkItems";
import PhoneHamburger from "./fragments/PhoneHamburger";
import Profile from "./fragments/Profile";

const Header = () => {
  return (
    <header
      className={` shadow-sm z-50 py-6`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <LogoHeader  />
          <div className="hidden flex-1 lg:flex justify-center px-10">
            <LinkItems  />
          </div>
          <div className="flex items-center">
            <PhoneHamburger  />
            <div className="hidden md:block">
              <Profile  />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
