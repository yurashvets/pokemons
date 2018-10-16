import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { StyleSheet, View, TextInput } from 'react-native';
import CustomList from '../components/List';
import API_URL from '../constants/API';
import Preloader from '../components/Preloader';

export default class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      loading: false,
      data: []
    };
    this.searchFilterFunction = this.searchFilterFunction.bind(this);
  }

  static navigationOptions = {
      headerStyle: {
        backgroundColor: '#a4cccb',
        height: 10,
      },
    };

  componentDidMount() {
    this.props.navigation.setParams({ searchFilterFunction: this.searchFilterFunction });
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading: true });
    axios({
      method: 'GET',
      url: `${API_URL}`,
      dataType: 'json',  
    })
    .then(response => {
      console.log('RESPONSE:: ', response);
      this.setState({
        pokemons: response.data.results,
        loading: false,
        data: response.data.results,
      })
    })
    .catch(error => console.log(error))
  }

  handleGrouping = arr => {
    const grouped = _(arr)
      .sortBy('name')
      .groupBy(item => item.name[0].toUpperCase())
      .map((data, title) => ({ data, title }))
      .value();
    return grouped;
  }

  renderHeader = () => {
    return (
      <TextInput
        placeholder="Search..."
        onChangeText={text => this.searchFilterFunction(text)}
        underlineColorAndroid={'transparent'}
        style={{height: 40, borderWidth: 0, paddingLeft: 10, borderRadius: 20, overflow: 'hidden'}}
      />
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    const { data } = this.state;
    const newData = this.state.data.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      pokemons: newData,
    });
  };

  render() {
    const { pokemons, loading } = this.state;
    const { navigation } = this.props;
    if (loading) {
      return <Preloader />
    }
    return (
        <View>
          <View>{this.renderHeader()}</View>
          <CustomList
            arr={this.handleGrouping(pokemons)}
            renderSeparator={this.renderSeparator}
            navigation={navigation}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
