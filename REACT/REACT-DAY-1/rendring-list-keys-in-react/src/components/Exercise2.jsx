import PlantCard from "./PlantCard";
function Exercise2(){
  const plants = [
  { id: "p1", name: "Snake Plant", waterEveryDays: 14 },
  { id: "p2", name: "Money Plant", waterEveryDays: 5 },
  { id: "p3", name: "Areca Palm", waterEveryDays: 3 },
];
    return (<>
    <h1>Plant Details</h1>
    <div>
    {
        plants.map((plant)=>
            <PlantCard key={plant.id} name={plant.name} waterEveryDays={plant.waterEveryDays}></PlantCard>
        )
    }
    </div>
    </>)
}
export default Exercise2