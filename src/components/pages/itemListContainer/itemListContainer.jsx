import ProductCard from "../../common/productCard/ProductCard";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>Para quienes sienten el deporte</h1>
      <ProductCard
        titulo="Remera Hombre"
        descripccion="Negro Jaspeado"
        precio="30000"
      />
      <ProductCard
        titulo="Remera Oversize"
        descripccion="Arena"
        precio="32000"
      />
      <ProductCard
        titulo="Top Snake"
        descripccion="Azul Marino"
        precio="25000"
      />
      <ProductCard
        titulo="Pupera Oversize"
        descripccion="Hueso"
        precio="28000"
      />
      <h4>{greeting}</h4>
    </div>
  );
};
export default ItemListContainer;
