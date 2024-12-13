import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const calculateBMI = (props: {
    /**
     * 性別
     */
    gender?: "female" | "male";
    /**
     * 身長
     */
    height: number;
    /**
     * 体重
     */
    weight: number;
    /**
     * 年齢
     */
    age?: number;
  }) => {
    // BMIの計算処理
    return 0;
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{calculateBMI({ height: 165, weight: 65 })}</Text>
      <Text>{calculateBMI({ weight: 65, height: 165 })}</Text>
      <Text>{calculateBMI({ height: 120, weight: 30 })}</Text>
      <Text>{calculateBMI({ gender: "male", height: 120, weight: 30 })}</Text>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}
