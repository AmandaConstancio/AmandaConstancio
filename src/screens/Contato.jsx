
import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, } from "react-native";
import { styles } from "./style";

export const Contato = () => {
    const [text, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ ...styles.container, ...stylesEspec.container }}>
            <h3>
        <center> ENTRE EM CONTATO CONOSCO</center>
      </h3>
            <TextInput
                label="email"
                mode="outlined"
                value={text}
                onChangeText={(emailDigitado) => setEmail(emailDigitado)} />

            <TextInput
                style={styles.input}
                label="senha"
                mode="outlined"
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <br />
            <MyComponent />
        </View>
    );
};

const stylesEspec = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100vh'
    },
});
<br></br>
const MyComponent = () => (
    <Button style={{
        backgroundColor: "black",
       }} mode="contained" onPress={() => console.log('Pressed')}>
        Salvar

        
    </Button>

    
);

export default MyComponent;