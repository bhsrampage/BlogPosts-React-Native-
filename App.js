import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/screens/Provider/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather
                    name="plus"
                    size={30}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: () => {
              const { id } = route.params;
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Edit", { id })}
                >
                  <EvilIcons name="pencil" size={35} color="black" />
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
