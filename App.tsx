import React from 'react';
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor:"#e4e198"}}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor={"#889551"}/>

      <View >

      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Image source={{uri:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d'}} alt='Hello' style={Sty.images}/>
        <Text style={Sty.text} >pure brass bottle</Text>
      </View>
    </View>
  );
}

const Sty = StyleSheet.create({

  navbar:{
    backgroundColor:"#889551",
    display:"flex",
    justifyContent:"space-between",
    
  },

  images:{
    width:300,
    height:400,
    color:"#885991",
    borderColor: 'red',
    borderWidth: 5,
    margin:10,
    marginInline:"auto",
    borderRadius:25
  },
  text:{
    color:"#889551",
    fontSize:40,
    textTransform:"capitalize",
  }
})

export default App;