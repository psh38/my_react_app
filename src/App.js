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
      mode:'welcome',
      selected_id:2,
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
      let i = 0;
      while(i<this.state.menus.length){
        let data = this.state.menus[i];
        if(data.id === this.state.selected_id){
          _title = data.title;
          _desc = data.desc;
        }
        i++;
      }
    }
    return (
      <div className="App">
        {/* props title/ desc */}
        {/* bind 방법 */}
        {/* <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChanePage={function(){
          this.setState({mode:'welcome'})
        }.bind(this)}/> */}
        {/* arrow */}
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChanePage={(val)=>{
          this.setState({mode:val})
        }}/>
        <Mynav data={this.state.menus} onChanePage={(id)=>{
          console.log(id);
          this.setState({
            mode:'read',
            selected_id:Number(id)
          })
        }}/>

        <Myariticle title={_title} desc={_desc}/>
      </div>
    )
  }
}

export default App;
