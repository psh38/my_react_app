import { Component } from 'react';
import './App.css';

// 함수형 (최근 추세)
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

//클래스형

// Myheader
class Myheader extends Component {
  render() {
    return (
      //주의사항 JSX문법영역 이기 때문에 부모가 반드시 있어야 함!
      <header>
        <h1 class="logo">React</h1>
        <p>Single Page Application</p>
      </header>
      // 빈 프래그먼트 (해결방법)
      // <>
      //   <h1 class="logo">React</h1>
      //   <p>Single Page Application</p>
      // </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Myheader></Myheader>
      </div>
    )
  }
}

export default App;
