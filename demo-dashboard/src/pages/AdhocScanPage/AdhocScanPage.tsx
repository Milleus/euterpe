import React, { FC } from "react";

import GridContainer from "../../shared-components/GridContainer";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";

const AdhocScanPage: FC<{}> = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <PageHeader />

      <GridContainer>
        <div className="flex -mx-4">
          <button
            disabled
            className="bg-blue-900 text-white p-4 rounded disabled:opacity-75"
          >
            abcde
          </button>
          <div className="w-full px-4">hello world</div>
        </div>
      </GridContainer>

      <PageFooter />
    </div>
  );
};

export default AdhocScanPage;
