import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput, Image } from 'react-native';

const mainIcon = require('./img/main.png');
const cityIcon = require('./img/city.png');
const countryIcon = require('./img/negara.png');
const sunriseIcon = require('./img/sunrise.png');
const sunsetIcon = require('./img/sunset.png');
const descIcon = require('./img/desc.png');
const tempIcon = require('./img/temp.png');
const seaIcon = require('./img/sea.png');
const grndIcon = require('./img/grnd.png');
const pressureIcon = require('./img/pressure.png');
const humidityIcon = require('./img/humidity.png');
const windIcon = require('./img/wind.png');

export default class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0,
          sunrise:'-',
          sunset:'-',
          country:'-',
          speed:'-',
          sea_level:'-',
          pressure:'-',
          humidity:'-'
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=cdd6ee69ad6f2b1d1ea90e092fdc3306&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sunrise: responseJson.sys.sunrise,
          sunset:responseJson.sys.sunset,
          country:responseJson.sys.country,
          speed:responseJson.wind.speed,
          sea_level: responseJson.main.sea_level,
          grnd_level: responseJson.main.grnd_level,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.inputtext}>
            <View style={styles.inputtext3}>
            <Text style={styles.text3}>Nama Kota</Text>
            <View style={styles.inputtext2}>
              <TextInput style = {styles.text2}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />
            </View>
            </View>

              <Button
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#78909C"
                accessibilityLabel="Klik untuk melihat"
              />
              </View>

              <View style={styles.infocuaca}>
                <View style={styles.backkeyboard}>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={cityIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Kota = {this.state.city}
                    </Text>
                  </View>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={countryIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Negara = {this.state.forecast.country} {"\n"}
                    </Text>
                  </View>

                </View>

                <View style={styles.backkeyboard}>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={mainIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Cuaca = {this.state.forecast.main} {"\n"}
                    </Text>
                  </View>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={descIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Desc = {this.state.forecast.description} {"\n"}
                    </Text>
                  </View>
                </View>

                <View style={styles.backkeyboard}>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={sunriseIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Sunrise = {this.state.forecast.sunrise} {"\n"}
                    </Text>
                  </View>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={sunsetIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Sunset = {this.state.forecast.sunset} {"\n"}
                    </Text>
                  </View>
                </View>

                <View style={styles.backkeyboard}>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={tempIcon} style={styles.icon1} />
                  </View>
                  <Text style = {{padding: 10, fontSize: 15}} >
                    Temp = {this.state.forecast.temp} {"'Celcius"}
                  </Text>
                  </View>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={windIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Wind Speed = {this.state.forecast.speed} {"\n"}
                    </Text>
                  </View>
                </View>

                <View style={styles.backkeyboard}>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={seaIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Sea_level = {this.state.forecast.sea_level} {"\n"}
                    </Text>
                  </View>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={grndIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Grnd_level = {this.state.forecast.grnd_level} {"\n"}
                    </Text>
                  </View>
                </View>

                <View style={styles.backkeyboard}>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={pressureIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Pressure = {this.state.forecast.pressure} {"\n"}
                    </Text>
                  </View>
                  <View style={styles.box4}>
                  <View style={styles.icon}>
                    <Image source={humidityIcon} style={styles.icon1} />
                  </View>
                    <Text style = {{padding: 10, fontSize: 15}} >
                      Humidity = {this.state.forecast.grnd_level} {"\n"}
                    </Text>
                  </View>
                </View>

              </View>

              <View style={styles.footer}>
                <Text style={styles.textfooter}>Copyright @IKHAS97</Text>
              </View>
            </View>
          );
        }
      }

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFAB00',
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#FF8F00',
    flex: 1,
    justifyContent: 'center'
  },

  inputtext: {
    backgroundColor: '#FFECB3',
    flex: 2,
    justifyContent: 'center',
    margin:10
  },

  inputtext2: {
    backgroundColor: 'white',
    flex: 2,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight:30,
    marginTop: 20,
    marginBottom:30
  },

  inputtext3: {
    backgroundColor: '#FFECB3',
    flex: 2,
    justifyContent: 'center',
    margin:10
  },
  infocuaca: {
    backgroundColor: '#FFAB00',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  box4: {
    backgroundColor: '#ECEFF1',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:10,

    marginLeft: 10,
    marginRight: 10
  },

  footer: {
    backgroundColor: '#FF8F00',
    flex: 1,
    justifyContent: 'center'
  },

  backkeyboard: {
    flex: 2,
    backgroundColor: '#FFAB00',
    flexDirection: 'row',
  },

  icon: {
     alignItems: 'center',
     backgroundColor: 'white',
     borderColor: 'white',
     //borderRadius: 15,
     borderWidth: 1,
     justifyContent: 'center',
     height: 40,
     width: 40
   },


  icon1: {
    width: 40,
    height: 40,
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },
  text3: {
    padding: 15, fontSize: 30, color: 'black', textAlign: 'center'
  },
  text1: {
    padding: 15, fontSize: 30, color: 'white', textAlign: 'center', fontWeight:'bold'
  },
  text2: {
    padding: 15, fontSize: 20, color: 'black', textAlign: 'center', fontWeight:'bold'
  },
  textfooter: {
    padding: 15, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  }


});
