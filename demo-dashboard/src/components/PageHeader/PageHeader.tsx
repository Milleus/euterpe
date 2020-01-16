import React, { FC } from "react";

import Navbar from "../../shared-components/Navbar";
import { DUMMY_LINK, ADHOC_SCAN_PAGE, DASHBOARD_PAGE } from "../../routes";

const PageHeader: FC<{}> = () => {
  return (
    <Navbar>
      <a href={DUMMY_LINK}>
        <h2 className="text-white">SITE CHECKER</h2>
      </a>
      <a href={ADHOC_SCAN_PAGE} className="text-white">
        Adhoc Scan
      </a>
      <a href={DASHBOARD_PAGE} className="text-white">
        Dashboard
      </a>
    </Navbar>
  );
};

export default PageHeader;
