import { Container , Title, Typography} from "./components";
import TodosList from "./components/TodosList/TodosList";

function App() {
  return (
    <Container>
      <Title/>
      <Typography fontSize={24} bold marginTop={"38px"}>
        List of tasks
        </Typography>
      <TodosList/>    
          </Container>
  )
}

export default App
