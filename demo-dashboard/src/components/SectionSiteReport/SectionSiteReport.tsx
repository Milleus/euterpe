import React, { FC } from "react";

import Button, { ButtonAppearance } from "../../shared-components/Button";
import Tab from "../../shared-components/Tab";
import TabItem from "../../shared-components/TabItem";
import Card from "../../shared-components/Card";

const SectionSiteReport: FC<{}> = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <div>
          <h2>Broken Link Report</h2>
          <p className="mb-4">Displaying all detected broken links</p>
        </div>
        <Button appearance={ButtonAppearance.PRIMARY}>Export</Button>
      </div>

      <Tab initialIndex={0}>
        <TabItem title="Internal" value={28}>
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptatem ullam voluptates voluptas recusandae a inventore incidunt
            excepturi totam animi molestiae sapiente asperiores expedita
            molestias, soluta dolores, doloremque eos dicta.
          </Card>
        </TabItem>
        <TabItem title="External" value={8}>
          <Card>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            deleniti officia nobis magni. Dolore repellendus enim earum, tempore
            repellat ducimus accusamus mollitia temporibus blanditiis nemo,
            quasi molestiae voluptate porro eos.
          </Card>
        </TabItem>
        <TabItem title="All" value={36}>
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptatem ullam voluptates voluptas recusandae a inventore incidunt
            excepturi totam animi molestiae sapiente asperiores expedita
            molestias, soluta dolores, doloremque eos dicta.
          </Card>
        </TabItem>
      </Tab>
    </div>
  );
};

export default SectionSiteReport;
