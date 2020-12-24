import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "./Provider/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlog, getBlog } = useContext(Context);

  useEffect(() => {
    getBlog();

    const listener = navigation.addListener("focus", () => {
      getBlog();
    });

    return () => {
      listener.remove();
    };
  }, []);

  const BlogBar = ({ title, id }) => {
    return (
      <View style={styles.bar}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>
            {title} - {id}
          </Text>
          <TouchableOpacity onPress={() => deleteBlog(id)}>
            <Feather
              name="trash-2"
              size={26}
              color="black"
              style={styles.bin}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: "center", margin: 5 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <BlogBar title={item.title} id={item.id} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 45,
    width: Dimensions.get("window").width / 1.1,
    elevation: 10,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 5,
  },

  bin: {
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
    fontWeight: "bold",
    marginTop: 5,
    paddingRight: 10,
    flex: 1,
  },
});

export default IndexScreen;
