import React from 'react';
import Hedaer from './Header';
import Text from './Text';
import Social from './Social';
import CardItem from './CardItem';
function App() {
    // const listing_card={
    //   {id:"12",name:"lahcen elfarici",role:"web developpeur"}
      
    // }
    return (
      <div>
        <Hedaer />
        <Text />
        <Social />
        <div className='row'>
        <CardItem name="lahcen" role="programmeur" phone="0658451233" email="lahcen@gmail.com" website="www.google.com"/>
        <CardItem name="hamza" role="center d'appel" phone="0658451233" email="lahcen@gmail.com" website="www.google.com"/>
        <CardItem name="said" role="securité administration" phone="0658451233" email="lahcen@gmail.com" website="www.google.com"/>
        <CardItem name="mostapha" role="justice comptable" phone="0658451233" email="lahcen@gmail.com" website="www.google.com"/>
        <CardItem name="mohamed" role="pesrie" phone="0658451233" email="lahcen@gmail.com" website="www.google.com"/>
        <CardItem name="solaymane" role="ma7laba" phone="0658451233" email="lahcen@gmail.com" website="www.google.com"/>
        </div>
      </div>
    )
  }
  export default App;