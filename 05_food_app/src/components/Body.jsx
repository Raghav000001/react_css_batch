import RestroCard from "./RestroCard"
import { resData } from "../data/restroData"




const Body = ()=> {


  return (
      <div>
         <div>
          <input type="text" />
          <button> Top rated restros </button>
          <button> fastest delivery</button>
          <button> high to low </button>
          <button> low to high </button>
         </div>

         {/* properties send */}
         {/* <RestroCard name = {name}  cuisines= {cuisines} ratings = {ratings} deliveryTime = {deliveryTime} />
         <RestroCard name = {"pizza hut"}  cuisines= {["south indian","spanish"]} ratings = {5} deliveryTime = {30+"mins"} /> */}
         {/* {RestroCard(name,cuisines,ratings,deliveryTime)} */}

        {
           resData.map((res)=> <RestroCard key={res.id}  data={res}/>  )
        }

      </div>
  )


 }

 export default Body