import React, { Component } from 'react'
import {Link} from "react-router-dom";
import storeService from '../services/storeService';

export default class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: []
        }
    }

    componentDidMount() {
        storeService.getProductDetails().then((res) => {
            this.setState({ productDetails: res.data })
        });
    }
    render() {
        let title = "Featured"
        if (this.state.productDetails.id<10){
            title = "Recommended Stores near you"
        }
        return (
            <div className='row'>
                <Link to='/'><button className='btn btn-warning'>Go Back</button></Link>
                <div className='col'>
                <div className='card w-50 mx-4'>
                    {this.state.productDetails.map(
                        product =>
                            <><div className='card-header' key={product.id}>{title}</div><div className='card-body'>
                                <h5 className='card-title'>{product.name}</h5>
                                <p className='card-text'>Available Quantity: {product.availableQuantity}</p>
                                <p className='card-text'>Weight: { product.weightInGms }grams</p>
                                <p className='card-text'>Discount: { product.discountPercent }%</p>
                                <p className='card-text'>MRP: <strike>{ product.mrp }</strike>/- { product.discountedSellingPrice }/- &#x20b9;</p>
                                <a className='btn btn-success'>Add to Cart</a>
                            </div></>
                    )}
                </div>
                </div>
            </div>
        )
    }
}
