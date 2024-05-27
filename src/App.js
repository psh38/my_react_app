import { Component, setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import Myariticle from './components/Myarticle';

// 함수형 (최근 추세)
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

//클래스형
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{
        title:'react',
        desc:'Single Page Application'
      },
      welcome:{
        title:'Welcome',
        desc:'Welcome to React'
      },
      menus:[
        {id:1, title:'HTML',desc:'Hypertext markup language'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JS',desc:'JS is for interaction'}
      ]
    };
  }
  render() {
    console.log('App 실행')
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title =this.state.welcome.title;
      _desc =this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title =this.state.menus[0].title;
      _desc =this.state.menus[0].desc;
    }
    return (
      <div className="App">
        {/* props title/ desc */}
        {/* <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/> */}
        <header>
          <h1 className="logo">
            {/* <a href="" onClick={function(e){
              e.preventDefault();
              this.setState({
                mode: 'welcome'
              });
            }.bind(this)}
            >{this.state.subject.title}</a> */}
            <a href="" onClick={(e)=>{
              e.preventDefault();
              this.setState({
                mode: 'welcome'
              });
            }}
            >{this.state.subject.title}</a>
          </h1>
          <p>{this.state.subject.desc}</p>
        </header>
        <Mynav data={this.state.menus}/>
        <Myariticle title={_title} desc={_desc}/>
      </div>
    )
  }
}

export default App;
