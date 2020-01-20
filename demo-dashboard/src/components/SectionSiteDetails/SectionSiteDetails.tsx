import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Button, { ButtonAppearance } from "../../shared-components/Button";
import GridContainer from "../../shared-components/GridContainer";
import { ADHOC_SCAN_PAGE } from "../../routes";

const SectionSiteDetails: FC<RouteComponentProps> = ({ history }) => {
  const handleClick = () => {
    history.push(ADHOC_SCAN_PAGE);
  };

  return (
    <>
      <div className="bg-checker-primary">
        <GridContainer>
          <div className="flex items-end text-white py-4">
            <span>Displaying data for&nbsp;</span>
            <h2>sportsingapore.gov.sg</h2>
          </div>
        </GridContainer>
      </div>

      <div className="bg-white">
        <GridContainer>
          <div className="flex items-center justify-between py-4">
            <div>
              <p>
                URL:{" "}
                <a
                  href="https://www.sportsingapore.gov.sg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://www.sportsingapore.gov.sg
                </a>
              </p>
              <p>
                Scan Status: <span className="text-green-700">Completed</span>{" "}
                (15 Jan 2020, 3:06PM)
              </p>
            </div>
            <div>
              <Button appearance={ButtonAppearance.SECONDARY} className="mr-4">
                Rerun Check
              </Button>
              <Button
                appearance={ButtonAppearance.PRIMARY}
                onClick={handleClick}
              >
                Check another site
              </Button>
            </div>
          </div>
        </GridContainer>
      </div>
    </>
  );
};

export default withRouter(SectionSiteDetails);
