import UserInfo from "./components/Exercise1/UserInfo"
import Skills from "./components/Exercise2/Skills"
import UserCard from "./components/Exercise2/UserCard"
import Button from "./components/Exercise3/Button"
import Product from "./components/Exercise4/Product"
import Badge from "./components/Exercise5/Badge"
import Counter from "./components/Exercise6/Counter"
import Panel from "./components/Exercise7/Panel"
import InfoCard from "./components/Exercise8/InfoCard"
function App() {
 function message(){
  alert("Welcome");
 }
  return (
    <>
   <UserInfo name="Manoj" age={23} isActive={true}></UserInfo><hr />
   <UserInfo name="Anshika" age={21} isActive={false}></UserInfo>
   <Skills skillsList={["HTML","CSS","JS","REACT"]}></Skills>
   <UserCard name="Manoj" email="thakurmanu065@gmail.com"></UserCard>
   <Button onClick={message}></Button>
   <Product name="Mouse" price ={250}></Product>
   <Badge status = "Approved"></Badge>
   <Badge></Badge>
   <Counter count={5}></Counter>
   <Panel>
    <div >
    <div style={{padding:"1rem",backgroundColor:"Black",color:"white",border:"2px solid red",marginTop:"1rem"}}> 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nisi quam consectetur, iste architecto quia beatae dolores ea repellat a.
    </div>
    <div style={{padding:"1rem",color:"black",border:"2px solid red",marginTop:"1rem"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quibusdam culpa deserunt modi beatae asperiores expedita, reprehenderit dignissimos reiciendis debitis rem quo labore molestiae facere dolore dolorum cum nam quasi?
    </div>
    </div>
   </Panel>

   <InfoCard title="Learn Js" description="Lorem ipsum dolor sit amet consectetur adipisicing" bgColor="lightGreen">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente reiciendis quidem odit et accusantium? Eum facilis tempora tempore tenetur voluptatibus quas ex, dolores voluptatum, optio nisi quibusdam maiores ea rem. <br />
    <button>First InfoCard</button>
   </InfoCard>
   <InfoCard title="Learn React" description=" consectetur adipisicing" bgColor="lightBlue">
    <br />
    <button>second InfoCard</button>
   </InfoCard>
   <InfoCard title="Learn Node" description="Lorem">
   </InfoCard>
    </>
  )
}

export default App
