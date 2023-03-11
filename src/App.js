import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Component } from 'react-router-dom';
import Home from './components/Home';
import Comments from './components/Comments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users/:userId" element={<Comments />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
