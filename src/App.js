import { useEffect, useState } from 'react';
import './App.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/Features/CartSlice';


function App() {
  const [productsdata, setProductsData] = useState([])
  const [page, setPage] = useState(1)


  const Dispatch = useDispatch()
  const fetchProductsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProductsData(data)
  }
  useEffect(() => {
    fetchProductsData()
  }, [])

  const paginationHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= productsdata.length / 10) {
      setPage(selectedPage)
    }
  }

  return (
    <div className="App">
      <div className="container">
        {
          productsdata?.slice(page * 10 - 10, page * 10).map((product,id) => {
            return (
              <div div className="card" key={id} >
                <div className="card__img">
                  <img src={product.image} alt="sample-img" />
                </div>
                <div className="card__content">
                  <h3>{product.title.slice(0, 20)}</h3>
                  <h4>Price: ₹ {product.price}</h4>
                </div>
                <button onClick={()=> Dispatch(addToCart(product))}>Add to Cart</button>
              </div>
            )
          })
        }
      </div>
      {
        productsdata.length > 0 ? <><div className="pagination">
        <span className={page < productsdata.length / 10 ? 'disable' : ''} onClick={() => paginationHandler(page - 1)}>
          <NavigateBeforeIcon fontSize='large' />
        </span>
        {
          [...Array(productsdata.length / 10)]?.map((_, ind) => {
            return (
              <span key={ind} className={ind + 1 === page ? 'bg' : ''} onClick={() => setPage(ind + 1)}>{ind + 1}</span>
            )
          })
        }
        <span className={page >= productsdata.length / 10 ? 'disable' : ''} onClick={() => paginationHandler(page + 1)}>
          <NavigateNextIcon fontSize='large' />
        </span>
      </div></> : <h3 style={{textAlign:'center'}}>Loading........</h3>
      }
    </div >
  );
}

export default App;
