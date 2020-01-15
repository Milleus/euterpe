import React, { FC } from "react";

import GridContainer from "../../shared-components/GridContainer";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";

const DashboardPage: FC<{}> = () => {
  return (
    <>
      <PageHeader />

      <GridContainer>content goes here</GridContainer>

      <PageFooter />
    </>
  );
};

export default DashboardPage;
