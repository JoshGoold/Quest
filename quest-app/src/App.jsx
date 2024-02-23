import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import NoPage from './pages/NoPage.jsx'
import Art from './pages/Art.jsx'
import Carpentry from './pages/Carpentry.jsx'
import Music from './pages/Music.jsx'
import Learn from './pages/Learn.jsx'
import Design from './pages/Design.jsx'
import Programmer from './pages/Programmer.jsx'
import Community from './pages/Community.jsx'
import Finance from './pages/Finance.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/art" element={<Art />}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/carpentry" element={<Carpentry />}/>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/programmer" element={<Programmer />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/finance" element={<Finance />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
