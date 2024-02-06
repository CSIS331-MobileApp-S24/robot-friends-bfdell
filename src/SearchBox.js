import React from 'react';


const SearchBox = ({searchChange}) => {

    return (
        <div className="pa2">
            <input className="ba br3 b--dark-blue pa3 bg-lightest-blue bw2 b-green" 
            type="search" 
            placeholder="search robot"
            onChange={searchChange}></input>
        </div>
    );

}

export default SearchBox;
