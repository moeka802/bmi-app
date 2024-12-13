import { View, Text, TextInput, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calculateBMI } from "@/utils/calculateBMI";
import { useFonts, KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

export default function HomeScreen() {
  const SCREEN_WIDTH = Dimensions.get("screen").width;

  let [fontsLoaded] = useFonts({
    KronaOne_400Regular,
    IBMPlexSans_400Regular,
    IBMPlexSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginTop: 20, gap: 80 }}>
        <View>
          <Text
            style={{
              fontFamily: "KronaOne_400Regular",
              fontSize: 45,
              letterSpacing: 5,
            }}
          >
            BMI
          </Text>
          <Text
            style={{
              fontFamily: "KronaOne_400Regular",
              fontSize: 20,
              letterSpacing: 5,
            }}
          >
            Body Mass Index
          </Text>
        </View>

        <View style={{ gap: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: SCREEN_WIDTH - 40,
            }}
          >
            <Text style={{ width: 75, fontSize: 12 }}>height</Text>
            <TextInput
              placeholder="height"
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
              width: SCREEN_WIDTH - 40,
            }}
          >
            <Text style={{ width: 75, fontSize: 12 }}>weight</Text>
            <TextInput
              placeholder="weight"
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

      <View style={{ width: SCREEN_WIDTH - 40, gap: 25, marginTop: 60 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "IBMPlexSans_400Regular",
            width: "100%",
          }}
        >
          あなたは...
        </Text>
        <View>
          <Text
            style={{
              fontSize: 60,
              fontFamily: "IBMPlexSans_700Bold",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: 5,
            }}
          >
            普通体重
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "IBMPlexSans_700Bold",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            （BMI: 24）
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "IBMPlexSans_400Regular",
            width: "100%",
            textAlign: "right",
          }}
        >
          です。
        </Text>
      </View>

      <View style={{ marginTop: 40, width: SCREEN_WIDTH - 40 }}>
        <Text style={{ fontSize: 16, textAlign: "right" }}>
          あと2.7kg減らすと、適正体重{"\n"}63.3kgになります。
        </Text>
      </View>
    </SafeAreaView>
  );
}
