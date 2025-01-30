// THIS FILE IS EQUIVALENT TO APP.JSX FOR REACT
// WHERE WE IMPORT COMPONENTS AND RENDER THEM IN THE DOM TREE
// ENTRY POINT
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Testing</h1>
      <MainContainer />
    </div>
  );
}
