import Greeting from "./components/Greeting"
import { PrimaryButton,SecondaryButton } from "./components/Buttons"
import Card from "./components/Card"
import Page from "./components/Page"
import ProfileCard from "./components/ProfileCard"
function App() {

  return (
    <>
      <Page></Page>
      <Greeting/><Greeting/>
      <PrimaryButton></PrimaryButton>
      <SecondaryButton></SecondaryButton>
      <Card></Card>
      <ProfileCard></ProfileCard>
    </>
  )
}

export default App
