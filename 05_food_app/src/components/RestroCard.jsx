

 const RestroCard = ({data})=> {
   console.log(data);
   
   // const name = data.name
   const {name,cuisines,deliveryTime,ratings,image}  = data
    
   
   // console.log(props);

   //  const {name,ratings,deliveryTime,cuisines}  = props 

    
    //  image,name,ratings,deliveryTime,cuisines

    return (
         <div className="bg-red-100 w-32  border">
            <img src={image} alt="restro-image" />
            <h2> {name} </h2>
            <p> {ratings} </p>
            <p> {deliveryTime} </p>
            <p> {cuisines.join(", ")} </p>
         </div>
    )
   

 }

export default RestroCard