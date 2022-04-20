import React from 'react'

export default function Wath() {
  let hr = document.querySelector('#hr');
  let mn = document.querySelector('#mn');
  let sc = document.querySelector('#sc');

  setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * 6;
      let ss = day.getSeconds() * 6;
    
      hr.style.transform = `rotatez(${hh+(mm/12)}deg)`;
      mn.style.transform = `rotatez(${mm}deg)`;
      sc.style.transform = `rotatez(${ss}deg)`;
  })

  return (
    <div>
        <div className="container">
            <div className="clock">
                <div className="circle" style={{"--clr": '#04fc43'}} id="sc"><i></i></div>
                <div className="circle circle2"  style={{"--clr": '#fee800'}} id="mn"><i></i></div>
                <div className="circle circle3"  style={{"--clr": '#ff2972'}} id="hr"><i></i></div>
                <span style={{"--i": 1}}><b>1</b></span>
                <span style={{"--i": 2}}><b>2</b></span>
                <span style={{"--i": 3}}><b>3</b></span>
                <span style={{"--i": 4}}><b>4</b></span>
                <span style={{"--i": 5}}><b>5</b></span>
                <span style={{"--i": 6}}><b>6</b></span>
                <span style={{"--i": 7}}><b>7</b></span>
                <span style={{"--i": 8}}><b>8</b></span>
                <span style={{"--i": 9}}><b>9</b></span>
                <span style={{"--i": 10}}><b>10</b></span>
                <span style={{"--i": 11}}><b>11</b></span>
                <span style={{"--i": 12}}><b>12</b></span>
            </div>
        </div>
    </div>
  )
}