import cartwidget from "../../common/cartwidget/cartwidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="container-nav">
      <h2>Baldur</h2>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <cartwidget />
    </div>
  );
};
