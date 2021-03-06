import * as React from 'react'
import {View, StyleSheet, Image, SafeAreaView} from 'react-native'
import { Button } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'




export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
}
export default function HomeScreen({navigation}:{navigation:any}) {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/OIMSLogo.png')}
                    style={styles.image} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        buttonStyle={styles.buttonStyle}
                        title="Input New Delivery"
                        titleStyle={styles.buttonTitleStyle}
                        onPress={() => navigation.navigate('Delivery')}
                    />
                    <Button 
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.buttonTitleStyle}
                        title="Input Daily Inventory"
                        onPress={() => navigation.navigate('Inventory')}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center',
        backgroundColor: brownPalette.brown1
    },   

    buttonStyle: {
        backgroundColor: brownPalette.brownBase,
        width: 340,  
        paddingVertical: 10,
        marginVertical:10,
        borderRadius: 6,

    },
    buttonContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 30,
        shadowColor: brownPalette.brown10,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 3,
            width: 3
        }
    },
    imageContainer: {
        flex: 1,
        paddingTop: 130, 

    }, 
    image: {
        height: 250,
        width: 250
    },
    buttonTitleStyle: {
        fontFamily: 'Futura', 
        color: brownPalette.brown10,
        fontWeight: '800',
        fontSize: 24,
    }
})