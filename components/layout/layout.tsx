import React from "react";

// Components
import Image from "../image/image";

type LayoutProps = {
  children: React.ReactNode;
};

/**
 * Layout Component
 * @param {LayoutProps} props - The props for the Layout component.
 */

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="fixed h-[72px] w-full z-30 flex justify-center items-center bg-white">
        <Image
          src="/icons/main-logo.svg"
          width={96}
          height={24}
          alt="Xceed main logo"
        />
      </header>
      <div className="pt-[72px] relative">{children}</div>
    </>
  );
};

export default Layout;
