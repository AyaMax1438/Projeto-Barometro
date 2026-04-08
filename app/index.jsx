import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {

  const roteador = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Clique abaixo para consultar o barômetro</Text>

      <Button
        title="Consultar Barômetro"
        onPress={() => roteador.push("./barometro")}
      />

    </View>
  );
}