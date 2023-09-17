import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import {useParams} from 'react-router-dom';
const Dashboard = () => {
  let {search} = useLocation();
  let queryparams = new URLSearchParams(search);
  return (
    <div>
    <center>
      <div>Dashboard Page</div>
     {/*Query Params calling*/}
      <p>Query Name: {queryparams.get('name')}</p>
      <p>Query Age: {queryparams.get('age')}</p>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
      </center>
    </div>
  )
}

export default Dashboard
