import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);
  const favMeal = availableMeals.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
      <MealList listData={favMeal} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
