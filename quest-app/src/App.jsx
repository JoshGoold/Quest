import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import NoPage from './Pages/NoPage.jsx'
import Art from './Pages/Art.jsx'
import Carpentry from './Pages/Carpentry.jsx'
import Music from './Pages/Music.jsx'
import Learn from './Pages/Learn.jsx'
import Design from './Pages/Design.jsx'
import Programmer from './Pages/Programmer.jsx'
import Community from './Pages/Community.jsx'
import Finance from './Pages/Finance.jsx'
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
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
