import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress:5
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        loaderSpeed={1000}
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key={"General"} category={"General"} />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key={"Business"} category={"Business"} />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key={"Entertainment"} category={"Entertainment"} />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key={"Science"} category={"Science"} />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key={"Sports"} category={"Sports "} />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key={"Technology"} category={"Technology"} />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key={"Health"} category={"Health"} />} />
          </Routes>
        </BrowserRouter>
        {/* <button onClick={()=>{alert(process.env.REACT_APP_NEWS_API)}}>Hello</button> */}
      </div>
    )
  }
}
