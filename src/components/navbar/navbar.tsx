import React from "react";
import { MaxWidthWrapper } from "../max-width-wrapper/max-width-wrapper";
import { Icon } from "../icon/icon";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 sm:mx-16">
      <header className="relative bg-white">
            <div className="flex h-16 items-center justify-end">
              {/* TODO: mobile Navbar */}
              <div className="mr-4 flex transform rotate-180">
                <Icon name="Text" size={26} />
              </div>
            </div>
      </header>
    </div>
  );
};

export default Navbar;
