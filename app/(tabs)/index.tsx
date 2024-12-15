import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calculateBMI } from "@/utils/calculateBMI";
import { useFonts, KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";
import { evaluateBMI } from "@/utils/evaluateBMI";
import { calculateIdealWeight } from "@/utils/calculateIdealWeight";

export default function HomeScreen() {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("60");

  let [fontsLoaded] = useFonts({
    KronaOne_400Regular,
    IBMPlexSans_400Regular,
    IBMPlexSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleInputValue = (v: string, change: Function) => {
    // 正規表現で数字と小数点のみを許可
    const numericValue = v.replace(/[^0-9.]/g, "");
    // 小数点２位以下を消す
    const formattedValue = numericValue.match(/^\d*(\.\d{0,1})?/);
    change(formattedValue ? formattedValue[0] : "");
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View style={{ gap: 80 }}>
        <View>
          <Text style={styles.heading}>BMI</Text>
          <Text style={styles.subheading}>Body Mass Index</Text>
        </View>

        <View style={{ gap: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ width: 75, fontSize: 12 }}>height</Text>
            <TextInput
              placeholder="height"
              value={height}
              onChangeText={(v) => handleInputValue(v, setHeight)}
              keyboardType="numeric"
              style={{
                flex: 1,
                backgroundColor: "#00000011",
                height: 54,
                padding: 8,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ width: 75, fontSize: 12 }}>weight</Text>
            <TextInput
              placeholder="weight"
              value={weight}
              onChangeText={(v) => handleInputValue(v, setWeight)}
              keyboardType="numeric"
              style={{
                flex: 1,
                backgroundColor: "#00000011",
                height: 54,
                padding: 8,
              }}
            />
          </View>
        </View>
      </View>

      <View style={{ gap: 25, marginTop: 60 }}>
        <Text style={styles.text}>あなたは...</Text>
        <View>
          <Text style={[styles.boldBigText, { textAlign: "center" }]}>
            {evaluateBMI({
              bmi: calculateBMI({
                height: Number(height),
                weight: Number(weight),
              }),
            })}
          </Text>
          <Text
            style={[styles.boldText, { textAlign: "center", marginTop: 5 }]}
          >
            （BMI:{" "}
            {calculateBMI({ height: Number(height), weight: Number(weight) })}）
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            {
              textAlign: "right",
            },
          ]}
        >
          です。
        </Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={[styles.subText, { textAlign: "right" }]}>
          あとkg減らすと、適正体重{"\n"}
          {calculateIdealWeight({ height: Number(height) })}kgになります。
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 45,
    letterSpacing: 5,
  },
  subheading: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 20,
    letterSpacing: 5,
  },
  text: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 20,
  },
  subText: {
    fontSize: 16,
  },
  boldBigText: {
    fontFamily: "IBMPlexSans_700Bold",
    fontSize: 60,
    letterSpacing: 5,
  },
  boldText: {
    fontFamily: "IBMPlexSans_700Bold",
    fontSize: 20,
  },
});
