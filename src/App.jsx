import AppRouter from "./router/index.jsx";
import Navbar from "./components/Navbar";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}
console.log("App loaded!");

export default App;
