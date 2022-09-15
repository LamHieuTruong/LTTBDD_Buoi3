import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.view}></View>
      <View style={styles.view}>
        <Image style={styles.tinyLogo} source={require("./img/circle.png")} />
      </View>
      <View style={styles.container}>
    <ImageBackground source={require("./img/background.png")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
      <View style={styles.view}>
        <Text style={styles.title1}>GROW</Text>
        <Text style={styles.title}>YOUR BUSSINESS</Text>
      </View>
      <View style={styles.viewtitle}>
        <Text style={styles.title}>
          We will help you to grow your business using online serverWe will help
          you to grow your business using online server
        </Text>
      </View>
      <View style={styles.viewbutton}>
        <Button title="lOGIN"  />
        <Button title="SIGN UP" />
      </View>
      <View style={styles.viewbot}>
        <Text style={styles.title}>HOW WE WORK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 16,
    textAlign: "center",
  },
  viewtitle: {
    flex: 1,
    marginTop:20
  },
  viewbot: {
    flex: 1,
    marginTop:30
  },
  viewbutton: {
    flexDirection: "row",
    justifyContent:"space-between",
    width:"50%",
  },
  view: {
    flex: 1,
  },
  title1: {
    fontSize: 16,
    textAlign: "center",
    marginTop:30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 3,
  },
});