import React from 'react'
import cn from "classnames"
import styles from "./col-extra.module.css"

const Extra = ({ children }) => {
  return (
    <div className={cn(styles.layout)}>
      {children}
    </div>
  )
}

export default Extra