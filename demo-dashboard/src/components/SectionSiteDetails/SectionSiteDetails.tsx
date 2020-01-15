import React, { FC } from "react";

import Button, { ButtonAppearance } from "../../shared-components/Button";

const SectionSiteDetails: FC<{}> = () => {
  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <div>
          <p>
            URL: <a href="https://www.hdb.gov.sg">https://www.hdb.gov.sg</a>
          </p>
          <p>
            Scan Status: <span className="text-green-700">Completed</span> (15
            Jan 2020, 3:06PM)
          </p>
        </div>
        <Button appearance={ButtonAppearance.PRIMARY}>Rerun Check</Button>
      </div>
    </div>
  );
};

export default SectionSiteDetails;
