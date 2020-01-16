import React, { FC } from "react";

import GridContainer from "../../shared-components/GridContainer";
import Navbar from "../../shared-components/Navbar";

const PageHeader: FC<{}> = () => {
  return (
    <div className="bg-white">
      <GridContainer>
        <Navbar>
          <h2 className="text-black">SITE CHECKER</h2>
        </Navbar>
      </GridContainer>
    </div>
  );
};

export default PageHeader;
