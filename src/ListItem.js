import React from 'react';

export default class ListItem extends React.Component {
    render(){
        return(
            // Displaying the name of fruit
            <li>{this.props.name}</li>
        );
    }
}