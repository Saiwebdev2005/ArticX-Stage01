function Card({Head,sub,img}){
  return(
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-12 text-purple-600 w-fit p-6 mt-12 font-OpenSans">
  {/* title */}
  <h1 className="text-4xl max-w-xs font-Montserrat -m-6">{Head}</h1>
  {/* description */}
  <p className="w-36 text-xs text-left min-w-fit">
    {sub}
  </p>
  {/* Image */}
  <img
    src={img}
    alt=""
    className="bg-purple-600 rounded-lg px-12 max-h-32 "
  />
</div>

  )
}
export default Card;