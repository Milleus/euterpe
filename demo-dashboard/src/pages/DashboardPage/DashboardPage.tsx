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
      <SectionSiteDetails />

      <GridContainer>
        <SectionSiteOverview />
        <SectionSiteReport />
      </GridContainer>

      <PageFooter />
    </>
  );
};

export default DashboardPage;
