import { Component } from 'react';

// Myariticle
class Myariticle extends Component {
  render() {
    console.log('Myarticle 실행');
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

export default Myariticle;