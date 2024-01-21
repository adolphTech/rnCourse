import { View, Text, StyleSheet ,FlatList,Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);
  console.log(result);
  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    height:200,
    width:300
  }
});
export default ResultsShowScreen;
