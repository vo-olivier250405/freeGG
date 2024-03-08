import React, { useRef, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const animation = useRef(null) as any;
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height / 4,
          backgroundColor: "#000",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./assets/blueLoading.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
