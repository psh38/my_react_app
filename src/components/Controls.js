import { Component } from 'react';

// Controls
class Controls extends Component {
  render() {
    console.log('Controls 실행');
    
    return (
      <ul className='controls'>
        {
          this.props.mode === 'read' ?
        <>
          <li>
            <a href="" onClick={(e)=>{
              e.preventDefault();
              this.props.onChaneMode('update');
            }}>update</a>
          </li>
          <li>
            <a href="" onClick={(e)=>{
              e.preventDefault();
              this.props.onChaneMode('delete');
              
            }}>delete</a>
          </li>
        </> :
          <li>
            <button onClick={(e)=>{
              this.props.onChaneMode('create');
            }}>Create</button>
          </li>
        }
      </ul>
      
    )
  }
}

export default Controls;