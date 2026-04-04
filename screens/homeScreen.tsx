/* eslint-disable react-native/no-inline-styles */
// screens/HomeScreen.tsx
import { View, Text, Pressable } from "react-native";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={() => navigation.navigate("Product")}>
        <Text>Go to Product</Text>
      </Pressable>
    </View>
  );
}