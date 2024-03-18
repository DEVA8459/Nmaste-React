const Shimmer =() => {
    return (
        <>
        <div className="search-conatainer">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          
        ></input> 

        <button
          className="search-button"
        >
          search
        </button>
      </div>

      <div className="RL">
        {/* to multiply it multiple times we use array.map */}
      {Array(10).fill("").map((e ,index )=><div key={index} className="card">
    <img
      alt="img"
      src={"https://static.vecteezy.com/system/resources/thumbnails/002/850/198/original/loading-circle-icon-on-white-background-4k-free-video.jpg" }
    ></img>
    <h1>{"....................................."}</h1>
    <h2>{"....................................."}</h2>
    <h3>{"....................................."} stars</h3>
    <h3>{"....................................."}</h3>
    <h3>{"....................................."}</h3>
    <h3>{"....................................."}</h3>
    <h3>{"....................................."} </h3>
  </div> )} 
      </div>
        
        </>
    )
}
export default Shimmer

