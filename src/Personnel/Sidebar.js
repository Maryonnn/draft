import { NavLink } from 'react-router-dom';
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

function Sidebar(){
    return (
        <div className='sidebar'>
            <CDBSidebar className='sidebar-text'>
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    <div className="container sidebar-logo">
                        <img src={'navi-logo.png'} className='navi-logo' alt=''/>
                        <img src={'logo.png'} style={{ width: '120px' }} alt=''/>
                    </div>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/create" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa-solid fa-user-plus">Create Account</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/#" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa-solid fa-users">Members</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/#" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="medal">Milestone</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/#" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="trophy">Competition</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/#" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="dollar-sign">Seed Funding</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/#" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
