import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiAlignJustify } from "react-icons/fi";
import style from "./AppSidebar.module.css";

// استيراد الأيقونات من lucide-react
import {
  LayoutDashboard,
  ChartBarStacked,
  Truck,
  TruckElectric,
  Users,
  ClipboardMinus,
  Cog
} from "lucide-react";

export default function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  const handleMenuClick = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <Sidebar collapsed={isCollapsed}>
      <Menu className={style.sidebar}>

        {/* زر الفتح / الإغلاق */}
        <MenuItem
          onClick={toggleCollapse}
          className={style.collapse1}
          icon={<FiAlignJustify />}
        />

        {/* Dashboard */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <LayoutDashboard className={style.icon} />
            {!isCollapsed && <span>Dashboard</span>}
          </div>
        </MenuItem>

        {/* Reports */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <ChartBarStacked className={style.icon} />
            {!isCollapsed && <span>Reports</span>}
          </div>
        </MenuItem>

        {/* Shipping */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <Truck className={style.icon} />
            {!isCollapsed && <span>Shipping</span>}
          </div>
        </MenuItem>

        {/* Electric Shipping */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <TruckElectric className={style.icon} />
            {!isCollapsed && <span>Electric Shipping</span>}
          </div>
        </MenuItem>

        {/* Customers */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <Users className={style.icon} />
            {!isCollapsed && <span>Customers</span>}
          </div>
        </MenuItem>

        {/* Tasks */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <ClipboardMinus className={style.icon} />
            {!isCollapsed && <span>Tasks</span>}
          </div>
        </MenuItem>

        {/* Settings */}
        <MenuItem onClick={handleMenuClick}>
          <div className={style.iconWrapper}>
            <Cog className={style.icon} />
            {!isCollapsed && <span>Settings</span>}
          </div>
        </MenuItem>

      </Menu>
    </Sidebar>
  );
}
