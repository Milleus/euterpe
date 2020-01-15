import React, { FC } from "react";

import GridContainer from "../../shared-components/GridContainer";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import SectionSiteDetails from "../../components/SectionSiteDetails";
import SectionSiteOverview from "../../components/SectionSiteOverview";
import SectionSiteReport from "../../components/SectionSiteReport";

const DashboardPage: FC<{}> = () => {
  return (
    <>
      <PageHeader />

      <GridContainer>
        <div className="flex -mx-4">
          <div className="w-full px-4">
            <SectionSiteDetails />
            <hr></hr>
            <SectionSiteOverview />
            <SectionSiteReport />
          </div>
        </div>
      </GridContainer>

      <PageFooter />
    </>
  );
};

export default DashboardPage;
