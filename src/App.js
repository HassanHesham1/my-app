
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import SidebarRight from "./component/SidebarRight";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Single from "./component/Single";
import Category from "./component/Category"
function App() {
  return (
<>
<BrowserRouter>
<Header/>
<SidebarRight/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Single/:id" element={<Single/>}/>
<Route path="/Category:id" element={<Category/>} />
<Route path="/post/:cat" element={<Category/>} />
</Routes>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
