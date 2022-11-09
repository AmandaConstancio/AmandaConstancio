import { Linking, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./style";

export const Produtos = () => (
  <View>
    <View style={{ marginTop: "150px" }}>
      <h1>
        <center>PRODUTOS</center>
      </h1>
      <h2>
        <center> TODO O BRILHO DE UMA JOIA VIVARA</center>
      </h2>
      <Text>
        <center>
          {" "}
          No começo, era um sonho. A pedra bruta, com seu brilho eterno, ganhou
          lapidação em formas impecáveis.
          <br></br>O design autoral foi ganhando vida no movimento das mãos. O
          desejo por marcar histórias nasceu. E é por isso que
          <br></br>fazemos tudo com tanto cuidado,porque, acima de tudo, uma
          joia é a história que ela conta.{" "}
        </center>
      </Text>

      <h3>
        <center> CLIQUE AQUI PARA CONHECER O CATÁLOGO OFICIAL DA VIVARA</center>
      </h3>
    </View>
    <View
      style={{
        width: "100%",
        height: 300,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Button style={{
       backgroundColor: "black",
      }}  mode="contained"   onPress={() => Linking.openURL('https://www.vivara.com.br/')}>
      Clique
    </Button>
    </View>
  </View>
);
