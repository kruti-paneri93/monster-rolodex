import React from "react";
import '../search-box/SearchboxStyles.css';

const Searchbox = ({className, placeholder, onChangeHandler}) =>{
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
}

export default Searchbox;
