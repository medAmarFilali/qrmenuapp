import { useState } from "react";
import QrAppBar from "../dashboardLayout/qrAppBar/QrAppBar";
import QrDrawer from "../dashboardLayout/qrDrawer/QrDrawer";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <QrAppBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <QrDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </>
  );
};

export default DashboardLayout;
