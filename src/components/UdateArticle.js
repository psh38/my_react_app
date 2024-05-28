import { Component } from 'react';

// UdateArticle
class UdateArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
  }
  inputFormHandler(e){
    this.setState({
      [e.target.name]:e.target.value
      // [e.target.name] ->computed property name 계산된 속성이름
    })
  }
  render() {
    console.log('UdateArticle 실행');
    
    return (
      <section>
        <article>
          <h2>Update Article</h2>
          <form method="post" onSubmit={(e)=>{
            e.preventDefault();
            // debugger //멈추고 값을 확인하는 방법
            this.props.onSubmit
              (this.state.id,
              e.target.title.value,
              e.target.desc.value);
          }}>
            <input type="hidden" name="id" value={this.state.id}/>
            <p>
              <input
              type='text'
               name='title'
              placeholder='title'
              value={this.state.title}
              onChange={e=>{
                this.inputFormHandler(e)
              }}  
              />
            </p>
            <p>
              <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={e=>{
                this.inputFormHandler(e)
              }}  
              ></textarea>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}

export default UdateArticle;