import React from 'react';
import logo from './logo.svg';
import LandingPage from "./pages/LandingPage/LandingPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage/ContactPage";

const App = () => {
    // https://stackoverflow.com/questions/2756575/drawing-text-to-canvas-with-font-face-does-not-work-at-the-first-time

    return (
      <>
        <Header/>
        <LandingPage/>
        <ResumePage/>
        <ContactPage/>
      </>
  );
};



export default App;
