import { Navbar } from "./components/layouts/navbar/navBar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"BIENVENIDO"} />
    </div>
  );
}
export default App;
