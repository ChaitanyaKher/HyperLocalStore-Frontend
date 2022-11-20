import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import storeService from '../services/storeService';

export default class StorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeDetails: []
        }
    }

    componentDidMount() {
        storeService.getStoreDetails().then((res) => {
            this.setState({ storeDetails: res.data })
        });
    }
    render() {
        let title = "Featured"
        if (this.state.storeDetails.id<10){
            title = "Recommended Stores near you"
        }
        return (
            
            <div className='row'>
                
                <div className='col'>
                <div className='card w-50 mx-4'>
                    {this.state.storeDetails.map(
                        store =>
                            <><div className='card-header' key={store.id}>{title}</div><div className='card-body'>
                                <h5 className='card-title'>{store.storeName}</h5>
                                <p className='card-text'>{store.area}, {store.pincode}</p>
                                <Link to="/product">
                                <a className='btn btn-primary'>Visit Store</a>
                                </Link>
                            </div></>
                    )}
                </div>
                </div>
            </div>
        )
    }
}
