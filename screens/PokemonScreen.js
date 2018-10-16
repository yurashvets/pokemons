import React from 'react';
import axios from 'axios';
import { ScrollView, ActivityIndicator, StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import PokemonInfo from '../components/PokemonInfo';
import Preloader from '../components/Preloader';

class PokemonScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUrl: props.navigation.state.params.url,
            poke: null,
            loading: true,
            avatar: null,
            pokemonName: props.navigation.state.params.name,
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('pokemonName'),
          headerStyle: {
            backgroundColor: '#a4cccb',
          },
        };
      };
    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: '#a4cccb',
    //         // height: 10,
    //       },
    // }
    componentDidMount = () => {
        const { navigation } = this.props
        let name = navigation.state.params.name;
        name = name[0].toUpperCase() + name.slice(1);
        navigation.setParams({ pokemonName: name });
       this.getPoke();
    }

    getPoke = () => {
        const { currentUrl } = this.state;
        axios({
            method: 'GET',
            url: `${currentUrl}`,
            dataType: 'json',  
        })
        .then(response => {
            this.setState({
                poke: response.data,
                avatar: response.data.sprites.front_default,
                loading: false,
            }) 
        })
        .catch(error => console.log(error))
    }
    
    render() {
        const { loading, poke } = this.state;
        if (loading) {
            return <Preloader />
          }
        return(
            <ImageBackground source={require('../assets/images/background.jpg')} style={styles.container}>
                <ScrollView>
                    <Image source ={{uri: this.state.avatar}} resizeMode="contain" style={styles.avatar} />
                    <View style={styles.bottomBg}>
                        {
                            poke && <PokemonInfo
                                title={poke.name}
                                abilities={poke.abilities}
                                stats={poke.stats}
                                species={poke.species}
                                base_experience={poke.base_experience}
                            />
                        }
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default PokemonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:null,
        height:null,
    },
    avatar: {
        zIndex: 3,
        width:210,
        height: 240,
        alignSelf:'center' 
    },
    topBg: {
        flex:1
    },
    bottomBg: {
        flex: 2.5,
        backgroundColor:'rgba(222, 232, 249, 0.9)',
    },
})