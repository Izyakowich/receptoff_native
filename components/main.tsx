import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import ObjectCard, { ObjectInt } from './objectcard';
import NavigationBar from './navbar';
import {  TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    MainScreen: undefined;
    ObjectDetailsScreen: { object: ObjectInt };
  };
  
  type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
  
  interface MainScreenProps {
    navigation: MainScreenNavigationProp;
  }
  
  const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const [objects, setObjects] = useState<ObjectInt[]>([]);
    const [filteredObjects, setFilteredObjects] = useState<ObjectInt[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<ObjectInt[]>('http://172.20.10.4:8000/');
          if (response.status === 200) {
            setObjects(response.data);
            setFilteredObjects(response.data);
          } else {
            throw new Error('Failed to get data from the server');
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      if (searchQuery === '') {
        setFilteredObjects(objects);
      } else {
        const filtered = objects.filter(
          (object) =>
            object.product_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredObjects(filtered);
      }
    }, [searchQuery, objects]);
  
    const handleDetailsPress = (object: ObjectInt) => {
      console.log('Details Pressed:', object.product_name);
      navigation.navigate('ObjectDetailsScreen', { object });
    };
  
    const renderObjectCard = ({ item }: { item: ObjectInt }) => {
      return (
        <TouchableOpacity onPress={() => handleDetailsPress(item)}>
          <ObjectCard object={item} onDetailsPress={() => {}} />
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <NavigationBar />
        <TextInput
          style={styles.input}
          placeholder="Поиск по названию..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <FlatList
          data={filteredObjects}
          renderItem={renderObjectCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 10,
    },
  });
  
  export default MainScreen;