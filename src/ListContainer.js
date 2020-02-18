import React from 'react';
import ListItem from './ListItem';

// const fruits = ['Mango', 'Banana', 'Orange', 
//                 'Apple', 'Pineapple', 'Dates'];

export default class ListContainer extends React.Component {
    render(){
        // Getting the array and pass each element to ItemList component to display it as a list
        const allFruits = this.props.fruits.map(function(fruit, index){
            return <ListItem name={fruit} key={index} />;
        })

        return(
            <ul>
                {/* <ListItem name={'name'}/>
                <ListItem name={'name'}/>
                <ListItem name={'name'}/>
                <ListItem name={'name'}/> */}
                {/* Displaying each item */}
                {allFruits}
            </ul>
        );
    }
}