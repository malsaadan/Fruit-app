import React from 'react';
import ListContainer from './ListContainer';
import Search from './Search';

export default class App extends React.Component {
  constructor(props){
    super(props);

    // Initialize the Search Value to an Empty String
    this.state = {
      searchValue: '',
    };
  }

  handleSearchChange=(e)=>{
    const text = e.target.value;

    this.setState({
      searchValue: text,
    })
  }

  render(){
    return(
      <div>
        <h1>Fruits</h1>
        {/* This component has 2 children */}
        <Search value={this.state.searchValue}
                onChange={this.handleSearchChange}/>
        {/* Passing the received props to its child */}
        <ListContainer fruits={this.props.fruits}/>
      </div>
    );
  }
}