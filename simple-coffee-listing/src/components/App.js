import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Coffee from './Coffee'
import coffeeData from "../data"
import React from 'react';

function App() {

  const coffeeCards = coffeeData.map(item =>  <Coffee {...item}/>)
  const [coffees, filterCoffee] = React.useState(coffeeCards)

  function handleFilter() {
    const filteredCoffeeCards = coffeeData.filter(item => item.quantity > 0)
    filterCoffee(filteredCoffeeCards.map(item => <Coffee {...item}/>))
  }

  function resetFunc() {
    filterCoffee(coffeeCards)
  }

  return (
    <div className='app'>
        {/* <div onClick={handleFilter}>Obimba</div> */}
        <Header resetFunc={resetFunc} filterFunc={handleFilter}/>
        <section className='coffee--container'>
              {coffees}
        </section>
    </div>
  );
}

export default App;
