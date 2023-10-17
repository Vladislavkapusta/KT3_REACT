
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

const App = () => {




  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">
      <Header onScrollToFooter={scrollToFooter} />
      <ProductList/>
      <Footer />
    </div>
  );
};

export default App;