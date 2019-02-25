import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            order: [],
            price: [],
        };
        this.addMenuItem = this.addMenuItem.bind(this);
    }

    addMenuItem(item){
            this.setState(prevState => ({
                order: [...prevState.order, {item}]
            }));
       };

    addMenuPrice(price){
        this.setState(prevState => ({
            price: [...prevState.price, {price}]
        }));
        console.log(price);
    }

    // TotalPrice(total){
    //     this.setState(prevState=>({
    //         total: [],
    //     }))
    // }


    render() {
        var UpdatedOrder = this.state.order.map((items)=>{
            return(
                <li>{items.item}</li>
            )
        });
        var UpdatedPrice = this.state.price.map((price)=>{
            return(
                <li>{price.price}</li>
            )
        });

        var TotalPrice = this.state.price
            .map(price => price.price)
            .reduce((prevPrice, total) => prevPrice + total, 0);

        var items = this.props.items.map((item) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><button name={item} value={item} onClick={()=> {
                        this.addMenuItem(item.name);
                        this.addMenuPrice(item.price);
                    }}>add 1 {item.name}</button></td>
                </tr>
            )
        });

        return (
            <div>
                <table >
                    <tbody>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Description</th>
                    </tr>
                    {items}
                    </tbody>
                </table>
                <div className="row">
                    <ul className="col">
                        <li>Items:</li>
                        {UpdatedOrder}
                    </ul>
                    <ul className="col">
                        <li>Price:</li>
                        {UpdatedPrice}
                    </ul>
                    <ul className="col">
                        <li>Total:</li>
                        {TotalPrice}
                    </ul>
                </div>
                <button>Place Order</button>
            </div>
        );
    }
}