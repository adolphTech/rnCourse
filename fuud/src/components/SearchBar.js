import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        value={term}
        autoCapitalize="none"

        autoCorrect={false}
        onEndEditing={onTermSubmit}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', // center the icon vertically only icon not text if i put alignItems center the size reduces bc of flexdirection row
    marginHorizontal: 15,
  },
});
export default SearchBar;
