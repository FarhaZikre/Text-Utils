// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextData from './components/TextData';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes} from "react-router-dom"; // for routing using navbar


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {   //automatically dismiss alert after 3 sec
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'; // dark color 042743
      showAlert(" Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f0faf7';// light color
      showAlert(" Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>

        {/* this is main file which render root from index file */}
        {/* Here if I put all html code then it will look like mess */}
        {/* That's why I am creating componenets folder add component to folder and call it here like below */}
        <Navbar about="About Text-Utils" mode={mode} toggleMode={toggleMode} />
        {/* toggleMode is a function goin in Navbar but defination is here */}
        {/* above about is props: sending text from this file to Navbar.js */}
        <Alert alert={alert} />

        <div className="container my-3"> {/* margin y axis 3  my-3 */}
          
          {/* below all code within Routes tag is used to traverse through pages without reload pages it's called routing*/}
          {/* All components come under Routh with syntax,Route comes under Routes and Routes comes under BrowserRouter */}
          {/* BrowserRouter contain all data which shonw in webpage- Alert,Navbar also */}

          <Routes>  
            {/* <Route path='Path You want to use' element={<What you want to render >}/> */}
            <Route exact path="/" element={<TextData heading="Enter your text to Analyze" mode={mode} />}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            {/* for this path-> is set in navbar */}
            {/* exact path = react uses partial matching so it is efficirnt to use exact path */}
            {/* /users -----> componenet 1
            /users/profile ------> component2 
            when you want component 2 and not mentioned exact keyword it always gives you component1 */}
          </Routes>
  
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
// run file using 'npm start' command
// But make sure that you are in your project name folder directory 'first-app'
