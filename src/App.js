import { Component, setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import ReadArticle from './components/ReadArticle';
import Controls from './components/Controls';
import CreatArticle from './components/CreatArticle';
import UdateArticle from './components/UdateArticle';

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
    this.max_id= 3;
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
  getArticles(){
    let _title, _desc, _article = null;
    
    if(this.state.mode === 'welcome'){
      _title =this.state.welcome.title;
      _desc =this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc}/>;
    }else if(this.state.mode === 'read'){
      let _data = this.getReadArticle();
      _article = <ReadArticle title={_data.title} desc={_data.desc} onChaneMode={(val)=>{
        this.setState({mode:val})
      }}/>;
    }else if(this.state.mode === 'create'){
        _article = <CreatArticle onSubmit={(_title,_desc)=>{
          // this.max_id = this.max_id +1
          this.max_id += 1;
          // push -> 이전값과 이후 값을 비교할수 없음 원본을 수정했기 때문
          // this.state.menus.push(
          //   {id:this.max_id, title:_title, desc:_desc}
          // )

          // concat -> 원본그대로 유지하고 복사본(값추가)업데이트(이전값과 이후 값을 비교할 수 있음)
          // let _menus =  this.state.menus.concat({id:this.max_id, title:_title, desc:_desc});

          //Array from
          // let _menus =  Array.from(this.state.menus);
          // _menus.push(
          //   {id:this.max_id, title:_title, desc:_desc}
          // )

          // spread
          let _menus =  [...this.state.menus];
          _menus.push(
            {id:this.max_id, title:_title, desc:_desc}
          )
          
          this.setState({
            // menus:this.state.menus
            
            //concate/arrayfrom/spread
            menus:_menus
          })
          console.log(this.state.menus);
      }}/>;
    }else if (this.state.mode === 'update'){
      let _data = this.getReadArticle();
      _article = <UdateArticle data={_data} onSubmit={(_id,_title,_desc)=>{
      console.log(_id,_title,_desc);
      let _menus = Array.from(this.state.menus);
      _menus.forEach((item,idx)=>{
        if(item.id === _id){
          _menus[idx]={id:_id,title:_title,desc:_desc}
        }
      })
      this.setState({
        menus:_menus,
        mode:'read'
      })
      }}/>;
    }
    return _article;
  }
  getReadArticle(){
    let i = 0;
    while(i<this.state.menus.length){
      let data = this.state.menus[i];
      if(data.id === this.state.selected_id){
          return data;
          break;
        }
        i++;
    }
  }
  render() {
    console.log('App 실행')
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

        {this.getArticles()}

        <hr/>

        <Controls mode={this.state.mode} onChaneMode={(val)=>{
          if(val === 'delete'){
            if(window.confirm('정말 삭제해용?')){
              let _menus =[...this.state.menus];
              _menus.forEach((item,idx)=>{
                if(_menus[idx].id === this.state.selected_id){
                  _menus.splice(idx,1);
                }
              })
              // let i = 0;
              // while(i<_menus.length){
              //   if(_menus[i].id === this.state.selected_id){
              //   _menus.splice(i,1);
              //   break;
              //   }
              //   i++
              // }
              this.setState({menus:_menus, mode:'welcome'})
            }
          }
          this.setState({mode:val})
        }}/>
      </div>
    )
  }
}

export default App;
