import React, { FC } from "react";

import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import { ADHOC_SCAN_PAGE } from "../../routes";
import GridContainer from "../../shared-components/GridContainer";

const NotFoundPage: FC<{}> = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <PageHeader />

      <GridContainer>
        <div className="w-full flex flex-col justify-center items-center p-20">
          <h1 className="mb-4">Opps! Something went wrong.</h1>
          <p>
            Page cannot be found. Click <a href={ADHOC_SCAN_PAGE}>here</a> to
            return to home.
          </p>
        </div>
      </GridContainer>

      <PageFooter />
    </div>
  );
};

export default NotFoundPage;
