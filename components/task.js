import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {


    return(
        <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circual}></View>
        </View>
    )

}

const styles = StyleSheet.create({
    circual:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,

    },
    itemText:{
        maxWidth: '100%',
    },
    square:{
        width:24,
        height:24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLef:{
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    item:{
        backgroundColor: '#FFF',
        padding:15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    items:{
        marginTop: 20,
    },
    
});

export default Task;