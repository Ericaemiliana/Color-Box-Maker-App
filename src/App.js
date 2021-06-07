//import "./App.css";
import BoxList from "./BoxList";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
function App() {
  return (
    <div>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          Color Box Maker App
        </Typography>
        <BoxList />
      </Container>
    </div>
  );
}

export default App;
