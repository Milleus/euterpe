import React, { FC, ReactNode, Children } from "react";

interface Props {
  children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
  const renderLinks = (child: ReactNode, index: number) => {
    return (
      <li key={index} className="mr-4">
        {child}
      </li>
    );
  };

  return (
    <nav>
      <ul className="flex items-center py-8 min-h-full">
        {Children.map(children, renderLinks)}
      </ul>
    </nav>
  );
};

export default Navbar;
