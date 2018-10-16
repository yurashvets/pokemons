import { createStackNavigator } from 'react-navigation';
import Pokemons from '../screens/Pokemons';
import PokemonScreen from '../screens/PokemonScreen';

const MainStack = createStackNavigator({
  Main: Pokemons,
  PokeScreen: PokemonScreen,
});
export default MainStack
