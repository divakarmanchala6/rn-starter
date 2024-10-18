import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = <Text style={styles.name}>My Name is Divakar</Text>
    return (
        <View>
            <Text style={styles.text}>Getting Started with React Native</Text>
            {name}
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
    },
    name: {
        fontSize: 20,
    }
})

export default ComponentsScreen;