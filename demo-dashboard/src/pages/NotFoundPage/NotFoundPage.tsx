import React, { FC } from "react";

import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import { ADHOC_SCAN_PAGE } from "../../routes";

const NotFoundPage: FC<{}> = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <PageHeader />

      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-4">Opps! Something went wrong.</h1>
        <p>
          Page cannot be found. Click <a href={ADHOC_SCAN_PAGE}>here</a> to
          return to home.
        </p>
      </div>

      <PageFooter />
    </div>
  );
};

export default NotFoundPage;
