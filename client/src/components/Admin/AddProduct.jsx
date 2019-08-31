import React from 'react'
import {Component} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
class AddProduct extends Component{
    
    state = {
        picture1: null,
        picture2: null,
        picture3: null,
        price: null,
        description: null
    }
    
    SubmitProduct = (price, description) => {
        axios.post('/api/products/AddProduct', 
        {
        price: price,
        description: description
        }).then(()=>console.log('hello'))}
    render(){
    return(
        <div>
        <input placeholder="price" onChange={(e) => this.setState({ price: e.target.value })}></input>
        <input placeholder="description(optional)" onChange={(e) => this.setState({ description: e.target.value })}></input>
        <Button onClick={() => this.SubmitProduct(this.state.price, this.state.description)}>Create Product</Button>
        </div>
    )}
}

export default AddProduct