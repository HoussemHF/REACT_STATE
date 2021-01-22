import React ,{Component} from 'react';
import './App.css';
import imgSrc from './img.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Person : {
        FullName  :"HOUSSEM HAFSAOUI",
        Bio       :"Hey there ! I am Houssem, I'm an Tunisian man .I love maths, physics, chemistries and programming.",
        Profession:"Full-Stack Developer",
        img       :imgSrc,
      },
      show: true,
      count:0
    }
  }

  componentDidMount() {
    setInterval(()=>this.setState({count:this.state.count+1}),1000)  
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:'#CCC2C0', width:'100%', height:'100vh'}}>
        <button style={{border:'transparent', borderRadius:'1em' ,marginTop:"1em", backgroundColor:"#C1F4F0", fontSize:"small", fontWeight:'lighter'}} onClick={()=>this.setState({show:!this.state.show})}>Show / Hide the profile</button>
        <div style={{color:"black",fontWeight:"normal",textAlign:"center"}}>You have spent <span style={{color:"blue",fontWeight:"bolder"}} >{this.state.count} seconds </span>looking at my profile.</div>
        {this.state.show?
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"10px",width:"20em",height:"27em",margin:"auto",backgroundColor:"#F1F2E2 ",marginTop:"30px"}}>
            <img src={this.state.Person.img} style={{width:"8em", height:"8em", border:'solid 5px #E91E63' ,borderRadius:"50%"}} alt="profile" />
            <h1 style={{color:"#E91E63"}} >{this.state.Person.FullName}</h1>
            <h4 style={{color:"#585c59"}}>{this.state.Person.Bio}</h4>
            <h2 style={{color:"#212121", fontSize:'1em'}}>{this.state.Person.Profession}</h2>
          </div>
        :null
        }
      </div>
    );
  }
}

export default App;