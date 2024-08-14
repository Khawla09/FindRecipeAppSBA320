import Pages from "./pages/Pages"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

function App() {

  return (
<div className="app">
  <BrowserRouter>

<Logo />
<p style={{textAlign:'center', fontSize:'20px', marginBottom:'30px'}}>Welcome to Find Your Recipe your go-to app for discovering<br />
 a variety of recipes and exploring global cuisines. <br />
 Whether you're searching for a popular dish, a vegetarian delight,<br />
   or a sweet treat, this app makes finding recipes a breeze!</p>
<Search />
<Category />
<Pages />
<Footer />

</BrowserRouter>
</div>
  )
}




export default App
