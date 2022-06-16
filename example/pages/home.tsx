import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Wave from "react-native-waves"
import styles from "./styles";

export default function HomePage() {

  const speed = 5
  const delta = 100

  return (
    <SafeAreaView style={styles.container} containerStyle={styles.wrapper}>

      <Wave placement="top" speed={speed} flip delta={delta}/>
      <Wave placement="top" gap={20} speed={speed} color="#006bb3" delta={delta} flip/>

      <View>
        <Text style={styles.title}>Waves</Text>
        <Text style={styles.info}>react-native-waves</Text>
      </View>

      <Wave placement="bottom" speed={speed} delta={delta}/>
      <Wave placement="bottom" gap={20} speed={speed} color="#006bb3" delta={delta} />

    </SafeAreaView>
  );
}

