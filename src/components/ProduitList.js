import Card from '../components/Card'
import './ProduitList.css'

const ProduitList = ({ produits }) => {
  return <div >
   {produits.map((produit,i) =>  {
    return (
     <Card
     key={i}
     image={produit.image}
     object={produit.object}
     utilisation={produit.utilisation}
   ha  entretien={produit.entretien}
     />
    )
   })}
  </div>;
};

export default ProduitList;
