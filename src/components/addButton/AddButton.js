import React, { useState } from 'react';

const AddButton = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    const newBooksData = [...props.booksData]
    newBooksData[0].proNum += 1
    newBooksData[0].proPrice += props.booksData[0].proPrice
    props.setBooksData(newBooksData)
  }
  return(
    <button onClick={increment}>
      +
    </button>
  )
}

export default AddButton;

// const AddButton = (props) => {
//   const [newBooksData, setNewBooksData] = useState([]);
//   const increment = () => {
//     newBooksData = [...props.booksData]
//     newBooksData[0].proNum += 1
//     newBooksData[0].proPrice += props.booksData[0].proPrice
//     setNewBooksData(newBooksData[0])
//   }