import React from 'react';
import PropTypes from 'prop-types';

const foods =[
  {
    id : 1,
    name : '갈비',
    pic : 'http://recipe1.ezmember.co.kr/cache/recipe/2015/09/23/789c5a864c767a1cbc718fc50dac81ee1.jpg',
    rating : 4.1
  },
  {
    id : 2,
    name : '냉면',
    pic : 'http://recipe1.ezmember.co.kr/cache/recipe/2018/06/24/3437a2152c3d8891034a61d796b1c3651.jpg',
    rating : 2.5
  },
  {
    id : 3,
    name : '탕수육',
    pic : 'https://homecuisine.co.kr/files/attach/images/142/359/069/996cf284f4002aab84d79dbea306b987.JPG',
    rating : 3.8
  }
]
function Food({name, pic, rating}){
  return (
    <div>
      <h3>I Love {name}</h3>
      <h4>{rating}/5</h4>
      <img src={pic} alt=""/>
    </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired,
  rating : PropTypes.number
}

function App() {
  return (
    <div className="App">
      <h1>hello!</h1>
      {foods.map( (dish) =>{
        return <Food key={dish.id} name={dish.name} pic={dish.pic} rating={dish.rating}/>
      })}
    </div>
  );
}

export default App;
