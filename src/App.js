import { Component } from 'react';
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
      subject:{
        title:'react',
        desc:'Single Page Application'
      },
      menus:[
        {id:1, title:'HTML',desc:'Hypertext markup language'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JS',desc:'JS is for interaction'}
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {/* props title/ desc */}
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/>
        <Mynav data={this.state.menus}/>
        <Myariticle title="HTML" desc="Hypertext markup language"/>
      </div>
    )
  }
}

export default App;
