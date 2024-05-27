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
        <h1 className="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
      // 빈 프래그먼트 (해결방법)
      // <>
      //   <h1 class="logo">React</h1>
      //   <p>Single Page Application</p>
      // </>
    )
  }
}

// Mynav
class Mynav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="">HTML</a>
          </li>
          <li>
            <a href="">CSS</a>
          </li>
          <li>
            <a href="">JS</a>
          </li>
        </ul>
      </nav>
    )
  }
}

// Myariticle
class Myariticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      </section>
    )
  }
}


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
