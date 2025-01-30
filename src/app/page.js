// THIS FILE IS EQUIVALENT TO APP.JSX FOR REACT
// WHERE WE IMPORT COMPONENTS AND RENDER THEM IN THE DOM TREE
// ENTRY POINT
import Header from "./Components/Header/Header";
import ControlledCarousel from "./Components/RecipeCarousel/RecipeCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <ControlledCarousel />
      <h1>Testing</h1>
    </div>
  );
}
