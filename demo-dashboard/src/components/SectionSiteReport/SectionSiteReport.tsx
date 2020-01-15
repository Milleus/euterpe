import React, { FC } from "react";

import Button, { ButtonAppearance } from "../../shared-components/Button";

const SectionSiteReport: FC<{}> = () => {
  return (
    <div className="my-4 mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h3>Broken Link Report</h3>
          <p className="mb-4">Displaying all detected broken links</p>
        </div>
        <Button appearance={ButtonAppearance.PRIMARY}>Export</Button>
      </div>

      {/* tabs and beyond */}
    </div>
  );
};

export default SectionSiteReport;
