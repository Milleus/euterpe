import React, { FC } from "react";

import Button, { ButtonAppearance } from "../../shared-components/Button";
import Tab from "../../shared-components/Tab";
import TabItem from "../../shared-components/TabItem";

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

      <Tab initialIndex={0}>
        <TabItem title="Internal" value={28}>
          smlj 1
        </TabItem>
        <TabItem title="External" value={8}>
          smlj asdasdasd2
        </TabItem>
        <TabItem title="All" value={36}>
          smlasdasdasdasj 3
        </TabItem>
      </Tab>
    </div>
  );
};

export default SectionSiteReport;
