import React from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    ScrollView, 
    TextInput, 
    Modal, 
    Alert} 
from 'react-native';
import {Header, Icon} from 'react-native-elements';


export default class MotionScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            InitialVelocity: false,
            FinalVelocity: false,
            Time: false,
            Acceleration: false,
            Displacement: false,
            ValuesSelected: 0,
            ValuesCanBeSolved1: "",
            ValuesCanBeSolved2: "",
            EqCode: null,
        }
    }

    InitialVelocityFunc = async () => {
        this.setState({
            InitialVelocity: true,
            ValuesSelected: this.state.ValuesSelected + 1
        })
    }

    FinalVelocityFunc = async () => {
        this.setState({
            FinalVelocity: true,
            ValuesSelected: this.state.ValuesSelected + 1
        })
    }

    TimeFunc = async () => {
        this.setState({
            ValuesSelected: this.state.ValuesSelected + 1,
            Time: true
        })
    }

    AccelerationFunc = async () => {
        this.setState({
            Acceleration: true,
            ValuesSelected: this.state.ValuesSelected + 1
        })
    }

    DisplacementFunc = async () => {
        this.setState({
            Displacement: true,
            ValuesSelected: this.state.ValuesSelected + 1
        })
    }

    InitialVelocityFunc2 = async () => {
        this.setState({
            InitialVelocity: false,
            ValuesSelected: this.state.ValuesSelected - 1
        })
    }

    FinalVelocityFunc2 = async () => {
        this.setState({
            FinalVelocity: false,
            ValuesSelected: this.state.ValuesSelected - 1
        })
    }

    TimeFunc2 = async () => {
        this.setState({
            ValuesSelected: this.state.ValuesSelected - 1,
            Time: false
        })
    }

    AccelerationFunc2 = async () => {
        this.setState({
            Acceleration: false,
            ValuesSelected: this.state.ValuesSelected - 1
        })
    }

    DisplacementFunc2 = async () => {
        this.setState({
            Displacement: false,
            ValuesSelected: this.state.ValuesSelected - 1
        })
    }

    checkValues = () => {
        var InitialVelocity = this.state.InitialVelocity
        var FinalVelocity = this.state.FinalVelocity
        var Time = this.state.Time
        var Acceleration = this.state.Acceleration
        var Displacement = this.state.Displacement

        if(this.state.ValuesSelected === 3){
            if (InitialVelocity === true) {
                if (InitialVelocity === true && FinalVelocity === true && Time === true) {
                    this.setState({
                        EqCode: 1,
                        ValuesCanBeSolved1: "Acceleration(v = u + at), ",
                        ValuesCanBeSolved2:  "Displacement(s = {(u + v)/2}t)"
                    })
                }
                else if (InitialVelocity === true && FinalVelocity === true && Acceleration === true) {
                    this.setState({
                        EqCode: 2,
                        ValuesCanBeSolved1: "Time(v = u + at), ",
                        ValuesCanBeSolved2: "Displacement(v^2 = u^2 + 2as)" 
                    })
                }
                else if (InitialVelocity === true && FinalVelocity === true && Displacement === true) {
                    this.setState({
                        EqCode: 3,
                        ValuesCanBeSolved1: "Time(s = {(u + v)/2}t), ",
                        ValuesCanBeSolved2: "Acceleration(4)"
                    })
                }
                else if (InitialVelocity === true && Acceleration === true && Displacement === true) {
                    this.setState({
                        EqCode: 4,
                        ValuesCanBeSolved1: "Final Velocity(4), ",
                        ValuesCanBeSolved2: "Time(s = ut + ½at^2)"
                    })
                }
                else if (InitialVelocity === true && Time === true && Displacement === true) {
                    this.setState({
                        EqCode: 5,
                        ValuesCanBeSolved1: "Final Velocity(s = {(u + v)/2}t), ",
                        ValuesCanBeSolved2: "Acceleration(s = ut + ½ at^2)"
                    })
                }
                else if (InitialVelocity === true && Time === true && Acceleration === true) {
                    this.setState({
                        EqCode: 6,
                        ValuesCanBeSolved1: "Final Velocity(v = u + at), ",
                        ValuesCanBeSolved2: "Displacement(s = ut + ½ at^2)"
                    })
                }
            }
            else if (FinalVelocity === true) {
                if (Displacement === true && FinalVelocity === true && Time === true) {
                    this.setState({
                        EqCode: 7,
                        ValuesCanBeSolved1: "Acceleration(5), ",
                        ValuesCanBeSolved2: "Initial Velocity(s = {(u + v)/2}t)"
                    })
                }
                else if (Time === true && FinalVelocity === true && Acceleration === true) {
                    this.setState({
                        EqCode: 8,
                        ValuesCanBeSolved1: "Initial Velocity(v = u + at), ",
                        ValuesCanBeSolved2: "Displacement(5)"
                    })
                }
                else if (Acceleration === true && FinalVelocity === true && Displacement === true) {
                    this.setState({
                        EqCode: 9,
                        ValuesCanBeSolved1: "Time(s = {(u + v)/2}t), ",
                        ValuesCanBeSolved2: "Initial Velocity(4)"
                    })
                }
            }
            else if (Time === true && Displacement === true && Acceleration === true) {
                this.setState({
                    EqCode: 10,
                    ValuesCanBeSolved1: "Initial Velocity(2), ",
                    ValuesCanBeSolved2: "Final Velocity(5)"
                })
            }
        }
        else if(this.state.ValuesSelected === 4) {
            if (InitialVelocity === false) {
                this.setState({
                    EqCode: 11,
                    ValuesCanBeSolved1: "Initial Velocity in 4 different ways",
                    ValuesCanBeSolved2: ""
                })
            }
            else if (FinalVelocity === false) {
                this.setState({
                    EqCode: 12,
                    ValuesCanBeSolved1: "Final Velocity in 4 different ways",
                    ValuesCanBeSolved2: ""
                })
            }
            else if (Time === false) {
                this.setState({
                    EqCode: 13,
                    ValuesCanBeSolved1: "Time in 4 different ways",
                    ValuesCanBeSolved2: ""
                })
            }
            else if (Acceleration === false) {
                this.setState({
                    EqCode: 14,
                    ValuesCanBeSolved1: "Acceleration in 4 different ways",
                    ValuesCanBeSolved2: ""
                })
            }
            else if (Displacement === false) {
                this.setState({
                    EqCode: 15,
                    ValuesCanBeSolved1: "Displacement in 4 different ways",
                    ValuesCanBeSolved2: ""
                })
            }
        }
    }

    render() {
        return(
            <View >
                <Header
                    leftComponent = {
                        <Icon
                            name = "arrow-left"
                            type = "feather"
                            color = "#696969"
                            onPress = {() => {
                                this.props.navigation.navigate("HomeScreen")
                            }}
                            size = {40}
                        />   
                    }
                    centerComponent = {{
                        text: "Select your Values",
                        style: {
                            color: "#FFFFFF", 
                            fontSize: 25, 
                            fontWeight: "bold"
                        },
                    }}
                    rightComponent = {
                        <Icon
                            name = "home"
                            type = "feather"
                            color = "#696969"
                            size = {40}
                            onPress = {() => {
                                this.props.navigation.navigate("HomeScreen")
                            }}
                        />
                    }
                    backgroundColor = {"#C89CE4"}
                />
                <View style = {styles.container}>

                {/* initial velocity */}
                <TouchableOpacity
                    style = {
                        !this.state.InitialVelocity?
                        styles.button:
                        styles.DisabledButton      
                    }
                    onPress = {async () => {
                        if (this.state.InitialVelocity === false && this.state.ValuesSelected < 4) {
                            await this.InitialVelocityFunc()
                            this.checkValues();
                        }
                        else if (this.state.InitialVelocity === true) {
                            await this.InitialVelocityFunc2()
                            this.checkValues();
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Initial Velocity
                    </Text>
                </TouchableOpacity>
                
                {/* final velocity */}
                <TouchableOpacity
                    style = {
                        !this.state.FinalVelocity?
                        styles.button:
                        styles.DisabledButton      
                    }
                    onPress = {async () => {
                        if (this.state.FinalVelocity === false && this.state.ValuesSelected < 4) {
                            await this.FinalVelocityFunc()
                            this.checkValues();
                        }
                        else if (this.state.FinalVelocity === true){
                            await this.FinalVelocityFunc2()
                            this.checkValues();
                        } 
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Final Velocity
                    </Text>
                </TouchableOpacity>
                
                {/* time */}
                <TouchableOpacity
                    style = {
                        !this.state.Time?
                        styles.button:
                        styles.DisabledButton      
                    }
                    onPress = {async () => {
                        if (this.state.Time === false && this.state.ValuesSelected < 4) {
                            await this.TimeFunc()
                            this.checkValues();
                        }
                        else if (this.state.Time === true) {
                            await this.TimeFunc2()
                            this.checkValues();
                            
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Time
                    </Text>
                </TouchableOpacity>

                
                {/* Acceleration */}
                <TouchableOpacity
                    style = {
                        !this.state.Acceleration?
                        styles.button:
                        styles.DisabledButton      
                    }
                    onPress = {async () => {
                        if (this.state.Acceleration === false && this.state.ValuesSelected < 4) {
                            await this.AccelerationFunc()
                            this.checkValues();
                        }
                        else if (this.state.Acceleration === true) {
                            await this.AccelerationFunc2()
                            this.checkValues();
                        } 
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Acceleration
                    </Text>
                </TouchableOpacity>
                
                {/* Displacement */}
                <TouchableOpacity
                    style = {
                        !this.state.Displacement?
                        styles.button:
                        styles.DisabledButton      
                    }
                    onPress = {async () => {
                        if (this.state.Displacement === false && this.state.ValuesSelected < 4) {
                            await this.DisplacementFunc()
                            this.checkValues();
                        }
                        else if (this.state.Displacement === true) {
                            await this.DisplacementFunc2()
                            this.checkValues();
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>
                        Displacement
                    </Text>
                </TouchableOpacity>

                {
                    this.state.ValuesSelected >= 3?
                    (
                    //this.checkValues(),
                    <View style = {styles.container2}>
                        <Text style = {styles.ternaryText}>
                            You can solve:
                        </Text>
                        <Text style = {styles.ternaryText2}>
                            {this.state.ValuesCanBeSolved1}
                        </Text>
                        <Text style = {styles.ternaryText2}>
                            {this.state.ValuesCanBeSolved2}
                        </Text>
                    <TouchableOpacity
                        style = {
                            styles.goButton  
                        }
                        onPress = {() => {
                            this.props.navigation.navigate('EquationsScreen', {code: this.state.EqCode})
                        }}
                    >
                        <Text style = {[styles.buttonText, {fontSize: 20}]}>
                            GO
                        </Text>
                    </TouchableOpacity>
                    </View>
                    )
                    :
                    (<Text style = {styles.ternaryText}>
                        {
                            3-this.state.ValuesSelected === 1?
                            ("Please select 1 more value"):
                            ("Pease select " + (3 - this.state.ValuesSelected) + " more values")
                        }
                        
                    </Text>)
                }
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : { 
        flex:1,
        alignItems: "center",
        paddingTop: 50,
    }, 
    container2 : { 
        flex:1,
        //alignContent: "center",
    },
    ternaryText : {
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    ternaryText2 : {
        fontSize: 20,
        marginTop: 10,
        alignSelf: 'center'
    },
    title :{
        fontSize:30,
        paddingBottom:70,
        paddingTop:30,
        color : '#451E5D',
        alignSelf: 'center'
    },
    Subtitle: {
        fontSize:20,
        color : '#451E5D'
    },
    ModalTitle :{
        fontSize:45,
        paddingBottom:30,
        color : '#451E5D'
    },
    ModalText: {
        fontSize:25,
        paddingBottom:10,
        color : '#C89CE4'
    },
    button :{
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:20,
        backgroundColor: '#451E5D'
    },
    DisabledButton :{
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:20,
        backgroundColor: '#4C0121'
    },
    goButton :{
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:200,
        marginTop:70,
        backgroundColor: '#C89CE4'
    },
    ReturnButton :{
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30,
        backgroundColor: '#C89CE4'
    },
    buttonText :{
        fontSize:15,
        color: '#FFFFFF'
    },
    loginBox:{
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 15,
        margin:10,
        marginBottom: 30,
        padding: 10,
        borderColor: '#451E5D',
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
})