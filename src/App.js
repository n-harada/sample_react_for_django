import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const API_HOST = "http://127.0.0.1:8000"

function App() {

  const [ goodsList, setGoodsList ] = useState([])

  useEffect(()=>{
    getGoodsList()
  },[])

  const renaderGoodsList =()=>{
    return(
      goodsList.map(good=><li>{good.name}</li>)
    )
  }

  const create=()=>{
    let data = new FormData()
    data.append("name", "Name") 
    axios.post(API_HOST+"/api/good/",
      data,
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    )
    .then(response=>{
      console.log("response", response)
    })
    .catch(error=>console.log(error))
  }


  const getGoodsList=()=>{
    axios.get(API_HOST+"/api/good/")
    .then(response=>{
      console.log("response", response)
      setGoodsList(response.data)
    })
    .catch(error=>console.log(error))

  }

  

  return (
    <div className="App">
      <header className="App-header">
        <button className="front_button" onClick={create}>
          作成
        </button>
        <p>グッズ一覧</p>
        <ul>
          {renaderGoodsList()}
        </ul>
      </header>
    </div>
  );
}

export default App;
