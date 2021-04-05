import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global.js'
import FlatButton from '../shared/button'


export default function App({ navigation }) {

    const pressHandler = () => {
        // navigation.navigate('Question1')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      marginTop: 60,
    }
  });  