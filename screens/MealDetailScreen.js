import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealsAction";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  HeaderButtons,
  Item,
  CustomHeaderButton,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const toggleFavoriteHandler = useCallback(() => {}, [dispatch, MealId]);
  const availableMeals = useSelector((state) => state.meals.meals);
  const MealId = props.navigation.getParam("MealId");
  const selectedMeal = availableMeals.find((cat) => cat.id === MealId);
  const dispatch = useDispatch();
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  });
  console.log(selectedMeal);
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={{ width: "100%", height: 400 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "center", marginRight: 20 }}>
            {selectedMeal.duration} m
          </Text>
          <Text style={{ textAlign: "center", marginRight: 20 }}>
            {selectedMeal.complexity}
          </Text>
          <Text style={{ textAlign: "center", marginRight: 20 }}>
            {selectedMeal.affordability}
          </Text>
        </View>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}
          >
            Ingredients
          </Text>
        </View>
        {/* <Text>{selectedMeal.title}</Text>
        <Text>{selectedMeal.steps}</Text> */}
        <View
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          {selectedMeal.ingredients.map((it, index) => (
            <Text>{it}</Text>
          ))}
        </View>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}
          >
            Step
          </Text>
          <View
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            {selectedMeal.steps.map((it, index) => (
              <Text>{it}</Text>
            ))}
          </View>
        </View>
        <Button
          title="Go Back to Categories"
          onPress={() => {
            props.navigation.navigate("Categories");
          }}
        />
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const MealTitle = navigationData.navigation.getParam("MealTitle");

  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  return {
    headerTitle: MealTitle,
    headerRight: () => {
      return (
        <HeaderButtons>
          <Ionicons
            style={{ margin: 30 }}
            name="ios-star"
            size={25}
            color="white"
            onPress={() => {
              toggleFavorite;
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
