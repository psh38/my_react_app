import { Component } from 'react';

// Mynav
class Mynav extends Component {
  render() {
    console.log('Mynav 실행');
    console.log(this.props);
    let lists =[];
    let data = this.props.data;
    let i = 0;
    while(i<data.length){
      lists.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>)
      i++;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default Mynav;