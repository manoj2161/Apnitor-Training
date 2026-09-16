import Exercise1 from "./components/Exercise1"
import CartBadge from "./components/Exercise2"
import Banner from "./components/Exercise3"
import StatusText from "./components/Exercise4"
import UserProfile from "./components/Exercise5"
import Role from "./components/Exercise6"
function App() {

  return (
    <>
     <Exercise1></Exercise1>
         <CartBadge itemCount={0}></CartBadge>
         <Banner></Banner>
         <StatusText ></StatusText>
         <UserProfile user={null} />
         <Role role={"admin"}></Role>
    </>
  )
}

export default App
