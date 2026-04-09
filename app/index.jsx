import { StyleSheet, Button, Text, View } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { Barometer } from "expo-sensors";

export default function Index() {

  const roteador = useRouter();

  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Barometro yay </Text>

      <Button
      />

    </View>
  );
}