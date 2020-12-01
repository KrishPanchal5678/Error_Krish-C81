import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Modal, KeyboardAvoidingView } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component(){
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.drawerItemsContainer}>
                 <DrawerItems {...this.props}/>
                </View>

                <View style = {styles.logOutContainer}>
                    <TouchableOpacity 
                    style = {styles.logoutButton}
                    onPress = {() => {
                        this.props.navigation.navigate("welcomeScreen")
                        firebase.auth().signOut()
                    }}
                    >
                      <Text> Log Out </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}