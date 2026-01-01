import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import style from './Sidebar.module.css';
import { FiAlignJustify } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiShippingContainerThin } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";



export default function UserSidebar() {
    // يبدأ السايدبار مسكّر
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(prev => !prev);
    };

    const handleMenuClick = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
        }
    };


    return (
        <Sidebar collapsed={isCollapsed}>
            <Menu className={style.sidebar}>

                {/* زر الفتح / الإغلاق */}
                <MenuItem
                    onClick={toggleCollapse}
                    className={style.collapse1}
                    icon={isCollapsed ? <FiAlignJustify /> : <FiAlignJustify />}
                >
                </MenuItem>

                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <MdDashboard className={style.icon} />
                        {!isCollapsed && <span>Dashboard</span>}
                    </div>
                </MenuItem>

                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <MdProductionQuantityLimits className={style.icon} />
                        {!isCollapsed && <span>Categories</span>}
                    </div>
                </MenuItem>


                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <PiShippingContainerThin className={style.icon} />
                        {!isCollapsed && <span>Shipping Settings</span>}
                    </div>
                </MenuItem>

                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <FaShippingFast className={style.icon} />
                        {!isCollapsed && <span>Shipping Operations</span>}
                    </div>
                </MenuItem>

                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <FaUsers className={style.icon} />
                        {!isCollapsed && <span>Customers</span>}
                    </div>
                </MenuItem>

                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <TbReportSearch className={style.icon} />
                        {!isCollapsed && <span>Reports</span>}
                    </div>
                </MenuItem>

                <MenuItem onClick={handleMenuClick}>
                    <div className={style.icons}>
                        <IoMdSettings className={style.icon} />
                        {!isCollapsed && <span>Settings</span>}
                    </div>
                </MenuItem>

            </Menu>
        </Sidebar>
    );
}

