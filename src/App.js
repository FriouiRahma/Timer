import React from 'react';
import logo from './logo.svg';
import './App.css';


class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      isToggleOn:false
    }
      
 setInterval(
   () => { this.state.isToggleOn  &&
          this.setState(
            { time: this.state.time + 1000 })
        },
        1000
      )
      }
  
      handleClick =() => {
        this.setState({ isToggleOn: !this.state.isToggleOn})
        console.log(this.state.isToggleOn)
        
        } 
        handlePause =() => {
          this.setState({ time:0,isToggleOn:false}
            )
          
          
          } 


  render() {
    let seconds = Math.floor((this.state.time / 1000) % 60)
    let minutes = Math.floor((this.state.time / (1000 * 60)) % 60)
    let hours = Math.floor((this.state.time / (1000 * 60 * 60)) % 24)

    // hours: (hours < 10) ? "0" + hours : hours,
    // minutes: (minutes < 10) ? "0" + minutes : minutes,
    // seconds: (seconds < 10) ? "0" + seconds : seconds
    return (
      <div className="gors">

        {/* <span>{(this.state.second > 60) ? <span>{parseInt(this.state.second/60)} </span>: <span>{this.state.minut} </span>}</span> */}
        {/* <span>{this.state.minut>60 ? <span>{parseInt(this.state.minut/60) } </span>: <span>{this.state.hours} </span>}</span> */}


       
       {hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(3, "0") + ":" + seconds.toString().padStart(2, "0")}
       <div className="Buttonnn">
    <button  onClick={this.handleClick}>{this.state.isToggleOn? "Pause": "Start"}</button>
        <button  onClick={this.handlePause}>Reset</button>
        </div>
      </div>

    );

  }

}


function App() {
  return (
    <div className="App">

      <Timer />

    </div>
  );
}

export default App;
