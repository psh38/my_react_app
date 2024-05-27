import { Component } from 'react';

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

export default Myheader;