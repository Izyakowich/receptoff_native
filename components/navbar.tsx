import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = () => {
  const handleNavigation = (routeName: string) => {
    // Обработка нажатия на кнопку навигации
    console.log('Navigating to:', routeName);
    // В этой функции вы можете добавить логику для навигации по разным экранам вашего приложения
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[styles.navItem,  { backgroundColor: '#171717' }]}
        onPress={() => handleNavigation('Главная')}
      >
        <Text style={styles.navText}>Продуктовые наборы</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, { backgroundColor: '#171717' }]}
        onPress={() => handleNavigation('Выйти')}
      >
        <Text style={styles.navText}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#171717',
    width: '100%',
    paddingVertical: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: 'white', // Темно-серый цвет текста
    fontSize: 16,
    marginTop: 50, // Расстояние между текстом и кнопкой
  },
});

export default NavigationBar;