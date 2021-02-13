import React from 'react'

import Search from '../icons/Search'

import styles from "./search-box.module.css";
const SearchBox = () => {
  return (
    <div className={styles.search}>

    <div className={styles.container}>    
      <form action="#" aria-label="Twitter durchsuchen" role="search">
        <Search></Search>

        <input></input>

      </form>
    </div>
    </div>
  )
}

export default SearchBox
