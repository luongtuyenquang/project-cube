import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

function App() {
   
    return (
        <div className="App">
            <Header />
            <div className='container'>
            <button type="button" className="btn btn-info mb-15">Thêm sản phẩm</button>
               <ProductList />
            </div>
        </div>
    );
}

export default App;
