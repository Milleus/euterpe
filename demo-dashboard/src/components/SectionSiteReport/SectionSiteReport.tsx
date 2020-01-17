import React, { FC } from "react";

import Button, { ButtonAppearance } from "../../shared-components/Button";
import Tab from "../../shared-components/Tab";
import TabItem from "../../shared-components/TabItem";
import Table from "../../shared-components/Table";
import { FilterColumn } from "../../shared-components/Table/Table";
import SelectFilter from "../../shared-components/Table/SelectFilter";
import {
  internalBroken,
  externalBroken,
  totalBroken,
  internalData,
  externalData,
  allData
} from "../../data/utils";
import Tooltip from "../../shared-components/Tooltip";

interface RowData {
  status: number;
  page_url: string;
  resolved_url: string;
  attr_href: string;
  link_text: string;
  linkClicks: number;
}

const columns: Array<FilterColumn<RowData>> = [
  {
    Header: "Result",
    accessor: "status",
    Filter: SelectFilter,
    filter: "includes"
  },
  {
    Header: "URL",
    Cell: ({ row: { original } }) => (
      <div>
        <a href={original.resolved_url}>{original.attr_href}</a>
        <br />
        <span className="text-xs">
          Linked from <a href={original.page_url}>{original.page_url}</a>
        </span>{" "}
      </div>
    )
  },
  {
    Header: () => (
      <div className="flex">
        <div>Anchor Text</div>
        <Tooltip iconClassName="fa fa-info-circle text-checker-primary">
          Refers to visible clickable text in a hyper link
        </Tooltip>
      </div>
    ),
    accessor: "link_text",
    Cell: ({ row: { original } }) => original.link_text || "-"
  },
  {
    Header: () => (
      <div className="flex">
        <div>Clicks</div>
        <Tooltip iconClassName="fa fa-info-circle text-checker-primary">
          Number of clicks on the link, populated from ???
        </Tooltip>
      </div>
    ),
    accessor: "clicks"
  }
];

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
        <TabItem title="Internal" value={internalBroken}>
          <Table columns={columns} data={internalData} />
        </TabItem>
        <TabItem title="External" value={externalBroken}>
          <Table columns={columns} data={externalData} />
        </TabItem>
        <TabItem title="All" value={totalBroken}>
          <Table columns={columns} data={allData} />
        </TabItem>
      </Tab>
    </div>
  );
};

export default SectionSiteReport;
