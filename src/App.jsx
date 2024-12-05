import Login from './componnant/login';
import Home from './componnant/home';
import { Routes,Route } from 'react-router-dom';

import ProtectedRouter from './componnant/protectedRouter';
import Jobs from './componnant/findjob';
import JobDetails from './componnant/jobDetails';
import ItJobs from './componnant/itJobs';
import Blog from './componnant/blog';


const App = ()=>(

  
<Routes>


<Route path="/" element={<ProtectedRouter Component ={Home} />} ></Route>

<Route path="/findjob" element={<ProtectedRouter Component ={Jobs} />} ></Route>
<Route path="/itJobs" element={<ProtectedRouter Component ={ItJobs} />} ></Route>

<Route path="/blog" element={<ProtectedRouter Component ={Blog} />} ></Route>

<Route path="/findjob/:id" element={<ProtectedRouter Component ={JobDetails} />}></Route>

<Route path="/itJobs/:id" element={<ProtectedRouter Component ={JobDetails} />}></Route>



<Route path="/login" element={<Login/>} ></Route>


</Routes>
)
export default App;