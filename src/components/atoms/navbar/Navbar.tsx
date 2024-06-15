import { Link, useLocation } from "react-router-dom";

import { cn } from "../../../utils/utils";
import { navBarItems } from "../../../constants";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="hidden md:flex items-center justify-between my-6 py-2 gap-12 font-inter">
      {navBarItems.map((item) => {
        return (
          <div>
            <Link
              to={item.link}
              className={
                (cn("p-2"),
                location.pathname === item.link ? "text-primary" : "")
              }
            >
              <p>{item.label}</p>
            </Link>
            {location.pathname === item.link && (
              <div className="gradient w-full" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
