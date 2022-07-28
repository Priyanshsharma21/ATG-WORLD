import React, { useState } from 'react'
import './styles/Category.css'


const Category = ({category}) => {
  
    return (
    <div className="col feed__categorz">
        {category.map(category =>(
            <h4 className={`category__text`}>{category}</h4>
        ))}
    </div>
  )
}

export default Category