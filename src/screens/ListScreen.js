import React from "react";
import { Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'friend 1', age: 26},
        {name: 'friend 2', age: 20},
        {name: 'friend 3', age: 32},
        {name: 'friend 4', age: 54},
        {name: 'friend 5', age: 23},
        {name: 'friend 6', age: 65},
        {name: 'friend 7', age: 100},
        {name: 'friend 8', age: 12},
        {name: 'friend 9', age: 21},
        {name: 'friend 10', age: 43},
        {name: 'friend 11', age: 19},
        {name: 'friend 12', age: 26},
        {name: 'friend 22', age: 20},
        {name: 'friend 32', age: 32},
        {name: 'friend 42', age: 54},
        {name: 'friend 52', age: 23},
        {name: 'friend 62', age: 65},
        {name: 'friend 72', age: 100},
        {name: 'friend 82', age: 12},
        {name: 'friend 92', age: 21},
        {name: 'friend 102', age: 43},
        {name: 'friend 112', age: 19},
    ]
    return  (
        <FlatList
        keyExtractor={friend => friend.name}    
        data={friends}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Text style={styles.nameText}>{item.name} - Age {item.age}</Text>
        }}
        />
    )
    
}

const styles = StyleSheet.create({
    nameText: {
        fontSize: 32,
    }
})

export default ListScreen;
