import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Physics Formulator
                </Text>
                <ScrollView>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {()=> {
                            this.props.navigation.navigate("MotionScreen")
                        }}
                    >
                        <Text style = {styles.buttonText}>
                            Equations of Motion
                        </Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity 
                        style = {styles.button}
                        onPress = {()=> {
                            //this.props.navigation.navigate("MotionHubScreen")
                        }}
                        disabled = {true}
                        >
                        <Text style = {styles.buttonText}>
                            Coming soon
                        </Text>
                    </TouchableOpacity>*/}
                </ScrollView>
            </View>
        )
    }
}

var json = {
    "data": "2+2"
}

var styles = StyleSheet.create({
    container : { 
        flex:1,
        alignItems: "center",
    }, 
    title :{
        fontSize:35,
        fontWeight:'300',
        paddingTop:50,
        paddingBottom:50,
        color : '#451E5D'
    },
    button :{
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30,
        backgroundColor: '#451E5D'
    },
    buttonText :{
        fontSize:15,
        color: '#FFFFFF'
    }
})