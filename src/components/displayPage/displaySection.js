import React,{ Component } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../Redux/Handler/actions";
import Video from './eachVideo'

const Display = () =>{
    const gottenProduct = useSelector((state)=> state)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        fetchProd();
        
    },[])
    
const fetchProd = () => {
    axios.get('https://fakestoreapi.com/products').then(response =>{  
        dispatch(setProduct(response.data))          
    })
}

    const movs = (gottenProduct.products).map(each => {
        return <Video 
            pic   ={each['image']} 
            title ={each['title']} 
            desc  ={each['title']}
            key   ={each['id']}/>        
    })
    return(
        <div className="flex flex-wrap mt-20 justify-center">
            {movs}
        </div>
        
    )
    
}

export default Display