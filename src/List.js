import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

import ListModule from './List.module.css'

const List = ({ items, deleteItem, editItem}) => {
    

  return (
      <div className={ListModule.groceryList}>
          {items.map((item) => { 
              const { id, title } = item;
              return (
                <article key={id} className={ListModule.groceryItem}>
                <p className={ListModule.title}>{title}</p>
                <div className={ListModule.btnContainer}>
                    <button type="button" className={ListModule.editBtn} onClick={()=>editItem(id)}><FaEdit /></button>
                    <button type="button" className={ListModule.deleteBtn} onClick={()=>deleteItem(id)}><FaTrash/></button>
                </div>
            </article>
              )
          })}
    </div>
  )
}

export default List
