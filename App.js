import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Input } from "./components/InputText/inputText";


function App() {
  return (
    <View style={styles.container}>
    <Input/>
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;

