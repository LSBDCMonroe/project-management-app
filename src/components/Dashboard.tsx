import React from 'react';
import '../pages/Startpage.css';
import {Card, Badge} from '../style/styled';
import UpperDashboard from './UpperDashboard';
import MiddleDashboard from './MiddleDashboard';
import BottomDashboard from './BottomDashboard';

const Dashboard = ()=>(
    <div className="parent-dashboard">
        <UpperDashboard/>
        <MiddleDashboard/>
        <BottomDashboard/>
    </div>
);

export default Dashboard;
