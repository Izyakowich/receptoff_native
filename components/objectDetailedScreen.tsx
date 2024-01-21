import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ObjectInt } from './objectcard';
import NavigationBar from './navbar';

type ObjectDetailsRouteProp = RouteProp<{
  ObjectDetailsScreen: { object: ObjectInt };
}, 'ObjectDetailsScreen'>;

const ObjectDetailsScreen: React.FC = () => {
  const route = useRoute<ObjectDetailsRouteProp>();
  const { object } = route.params;

  return (
    <View style={styles.container}>
      <NavigationBar />
      <View style={styles.content}>
        <Image source={{ uri: object.photo }} style={styles.image} />
        <Text style={styles.title}>Название:{object.product_name}</Text>
        <Text style={styles.info}>Цена: {object.price}</Text>
        <Text style={styles.info}>Доп информация: {object.product_info}</Text>
        {/* Дополнительная информация о объекте */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200, // Пример задания ширины изображения
    height: 200, // Пример задания высоты изображения
    marginBottom: 10, // Добавляем отступ снизу для текста
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default ObjectDetailsScreen;