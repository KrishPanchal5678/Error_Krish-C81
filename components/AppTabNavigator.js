import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    
    donateBooks: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image 
                        source = {require("../assets/booklogo.jpg")} 
                        style = {{ width: 20, height:20}} 
                        />,
            
            tabBarLabel: "Donate Books"
        }
    },

    bookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image 
                        source = {require("../assets/searchingbook.png")} 
                        style = {{ width: 20, height:20}} 
                        />,
            
            tabBarLabel: "Book Requests"
        }
    }
})