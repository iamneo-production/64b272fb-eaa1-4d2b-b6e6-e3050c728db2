import React from 'react';
import { Link } from 'react-router-dom';
import Admission from './Admission';

function Dashboard(props) {

  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login1');
  }

  return (
    <div>
      <div className='row'>
        <div className='col-sm-2'>
            <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
                <Link to={"/admission"} style={{ "text-decoration": "none" }}>Admission</Link><br /><br />
            </div>
        </div>
        <div className='col-sm-10 h-100'>
            <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
                Welcome User!<br /><br />
                <input type="button" onClick={handleLogout} value="Logout" />
            </div>
        </div>
    </div>
  </div>
  );
}

export default Dashboard;