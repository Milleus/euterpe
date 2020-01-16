import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { FC, Suspense, lazy } from "react";

import * as Paths from "./index";
import NotFoundPage from "../pages/NotFoundPage";
import Spinner from "../shared-components/Spinner";

const AdhocScanPage = lazy(() => import("../pages/AdhocScanPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner isCenter={true} />}>
        <Switch>
          <Route
            exact={true}
            path={Paths.ADHOC_SCAN_PAGE}
            component={AdhocScanPage}
          />

          <Route
            exact={true}
            path={Paths.DASHBOARD_PAGE}
            component={DashboardPage}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
