import { Component } from 'react';

// UdateArticle
class UdateArticle extends Component {
  render() {
    console.log('UdateArticle 실행');
    
    return (
      <section>
        <article>
          <h2>Update Article</h2>
          <form method="post" onSubmit={(e)=>{
            e.preventDefault();
            // debugger //멈추고 값을 확인하는 방법
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}>
            <p>
              <input type='text' name='title' placeholder='title' value={this.props.data.title}/>
            </p>
            <p>
              <textarea name="desc" placeholder="description">{this.props.data.desc}</textarea>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}

export default UdateArticle;