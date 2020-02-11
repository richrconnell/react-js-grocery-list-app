import React from 'react';

class ShoppingItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        };
        this.addGroceryItem = this.addGroceryItem.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    addGroceryItem( item ) {
        return <div key={item.key}><li className="list-group-item">{item.text} ({item.quantity})</li><button className="btn btn-outline-danger" onClick={() => this.delete(item.key)}>Remove</button></div>
    }
 
    render () {
        var addedGroceries =this.props.entries;
        var newArr = addedGroceries.sort(function(a, b){
            return a.quantity-b.quantity
        });
          console.log(newArr)
        var groceryListItem =newArr.map(this.addGroceryItem);

        return (
            <ul className="list-group" style={{display: 'inline'}}>
            {groceryListItem}
            </ul>
        ) 
    }
}

export default ShoppingItems;
