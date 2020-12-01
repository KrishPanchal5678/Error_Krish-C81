import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Modal, KeyboardAvoidingView } from 'react-native';
import {Header, Icon} from 'react-native-elements';

const MyHeader = props => {
    return(
        <Header 
        centerComponent = {{text: props.title, style: {color:"red", fontSize: 20, fontWeight: "bold"}}}
        backgroundColor = "yellow"
        />
    )
} 

export default MyHeader;