// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import About from './Components/About/About'
// // import Services from './Components/Services/Services'
// import MyWork from './Components/MyWork/MyWork'
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <About/>
//       {/* <Services/> */}
//       <MyWork/>
//       <Contact/>
//       <Footer/>
//     </div>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'; // Project Detail Page
import ScrollToTop from './Components/ScrollTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      {/* <Navbar /> */}
      <Routes>
        {/* Home Page (Saara content yahi rahega) */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <MyWork />
            <Contact />
          </>
        } />
        
        {/* Project Detail Page (Sirf tab dikhe jab koi project click kare) */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

