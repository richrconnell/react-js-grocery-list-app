import React, { Component } from 'react';
import ShoppingItems from './shoppingItems'
import logo from '../components/grocerylogo.png'

export default class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products :[]
        };

        this.addProduct= this.addProduct.bind(this);
        this.deleteProduct= this.deleteProduct.bind(this);
    }
    
    addProduct (e) {
        if (this._textElement.value !== "") {
            var newProduct ={
                text : this._textElement.value,
                quantity : this._quantityElement.value,
                key : Date.now()
            };


            this.setState((prevState) => {
            
            return {products : prevState.products.concat(newProduct)};
                  
            });
            
        }
        
        this._textElement.value="";
        e.preventDefault();
    }

    deleteProduct(key) {
        var filteredProducts= this.state.products.filter(function (item) {
            return ( item.key !== key)
        }); 
    
        this.setState({
            products: filteredProducts
        });
    }



    render() {

        return (
          <div className="container mt-3">
         <img src={logo} alt={Image} />
          <p>Type in an product to add to your grocery List.  You can always remove and add new products.</p> <form onSubmit={this.addProduct}>
         
            <div className="input-group mt-3 mb-3">
            <input type="text" className="form-control" placeholder="Type Grocery Item" ref= {(a) => this._textElement = a } /> 
              <div className="input-group-prepend">
              <div className="btn-group">
           
                <select type="button" id="dropdownmenuitem" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" ref={(b) => this._quantityElement = b }>
               
                            <option value="1">Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        </div>
              </div>
              
               <div className="input-group-prepend">
            <button className="btn btn-outline-primary" type="submit">Add Item</button>
          </div>
            </div>
          </form>
          <ShoppingItems entries = {this.state.products}
                            delete = {this.deleteProduct} 
                            onClick={() => this.sortBy('quantity')}/>
        </div>
 
        );
    }
}