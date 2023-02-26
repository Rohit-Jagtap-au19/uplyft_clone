import React from "react";
import "./sidebar.scss";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidelinks = [
    {
      name: "dashboard",
      link: "/dashboard",
      icon: <RxDashboard size="35" className="sidenav-icons"/>,
    },
    {
      name: "profile",
      link: "/profile",
      icon: <RxPerson size="35" className="sidenav-icons"/>,
    },
    {
      name: "announment",
      link: "/announcements",
      icon: <HiOutlineSpeakerphone size="35" className="sidenav-icons"/>,
    },
    {
      name: "help",
      link: "/help",
      icon: <MdOutlineHelpOutline size="35" className="sidenav-icons"/>,
    },
  ];
  return (
    <div className="Sidebar">
      <div className="Menu_Icons">
        <AiOutlineMenuUnfold size="60" className="menuicon" />
      </div>
      <div className="Side_Links">
        {sidelinks.map((link) => {
          return (
            <ul>
              <Link to={link.link}>
                <li>
                  {link.icon}
                  {link.name}
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
