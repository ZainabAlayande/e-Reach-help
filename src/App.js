import EReachDashboard from "../src/eReach/dasboard/EReachDashboard";
import EReachUser from "../src/eReach/user/EReachUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    	<BrowserRouter>
				<Routes>
					<Route path="/e-reach-dashboard" element={<EReachDashboard/>}></Route>
					<Route path="/e-reach-user" element={<EReachUser/>}></Route>
				</Routes>
			</BrowserRouter>
      
    </div>
  );
}

export default App;
