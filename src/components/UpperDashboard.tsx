import React from 'react';
import '../pages/Startpage.css';
import {Card, Badge} from '../style/styled';


const UpperDashboard = ()=>(
    <div className="UpperDashboard">
        <div style={{minHeight: "25vh"}}>
            <Card className="bold txt-sm">
            <div className="align-center">Current Projects: 0</div>
            <div className="align-center">Completed Projects: 10</div>
            <div className="align-center">Available Members: <div className="chip">Aayush</div></div>
            <div className="align-center">Average Project/Members: 3.2</div>
            </Card>
        </div>

        <div style={{minHeight: "20vh"}}>
            <Card className="bold txt-sm">
            <div className="align-center">Current Projects: 0</div>
            <div className="align-center">Completed Projects: 10</div>
            <div className="align-center">Available Members: <div className="chip">Aayush</div></div>
            <div className="align-center">Average Project/Members: 3.2</div>
            </Card>
        </div>

        <div style={{minHeight: "20vh"}}>
            <Card className="bold txt-sm">
            <div className="align-center">Current Projects: 0</div>
            <div className="align-center">Completed Projects: 10</div>
            <div className="align-center">Available Members: <div className="chip">Aayush</div></div>
            <div className="align-center">Average Project/Members: 3.2</div>
            </Card>
        </div>  

        <div style={{minHeight: "20vh"}}>
            <Card className="bold txt-sm">
            <div className="align-center">Current Projects: 0</div>
            <div className="align-center">Completed Projects: 10</div>
            <div className="align-center">Available Members: <div className="chip">Aayush</div></div>
            <div className="align-center">Average Project/Members: 3.2</div>
            </Card>
        </div>                      

    </div>
);

export default UpperDashboard;