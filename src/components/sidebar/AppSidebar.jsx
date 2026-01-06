import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiAlignJustify } from "react-icons/fi";
import style from "./AppSidebar.module.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Overview from '../../pages/overview/Overview.jsx';
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
  const [activeSidebar, setActiveSidebar] = useState(null);

  const toggleCollapse = () => setIsCollapsed(prev => !prev);

  const toggleSidebarContent = (name) => {
    setActiveSidebar(prev => (prev === name ? null : name));
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* ======= SAIDEBAR الأساسي ======= */}
        <Sidebar collapsed={isCollapsed}>
          <Menu className={style.sidebar}>
            <MenuItem
              icon={<FiAlignJustify />}
              onClick={toggleCollapse}
              className={style.collapse1}
            />

            <MenuItem onClick={() => toggleSidebarContent("dashboard")}>
              <div className={style.iconWrapper}>
                <LayoutDashboard className={style.icon} />
                {!isCollapsed && <span>Dashboard</span>}
              </div>
            </MenuItem>

            <MenuItem onClick={() => toggleSidebarContent("shipping")}>
              <div className={style.iconWrapper}>
                <Truck className={style.icon} />
                {!isCollapsed && <span>Shipping</span>}
              </div>
            </MenuItem>

            <MenuItem onClick={() => toggleSidebarContent("electric")}>
              <div className={style.iconWrapper}>
                <TruckElectric className={style.icon} />
                {!isCollapsed && <span>Electric Shipping</span>}
              </div>
            </MenuItem>

            <MenuItem onClick={() => toggleSidebarContent("customers")}>
              <div className={style.iconWrapper}>
                <Users className={style.icon} />
                {!isCollapsed && <span>Customers</span>}
              </div>
            </MenuItem>

            <MenuItem onClick={() => toggleSidebarContent("reports")}>
              <div className={style.iconWrapper}>
                <ChartBarStacked className={style.icon} />
                {!isCollapsed && <span>Reports</span>}
              </div>
            </MenuItem>

            <MenuItem onClick={() => toggleSidebarContent("tasks")}>
              <div className={style.iconWrapper}>
                <ClipboardMinus className={style.icon} />
                {!isCollapsed && <span>Tasks</span>}
              </div>
            </MenuItem>

            <MenuItem onClick={() => toggleSidebarContent("settings")}>
              <div className={style.iconWrapper}>
                <Cog className={style.icon} />
                {!isCollapsed && <span>Settings</span>}
              </div>
            </MenuItem>
          </Menu>
        </Sidebar>
        {/* ======= SAIDEBAR الجانبي ======= */}
        <div
          style={{
            width: activeSidebar ? "250px" : "0",
            transition: "width 0.3s ease",
            overflow: "hidden",
            background: "#fafafa",
            minHeight: "100vh",
            padding: activeSidebar ? "20px" : "0",
          }}
        >
          {activeSidebar === "dashboard" && (
            <>
              <h2>Dashboard</h2>
              <ul>
                <li>
                  <a
                    href="/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.sidebarLink}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <Link to="/statistics" className={style.sidebarLink}>
                    Statistics
                  </Link>
                </li>
                <li>
                  <Link to="/reports" className={style.sidebarLink}>
                    Reports
                  </Link>
                </li>
              </ul>
            </>
          )}

          {activeSidebar === "shipping" && (
            <>
              <h2>Shipping</h2>
              <ul>
                <li><Link to="/orders" className={style.sidebarLink}>Orders</Link></li>
                <li><Link to="/drivers" className={style.sidebarLink}>Drivers</Link></li>
                <li><Link to="/tracking" className={style.sidebarLink}>Tracking</Link></li>
              </ul>
            </>
          )}

          {activeSidebar === "electric" && (
            <>
              <h2>Electric Shipping</h2>
              <ul>
                <li><Link to="/vehicles" className={style.sidebarLink}>Vehicles</Link></li>
                <li><Link to="/charging" className={style.sidebarLink}>Charging</Link></li>
              </ul>
            </>
          )}

          {activeSidebar === "customers" && (
            <>
              <h2>Customers</h2>
              <ul>
                <li><Link to="/clients" className={style.sidebarLink}>Clients List</Link></li>
                <li><Link to="/support" className={style.sidebarLink}>Support</Link></li>
                <li><Link to="/feedback" className={style.sidebarLink}>Feedback</Link></li>
              </ul>
            </>
          )}

          {activeSidebar === "reports" && (
            <>
              <h2>Reports</h2>
              <ul>
                <li><Link to="/monthly" className={style.sidebarLink}>Monthly</Link></li>
                <li><Link to="/annual" className={style.sidebarLink}>Annual</Link></li>
                <li><Link to="/custom" className={style.sidebarLink}>Custom Reports</Link></li>
              </ul>
            </>
          )}

          {activeSidebar === "tasks" && (
            <>
              <h2>Tasks</h2>
              <ul>
                <li><Link to="/pending" className={style.sidebarLink}>Pending</Link></li>
                <li><Link to="/completed" className={style.sidebarLink}>Completed</Link></li>
                <li><Link to="/overdue" className={style.sidebarLink}>Overdue</Link></li>
              </ul>
            </>
          )}

          {activeSidebar === "settings" && (
            <>
              <h2>Settings</h2>
              <ul>
                <li><Link to="/profile" className={style.sidebarLink}>Profile</Link></li>
                <li><Link to="/preferences" className={style.sidebarLink}>Preferences</Link></li>
                <li><Link to="/security" className={style.sidebarLink}>Security</Link></li>
              </ul>
            </>
          )}
      </div>
    </div>
    </Router >
  );
}
