import {Stack} from "expo-router";
import "./globals.css"
import {View} from "react-native";

export default function RootLayout() {
  return <View className="flex-1">
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle : {
                        backgroundColor : "#eceff3"
                    },
                }}
            />
        </View>
}
