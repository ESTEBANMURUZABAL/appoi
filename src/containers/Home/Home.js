import React, { Component, PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

  render() {
    return (
      <Image style={{flex: 1,width: null,height: null,paddingTop: 64,backgroundColor:'white'}}
             source={require('./../../assets/img/bghome.jpg')}
      >
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <TouchableHighlight onPress={() => Actions.reserveScreen() } underlayColor="transparent">
             <View style={styles.menuItem}>
                <Text style={styles.text}>Reserva tu cancha!</Text>
             </View> 
            </TouchableHighlight> 
            <TouchableHighlight onPress={() => Actions.appointments() } underlayColor="transparent">
             <View style={styles.menuItem}>
                <Text style={styles.text}>Tus reservas</Text>
             </View>
            </TouchableHighlight>   
          </View>
          <View style={styles.rowContainer}>  
            <TouchableHighlight onPress={() => Actions.maps() } underlayColor="transparent"> 
             <View style={styles.menuItem}>
                <Text style={styles.text}>Busca jugadores</Text>
             </View> 
            </TouchableHighlight>  
            <TouchableHighlight onPress={() => Actions.maps() } underlayColor="transparent">
             <View style={styles.menuItem}>
                <Text style={styles.text}>Mapa de canchas</Text>
             </View>
            </TouchableHighlight>  
          </View>   
          <View style={styles.rowContainer}> 
            <TouchableHighlight onPress={() => Actions.favorites() } underlayColor="transparent">             
             <View style={styles.menuItem}>
                <Text style={styles.text}>Favoritas</Text>
             </View>
            </TouchableHighlight>  
            <TouchableHighlight onPress={() => Actions.settings() } underlayColor="transparent">
              <View style={styles.menuItem}>
                <Text style={styles.text}>Tu perfil</Text>
             </View> 
            </TouchableHighlight>  
          </View>   
        </View>   
      </Image>  
    );
  }
}

Home.propTypes = ({
  logout:PropTypes.func.isRequired
});

const styles = StyleSheet.create({
  contentContainer:{
    flexDirection: 'column',
    flex: 1,
    justifyContent:'space-between',
    marginTop: 40,
    marginBottom: 40,
  },
  rowContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',

  },
  menuItem: {
     width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'white',
    opacity: 0.7,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center'

  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color:'black',
    fontSize:20,
    fontWeight:'800',
    fontFamily:'Arial',
  },

});
