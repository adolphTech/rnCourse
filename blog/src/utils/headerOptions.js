import { Feather,EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const IndexScreenOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  ),
});

const ShowScreenOptions = ({ navigation, route }) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        const { id } = route.params;

        navigation.navigate('EditScreen', { id });
      }}
    >
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  ),
}); //this is the options object that is passed to the EditScreen component

export { IndexScreenOptions, ShowScreenOptions };