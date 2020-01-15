import React, { FC, ReactNode, Children } from "react";

import GridContainer from "../GridContainer";

interface Props {
  children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
  const links = Children.map(children, (child: ReactNode, index: number) => {
    return (
      <li key={index} className="mr-5">
        {child}
      </li>
    );
  });

  return (
    <nav className="bg-blue-900">
      <GridContainer>
        <ul className="flex items-center h-16 min-h-full">{links}</ul>
      </GridContainer>
    </nav>
  );
};

export default Navbar;
