import './style.css';

import React from 'react'

const Searchbar = ({handleSearchKey,value,clearSearch,formSubmit}) => {
  return (
    <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input 
                type='text'
                onChange={handleSearchKey}
                placeholder='Search By Category'
                value={value}>
                </input>
                
                {value && <span onClick={clearSearch}>X</span>}

                <button type='submit'>GO</button>


               </form> 


    </div>
  )
}

export default Searchbar