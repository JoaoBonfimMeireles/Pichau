import "./App.css";
import Carousel from "./componentes/carousel/carousel";
import carouselData from "./APIs/carouselData.json"
import { useState, useEffect } from "react";


function App() {


  const [ bannerImg, setBannerImg ] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setBannerImg(json.map((item, id) => {return {src: item.image, id: item.id}})))
  }, [])

console.log(bannerImg)

  return (

    <div>
      <Carousel data={carouselData} />
    </div>
  );
}

export default App;