import { Helmet } from 'react-helmet';
import NavDesktop from './components/NavDesktop/NavDesktop.jsx';
import NavMobile from './components/NavMobile/NavMobile.jsx';
import Header from './components/Header/Header.jsx';
import Features from './components/Features/Features.jsx';
import Services from './components/Services/Services.jsx';
import Products from './components/Products/Products.jsx';
import Numbers from './components/Numbers/Numbers.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <div className="App">
      <Helmet>
    
        <title>Wojtar-Tech</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <NavMobile/>
      <NavDesktop />
      <Header/>
      <Features/>
      <Services/>
      <Products/>
      <Numbers/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;