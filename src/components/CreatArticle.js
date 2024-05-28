import { Component } from 'react';

// CreatArticle
class CreatArticle extends Component {
  render() {
    console.log('CreatArticle 실행');
    
    return (
      <section>
        <article>
          <h2>Create Article</h2>
          <form method="post" onSubmit={(e)=>{
            e.preventDefault();
            // debugger //멈추고 값을 확인하는 방법
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}>
            <p>
              <input type='text' name='title' placeholder='title'/>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}

export default CreatArticle;