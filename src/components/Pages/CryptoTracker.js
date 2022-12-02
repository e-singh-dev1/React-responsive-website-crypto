import {React,useState,useEffect} from 'react';
import '../../App.css';
import axios from 'axios';
import Coin from '../coin';

const CryptoTracker = () =>{
    
    const[coins,setCoins] = useState([]);
    const[search ,setSearch] = useState('');
    const[error ,setIsError] =('');
    
     const getData = async() =>{
      try{
       const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
       setCoins(res.data)
     }
     catch(error){
      setIsError(error.message)
     }
    };

  //axios using Promises
    //  useEffect(() => {
    //  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //   .then(res => {
    //     setCoins(res.data);
    //   }).catch(error => console.log(error))
   
  //   getData();
  //  },[]);


  //axios using async/await
   useEffect(() =>{
   getData();
   },[]);

  
    const handleChange = e => {
      setSearch(e.target.value)
    }
   
    const filterCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    ) 
    return (
      <div className='coin-app'>
      <div className='coin-search'>
       <h1 className='coin-text'>
        SEARCH YOUR CRYPTO
       </h1>
       <form>
        <input 
        type="text" 
        placeholder='Search' 
        className='input-coin'
        onChange={handleChange}
        />
      </form>
      </div>
      {filterCoins.map(coin =>{
        return(
          <Coin 
          key={coin.id} 
          name = {coin.name}  
          image ={coin.image}
          symbol = {coin.symbol}
          marketCap = {coin.market_cap}
          price ={coin.current_price}
          priceChange = {coin.price_change_percentage_24h}
          volume = {coin.total_volume} 
          />
        )
      })}
      </div>
    )
}
export default CryptoTracker;
