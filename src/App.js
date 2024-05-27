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
  render() {
    return (
      <div className="App">
        {/* props title/ desc */}
        <Myheader title="React" desc="Single Page Application"/>
        <Mynav/>
        <Myariticle title="HTML" desc="Hypertext markup language"/>
      </div>
    )
  }
}

export default App;
