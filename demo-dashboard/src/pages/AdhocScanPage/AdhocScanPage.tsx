import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { DASHBOARD_PAGE } from "../../routes";
import bicepMan from "./images/bicep_man.png";
import Button, { ButtonAppearance } from "../../shared-components/Button";
import PageHeader from "../../components/PageHeader";

const AdhocScanPage: FC<RouteComponentProps> = ({ history }) => {
  const handleClick = () => {
    history.push(DASHBOARD_PAGE);
  };

  return (
    <>
      <PageHeader />

      <div className="flex items-center justify-center p-20">
        <div className="w-auto mr-4">
          <img src={bicepMan} alt="bicep_man" style={{ maxHeight: "14rem" }} />
        </div>
        <div className="w-1/3 flex flex-col justify-center">
          <h1 className="text-4xl">
            Fix Your Links
            <br />
            Before Your Ties Go Unlink
          </h1>
          <p className="text-gray-600 leading-tight mb-4">
            Start discovering broken links to enhance your
            <br />
            user experience today.
          </p>
          <div className="flex">
            <input
              className="w-full border py-2 px-4 rounded mr-4"
              type="text"
              value="https://www.sportsingapore.gov.sg/"
              readOnly={true}
            ></input>
            <Button appearance={ButtonAppearance.PRIMARY} onClick={handleClick}>
              Check
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AdhocScanPage);
