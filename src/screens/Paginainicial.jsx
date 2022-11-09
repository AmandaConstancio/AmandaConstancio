import { Image, Text, View } from "react-native";
import { styles } from "./style";

export const Paginicial = ({ navigation }) => (
    <View style={styles.container}>
        <View>
        <Image style={styles.imagem}source={{ uri:'https://logodownload.org/wp-content/uploads/2019/10/vivara-logo.png' }}/>
        <h3><center>TODA JOIA CONTA UMA HISTÓRIA, ESCOLHA A SUA </center></h3>
        </View>
        <Text style={styles.texto}><center>Do nascimento ao casamento, da formatura ao presente especial, quem presenteia com uma joia, entrega um pedaço de seu coração.
            <br></br>Há 60 anos, Vivara eterniza os momentos mais marcantes dos brasileiros e, com mais de 300 lojas espalhadas pelo país, estamos
            <br></br>ansiosos para escrever novos capítulos ao seu lado."</center></Text>
            
    </View>
)