import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import ProduitList from './components/ProduitList';
import ErrorBounndry from './components/ErrorBoundary';


function App() {
  const [searchField, setSearchField] = useState('');
  const [produits, setProduits] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://rocky-waters-32485.herokuapp.com/api/produits')
      const data = await res.json()
      setProduits(data)
    }
    fetchData()

  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  const filteredProduits = produits.filter((produit) => {
    return produit.object.toLowerCase().includes(searchField.toLowerCase())
  })
  

  return (
    <>
      <Navbar />
      <SearchBox searchChange={onSearchChange} />
        {
          searchField.length > 1 ?
          <ErrorBounndry>
             <ProduitList produits={filteredProduits} />
          </ErrorBounndry>
            : ''
        }
      
      
    </>
  );
}

export default App