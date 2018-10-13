import React from 'react';
import { Link } from 'react-router-dom'

const DashboardPage = () => (

    <div>
        <ul>
            
            <Link className="link-class" to="/new-well"><button>new well</button></Link> <br /> <br />
            <Link className="link-class" to="/my-wells"><button>my wells</button></Link> <br /> <br />
            <Link className="link-class" to="/account"><button>account settings</button></Link> <br /> <br />
        </ul>
    </div>
);

export default DashboardPage;