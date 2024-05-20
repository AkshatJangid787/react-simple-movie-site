const Movie = (props) => { // props can be written in as ((img, title, year) and props will be removed from props.tile, props.year, props.img)
  return (
    <div className="movie">
      <img src={props.img} alt="" /> 
      <p>{props.title}</p>
      <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie
