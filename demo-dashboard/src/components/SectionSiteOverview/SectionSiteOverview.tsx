import React, { FC } from "react";

import ChartDoughnut from "../../shared-components/ChartDoughnut";
import Tooltip from "../../shared-components/Tooltip";
import Card from "../../shared-components/Card";

const SectionSiteOverview: FC<{}> = () => {
  const chartData = {
    labels: ["Working Links", "Internal Broken Links", "External Broken Links"],
    datasets: [
      {
        data: [400, 8, 28], // Specify the data values array
        backgroundColor: ["#4860af", "#d50d0d", "#800908"],
        borderColor: ["#4860af", "#d50d0d", "#800908"],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="my-8">
      <h2>Overview</h2>
      <p className="mb-4">Highlights of scan site</p>

      <div className="flex -mx-4">
        <div className="w-full sm:1/2 px-4">
          <Card>
            <h3 className="mb-4">Site Links Overview</h3>
            <ChartDoughnut data={chartData} />
          </Card>
        </div>

        <div className="w-full sm:1/2 px-4 flex flex-col">
          <Card className="flex-grow mb-4">
            <h3 className="mb-4 ">Total Links</h3>
            <h1>4,620</h1>
          </Card>

          <Card className="flex-grow mt-4">
            <h3 className="mb-4 flex items-center">
              Total Broken Links
              <Tooltip iconClassName="fa fa-info-circle text-checker-primary">
                A dead link on a web page that no longer works. it is further
                broken down into internal link (link that points to another page
                on the same website) and external link (link that points to
                another page on another website)
              </Tooltip>
            </h3>
            <h1 className="mb-4 text-checker-secondary">36</h1>
            <p>Internal: 28 External: 8</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SectionSiteOverview;
