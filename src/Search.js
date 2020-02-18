import React from 'react';

export default class Search extends React.Component {
    render(){
        return(
            <div>
                {/* Displaying */}
                <label>Search these Fruits: </label>
                <input type="text" 
                       value={this.props.value}
                       onChange={this.props.onChange}/>
            </div>
        )
    }
}