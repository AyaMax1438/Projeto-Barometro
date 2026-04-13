// misti attakk xP
//importa um modelo de view que mantém o conteúdo fora de areas incovenientes (tipo a barra de notificações)
import { SafeAreaView } from "react-native-safe-area-context";
//importa as combinações básicas do projeto junto do sensor Barometer de dentro da biblioteca 'expo-sensors'
import { Button, Text  } from "react-native";
import { useState } from "react";
import { Barometer } from "expo-sensors";

export default function Barometro() {
  //cria um estado com dois valores e usa as medidas do Barometer como parâmetros desse estado
  //usa o setData como forma de atualizar esses valores e ja deixa predefinido eles como zero.
   const [{pressure, relativeAltitude}, setData] = useState({pressure: 0, relativeAltitude: 0});
   //cria um estado pra lidar com o leitor (liga/desliga nesse caso) e deixa definido como desligado (null).
   const [leitor, setLeitor] = useState(null);

   //função que lida com o leitor e mostra se esta ligado ou desligado
   const ativarLeitor = () => {
    //existe um leitor?
    //se sim => desliga
    //se não => liga
    leitor ? desligar() : ligar();
   };

   //função responsável por ligar o sensor
   const ligar = () => {
    //adiciona um listener ao barometro e guarda ele dentro do "leitor".
    //sempre que houver uma mudança o setData vai automaticamente atualizar o valor
    setLeitor(Barometer.addListener(setData));
   };

   //função responsável por desligar o sensor
   const desligar = () => {
    //se houver um leitor, ele o remove (pra que pare de escutar o sensor)
    leitor && leitor.remove();
    //reseta o estado do leitor indicando que ele esta desligado
    setLeitor(null);
   };
  
  //retorna a interface 
  return (
    //centraliza o conteúdo 
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
    }>
    {/*Texto simples */}
      <Text>Barometro yay </Text>
      {/*Mostra se o sensor está ligado ou desligado */}
      <Text>Sensor: {leitor ? 'ligado' : 'desligado'} </Text>
      {/*Mostra o valor atual da pressão em hectopascals */}
      <Text>Pressão: {pressure} hPa</Text>
      {/*Era pra mostrar a altura mas nao ta tendo */}
      <Text>Altura: {relativeAltitude ?? "Indefinida (não suportada no dispositivo)"} </Text>

      {/*Botão que liga e desliga os sensores executando as funções acima */}
      <Button title="Ligar / Desligar"onPress={ativarLeitor}/>

    </SafeAreaView>
  );
}
