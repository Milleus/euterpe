import React, { FC } from "react";

import GridContainer from "../../shared-components/GridContainer";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";

const AdhocScanPage: FC<{}> = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <PageHeader />

      <GridContainer>
        <div className="flex -mx-4">
          <div className="w-full px-4">hello world</div>
        </div>
      </GridContainer>

      <PageFooter />
    </div>
  );
};

export default AdhocScanPage;
