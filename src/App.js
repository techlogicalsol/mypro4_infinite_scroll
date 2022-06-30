import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import Banner from './Components/Banner';
import Home from './Components/Home';




function App() {


  const [images, setImages] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
    
  const baseURL = "https://api.unsplash.com";
  const mykey = '3H5JYaZJFaC9ou3zPJBfu--J9A_pt8cVgdyq9QHDW5o'
  const searchAPI = `https://api.unsplash.com/search/photos?
                    query=${searchTerm}&client_id=${mykey}`;
 


  const fetchImages = async()=>{
    const response = await axios.get(`${baseURL}/photos/random?
    &client_id=${mykey}&count=6`)
    console.log(response)
    
    setImages([...images, ...response.data])
  }

  useEffect(()=>{
    fetchImages()

  },[])




  const handleOnSubmit = (e)=>{
    e.preventDefault()
    console.log(searchTerm)

    axios.get(searchAPI)
    .then((response)=>{
      console.log(response.data)
      //setImages(response)
    })
    
  }

  const handleOnChange = (e)=>{
    setSearchTerm(e.target.value)
}




  return (
    <div>
      <Banner 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        setImages={setImages}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}

        />

      <InfiniteScroll
        dataLength = {images.length}
        next = {fetchImages}
        hasMore={true}
        style={{display: 'flex', flexDirection: 'column'}}
        loader = {<h2 className="text-center">Loading...</h2>}
        
       
      >

      <Home 
        images={images} 
    
        
      
      />
      </InfiniteScroll>
    </div>
  );
}

export default App;
