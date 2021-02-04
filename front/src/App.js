import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./routes/home/Home.jsx";
import About from "./routes/about/About.jsx";
import Footer from "./components/footer/Footer";
import Admin from "./routes/admin/Admin";
import Dashboard from "./routes/admin/Dashboard";
import adminContext from "./contexts/adminContext";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";

export default function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <>
      <adminContext.Provider value={{ admin, setAdmin }}>
        <Navbar />
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/admin/auth' exact component={Admin} />
            {admin ? (
              <Route path='/admin/dashboard' exact component={Dashboard} />
            ) : (
              <Redirect to='/admin/auth' />
            )}
          </Switch>
        </div>
        <Footer />
      </adminContext.Provider>
    </>
  );
}
