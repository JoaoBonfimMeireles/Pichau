import "./App.css";
import Carousel from "./componentes/carousel/carousel";
import carouselData from "./APIs/carouselData.json"
import { useState, useEffect } from "react";
import Header from "./componentes/header";


function App() {


  const [bannerImg, setBannerImg] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setBannerImg(json.map((item, id) => { return { src: item.image, id: item.id } })))
  }, [])

  console.log(bannerImg)

  return (

    <div>
      <Header />
      <Carousel data={carouselData} />
      <div className="my-4">
        <h1 className="text-center text-5xl">
          Hello World 
        </h1>
        <button className="btn btn-lg btn-outline m-auto block my-4 hover:bg-orange-brastemp">Salvar</button>
      </div>
    </div>
  );
}

export default App;