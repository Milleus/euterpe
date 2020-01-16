import React, { FC } from "react";

import { ADHOC_SCAN_PAGE, DASHBOARD_PAGE } from "../../routes";
import Button, { ButtonAppearance } from "../../shared-components/Button";
import GridContainer from "../../shared-components/GridContainer";
import Navbar from "../../shared-components/Navbar";

const PageHeader: FC<{}> = () => {
  return (
    <>
      <div className="bg-white">
        <GridContainer>
          <Navbar>
            <h2 className="text-black">SITE CHECKER</h2>
            <a href={ADHOC_SCAN_PAGE} className="text-black">
              Adhoc Scan
            </a>
            <a href={DASHBOARD_PAGE} className="text-black">
              Dashboard
            </a>
          </Navbar>
        </GridContainer>
      </div>

      <div className="bg-checker-primary">
        <GridContainer>
          <div className="flex items-end text-white py-4">
            <span>Displaying data for&nbsp;</span>
            <h2>hdb.gov.sg</h2>
          </div>
        </GridContainer>
      </div>

      <div className="bg-white">
        <GridContainer>
          <div className="flex items-center justify-between py-4">
            <div>
              <p>
                URL: <a href="https://www.hdb.gov.sg">https://www.hdb.gov.sg</a>
              </p>
              <p>
                Scan Status: <span className="text-green-700">Completed</span>{" "}
                (15 Jan 2020, 3:06PM)
              </p>
            </div>
            <Button appearance={ButtonAppearance.PRIMARY}>Rerun Check</Button>
          </div>
        </GridContainer>
      </div>
    </>
  );
};

export default PageHeader;
