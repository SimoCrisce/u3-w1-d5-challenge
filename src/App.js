import "./App.css";
import MyHeader from "./components/MyHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./components/MainContent";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyHeader />
      <MainContent />
      <MyFooter />
    </>
  );
}

export default App;
