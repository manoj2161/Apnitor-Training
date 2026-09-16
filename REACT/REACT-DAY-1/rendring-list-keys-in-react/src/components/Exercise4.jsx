function Exercise4(){
    const trips = [
  { id: "t1", destination: "Manali", items: ["Jacket", "Boots", "Gloves"] },
  { id: "t2", destination: "Goa", items: ["Sunscreen", "Shorts", "Sandals"] },
];

    return(<>
    <h1>Trip Detail</h1>
    {
trips.map((trip)=>
    <div key={trip.id}>
    <h2>Location : {trip.destination}</h2>
    <h3>Item List</h3>
        <ul>{
            trip.items.map((item,index)=>{return <li key={index}>{item}</li>})
            }
        </ul>
    </div>
)
    }
    </>)
}
export default Exercise4