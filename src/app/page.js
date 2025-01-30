// THIS FILE IS EQUIVALENT TO APP.JSX FOR REACT
// WHERE WE IMPORT COMPONENTS AND RENDER THEM IN THE DOM TREE
// ENTRY POINT
import Header from "./Components/Header/Header";
import ToolbarBasicExample from "./Components/IngredientPicker/IngredientPicker";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Pick a protein</h1>
      <ToolbarBasicExample />
    </div>
  );
}
