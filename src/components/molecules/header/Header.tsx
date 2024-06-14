import logo from "../../../../public/assets/images/logo.svg";
import ActionBar from "../../atoms/actionBar";
import Navbar from "../../atoms/navbar";

const Header = () => {
  return (
    <>
      <header className="flex justify-between px-28  h-[100px]">
        <img src={logo} alt="Logo" className="h-full py-5" />
        <Navbar />
        <ActionBar />
      </header>
      <div className="gradient" />
    </>
  );
};

export default Header;
