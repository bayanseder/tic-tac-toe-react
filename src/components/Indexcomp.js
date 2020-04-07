import React, { Component } from "react";
import "./indexcomp.css";

class Boxs extends Component {
  state = {
    values : Array(9).fill(null),
    player: "X",
    playerA: 0,
    playerB: 0,
    tie :0
  };

  checkWinner(){
    const cases =[
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]
    for(let i=0;i<cases.length; i++){
      const [a , b , c]= cases[i];
      if(this.state.values[a]&&this.state.values[a]===this.state.values[b]&&this.state.values[b]===this.state.values[c]){
        if(this.state.values[a]==="X"){
          const aResult=this.state.playerA + 1;
          const reset = Array(9).fill(null)
          this.setState({playerA : aResult,
                      values : reset})
          console.log('yeah .... winner player A')
        }
       else if(this.state.values[a]==="O"){
        const bResult=this.state.playerB + 1;
        const reset = Array(9).fill(null)
          this.setState({playerB : bResult,
                        values : reset })
          console.log('yeah .... winner player B')
        }
      }
    }

  }
  clickhandler = (index) => {
    let newValue =this.state.values;
    if (this.state.values[index] === null) {
      newValue[index]= this.state.player
      this.setState({ player : this.state.player==="X" ? "O" : "X",
                      values : newValue  });
    } 
    this.checkWinner()
  };
   
   
  render() {
      const Box =this.state.values.map((item,index)=> <div
          key={index}
          className="boxes"
          onClick={() => this.clickhandler(index)}
  >{item}</div>)
    return (
      <div>
        <div className="continer">
          {Box}
         </div>
        <div>
      <h2>Result</h2>
    <p>player A : {this.state.playerA} </p>
    <p>player B : {this.state.playerB} </p>
        </div>

      </div>
    );
  }
}

export default Boxs;
