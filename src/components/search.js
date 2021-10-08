import React from 'react'
import { useState } from 'react';
const Search = (props) => {
    const [value,setValue] = useState("");
   
    const takeValue = (e) =>{
        let searchKeyword=e.target.value;
        searchKeyword=searchKeyword.toLowerCase();
        console.log(searchKeyword);
        setValue(searchKeyword);
    }
    
    const searchItem = () => {
          
            if(value===""){
                props.settempstate(props.val);
            }else{
                
                const result = props.val.filter((currval,ind)=>{
        
                    return currval.first_name.toLowerCase()===value;
                })
                props.settempstate(result);
            }
           
        
    
       
    
    }
    return (
        <div className="search">
            <span><input type="text" id="searchId" placeholder="Search" onChange={takeValue} /></span>
            <span><button id="search-btn"  onClick={searchItem}>Search</button></span>
        </div>
    )
}

export default Search;

