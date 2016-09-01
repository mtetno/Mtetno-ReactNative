/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
 import Forecast from './Forecast';

export default  class WeatherApp extends Component {

// default constructore
state = {
    zip: '',
    forecast: {
    main: 'Clouds',
    description: 'few clouds',
    temp: 45.7
    }
  };



 // handle text change
 updateText = (text) => {
alert("inside");
     this.setState((state) => {
       return {
         zip: text,
       };
     });

     fetch('http://private-5a874f-weatherapi8.apiary-mock.com/questions')
.then((response) => response.json())
.then((responseJSON) => {
this.setState({
forecast: {
main: responseJSON.weather[0].main,
description: responseJSON.weather[0].description,
temp: responseJSON.main.temp
}
});
})
.catch((error) => {
console.warn(error);
});

   };

  render() {

    var content = null;
if (this.state.forecast !== null) {
content = <Forecast
main={this.state.forecast.main}
description={this.state.forecast.description}
temp={this.state.forecast.temp}/>;
}

    return (

      <View style={styles.container}>
  <Image           source={{uri: 'https://raw.githubusercontent.com/bonniee/learning-react-native/master/WeatherProject/flowers.png'}}
  resizeMode='cover'
  style={styles.backdrop}>
  <View style={styles.overlay}>
  <View style={styles.row}>
  <Text style={styles.mainText}>
  Current weather for
  </Text>
  <View style={styles.zipContainer}>
  <TextInput
  style={[styles.zipCode, styles.mainText]}
  returnKeyType='go'
  onSubmitEditing={(event) => this.updateText( event.nativeEvent.text
   )}/>
  </View>
  </View>
  {content}
  </View>
  </Image>
  </View>

    );
  }
}
var baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
flex: 1,
alignItems: 'center',
paddingTop: 30
},
backdrop: {
flex: 1,
flexDirection: 'column'
},
overlay: {
paddingTop: 5,
backgroundColor: '#000000',
opacity: 0.5,
flexDirection: 'column',
alignItems: 'center'
},
row: {
flex: 1,
flexDirection: 'row',
flexWrap: 'nowrap',
alignItems: 'flex-start',
padding: 30
},
zipContainer: {
flex: 1,
borderBottomColor: '#DDDDDD',
borderBottomWidth: 1,
marginLeft: 5,
marginTop: 3
},
zipCode: {
width: 50,
height: baseFontSize,
},
mainText: {
flex: 1,
fontSize: baseFontSize,
color: '#000000'
}
});
