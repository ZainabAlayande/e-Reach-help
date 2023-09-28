import React from 'react'
import TopNav from './TopNav';
import SideBar from './SideBar';
import Body from './Body';
import BelowTopNav from './BelowTopNav';
import get from "../assets/images/pexels-karolina-grabowska-4590785.jpg"
import "../../eReach/styles/dashboard.css"


const dashboardStyle = {
  backgroundImage: 'url("../assets/images/pexels-karolina-grabowska-4590785.jpg)', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center', 
};


const Dashboard = () => {
  return (
    
    <div backgroundImage="../assets/images/pexels-karolina-grabowska-4590785.jpg">
    <TopNav/>
    <BelowTopNav/>
    <Body/>
    <SideBar/>
    </div>
   
  )
}

export default Dashboard




