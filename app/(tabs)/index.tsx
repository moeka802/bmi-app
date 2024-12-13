import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calculateBMI } from "@/utils/calculateBMI";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>BMI</Text>
      <Text>Body Mass Index</Text>
      <View>
        <Text>height</Text>
        <TextInput placeholder="height" />
      </View>
      <View>
        <Text>weight</Text>
        <TextInput placeholder="weight" />
      </View>

      <View>
        <Text>あなたは...</Text>
        <Text>普通体重</Text>
        <Text>（BMI: 24）</Text>
        <Text>です。</Text>
      </View>

      <View>
        <Text>あと2.7kg減らすと、適正体重63.3kgになります。</Text>
      </View>
    </SafeAreaView>
  );
}
