import React, { FC } from "react";

import Navbar from "../../shared-components/Navbar";
import { DUMMY_LINK } from "../../routes";

const PageHeader: FC<{}> = () => {
  return (
    <Navbar>
      <h2 className="text-white">CDKJW</h2>
      <a href={DUMMY_LINK} className="text-white">
        Link 1
      </a>
      <a href={DUMMY_LINK} className="text-white">
        Link 2
      </a>
      <a href={DUMMY_LINK} className="text-white">
        Link 3
      </a>
    </Navbar>
  );
};

export default PageHeader;
