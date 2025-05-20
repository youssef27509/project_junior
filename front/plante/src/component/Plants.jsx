import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function plantsList() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  

  const fetchData = () => {
    axios.get("http://localhost:3000/api/Plants/getall")
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err))
  }

  const addPlants = () => {
    const newPlants = { name, price, image }
    axios.post("http://localhost:3000/api/Plants/add", newPlants)
      .then((response) => {
        fetchData()
      })
      .catch((err) => console.log(err))
  }

  const del = (id) => {
    axios.delete(`http://localhost:3000/api/Plants/delite/${id}`)
      .then((response) => {
        fetchData()
      })
      .catch((err) => console.log(err))
  }

  const update = (id) => {
    const updatedPlants = { name, price, image }
    axios.put("http://localhost:3000/api/Plants/put/${id}", updatedPlants)
      .then((response) => {
        fetchData()
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
return (
    <div>
      <h2>Add New Plants</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
      <button onClick={addPlants}>Add Plants</button>

      <h2>Plants List</h2>
      {data.map((el,i) => (
        <ul key={i}>
          <li>{el.name}</li>
             <li>{el.price}</li>
<img src={el.image} alt="" />  
        <button onClick={() => del(el.id)}>Delete</button>
          <button onClick={() => update(el.id)}>Update</button>
        </ul>
      ))}
    </div>
  )
}