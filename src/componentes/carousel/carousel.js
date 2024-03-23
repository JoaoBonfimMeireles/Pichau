const Carousel = ({data}) => {

  return (
    <div className="carousel w-full">
      {data.map((data) => (
        <div key={data.id} id={data.id} className="carousel-item relative w-full">
          <img src={data.src} className="object-fill max-h-96 w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#${data.id - 1}`} className="btn btn-circle">❮</a>
            <a href={`#${data.id + 1}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel;