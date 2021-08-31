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

export default class EquationsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            //text input placeholder
            Placeholder1:"",
            Placeholder2:"",
            Placeholder3:"",
            Placeholder4:"",

            //indicator code
            EqCode: null,

            //Values that can be solved
            Value1: "",
            Value2: "",
            
            //Ternary operator indicator
            Values4: null,

            //Text input inputs
            Input1:null,
            Input2:null,
            Input3:null,
            Input4:null,

            //Formula used to solve
            Formula1: "",
            Formula2: "",
            Formula3: "",
            Formula4: "",

            //Steps
            Value1FirstStep : "",
            Value1SecoundStep : "",
            Value1ThirdStep : "",
            Value1FourthStep : "",
            Value1FifthStep : "",
            Value1SixthStep : "",
            Value1SeventhStep : "",
            Value1EightStep : "",

            Value2FirstStep : "",
            Value2SecoundStep : "",
            Value2ThirdStep : "",
            Value2FourthStep : "",
            Value2FifthStep : "",
            Value2SixthStep : "",
            Value2SeventhStep : "",
            Value2EightStep : "",

            Value3FirstStep : "",
            Value3SecoundStep : "",
            Value3ThirdStep : "",
            Value3FourthStep : "",
            Value3FifthStep : "",
            Value3SixthStep : "",
            Value3SeventhStep : "",
            Value3EightStep : "",

            Value4FirstStep : "",
            Value4SecoundStep : "",
            Value4ThirdStep : "",
            Value4FourthStep : "",
            Value4FifthStep : "",
            Value4SixthStep : "",
            Value4SeventhStep : "",
            Value4EightStep : "",

            //Values solved withouth
            Withouth1: "",
            Withouth2: "",
            Withouth3: "",
            Withouth4: "",
            
            //Is being solved?
            solve: false,

            //exponent
            Exponent:""
        }
    }

    InitialiseEqCode = async () => {
        var Code = this.props.navigation.getParam('code')
        this.setState({
            EqCode: Code
        })
    }

    hideModal = () => {
        this.setState({
            Input1:null,
            Input2:null,
            Input3:null,
            Input4:null,
            solve: false,
        })
    }

    modal1 = () => {
        return(
            <Modal 
                animationType = {"fade"}
                transparent = {false}
                visible = {this.state.solve}
            >
                <View style = {styles.modalContainer}>
                    <ScrollView 
                        style = {{
                            width : "100%",
                        }}
                    >
                        <View
                            style = {{
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >

                            <Text style = {styles.ModalTitle2}>
                                {this.state.Value1}
                            </Text>

                            {/*1*/}
                            <Text style = {styles.Subtitle}>
                                {this.state.Withouth1}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Formula1}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1FirstStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1SecoundStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1ThirdStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1FourthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1FifthStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value1SixthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1SeventhStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value1EightStep}
                            </Text>

                            {/*2*/}
                            <Text style = {styles.Subtitle}>
                                {this.state.Withouth2}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Formula2}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2FirstStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2SecoundStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2ThirdStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2FourthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2FifthStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value2SixthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2SeventhStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value2EightStep}
                            </Text>

                            {/*3*/}
                            <Text style = {styles.Subtitle}>
                                {this.state.Withouth3}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Formula3}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value3FirstStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value3SecoundStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value3ThirdStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value3FourthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value3FifthStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value3SixthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value3SeventhStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value3EightStep}
                            </Text>

                            {/*4*/}
                            <Text style = {styles.ModalText}>
                                {this.state.Formula4}
                            </Text>
                            <Text style = {styles.Subtitle}>
                                {this.state.Withouth4}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value4FirstStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value4SecoundStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value4ThirdStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value4FourthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value4FifthStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value4SixthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value4SeventhStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value4EightStep}
                            </Text>
                            <TouchableOpacity 
                                style = {styles.button}
                                onPress = {() => {
                                    this.hideModal()
                                }}
                            >
                                <Text style = {styles.buttonText}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    
    modal2 = () => {
        return(
            <Modal 
                animationType = {"fade"}
                transparent = {false}
                visible = {this.state.solve}
            >
                <View style = {styles.modalContainer}>
                    <ScrollView 
                        style = {{
                            width : "100%",
                        }}
                    >
                        <View
                            style = {{
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text style = {styles.ModalTitle2}>
                                {this.state.Value1}
                            </Text>
                            <Text style = {styles.Subtitle}>
                                {this.state.Formula1}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1FirstStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1SecoundStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1ThirdStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1FourthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value1FifthStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value1SixthStep}
                            </Text>

                            {/*2*/}
                            <Text style = {styles.ModalTitle2}>
                                {this.state.Value2}
                            </Text>
                            <Text style = {styles.ModalSubtitle}>
                                {this.state.Formula2}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2FirstStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2SecoundStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2ThirdStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2FourthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2FifthStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value2SixthStep}
                            </Text>
                            <Text style = {styles.ModalText}>
                                {this.state.Value2SeventhStep}
                            </Text>                    
                            <Text style = {styles.ModalText}>
                                {this.state.Value2EightStep}
                            </Text>
                            <TouchableOpacity 
                                style = {styles.button}
                                onPress = {() => {
                                    this.hideModal()
                                }}
                            >
                                <Text style = {styles.buttonText}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    SelectEq = (code) => {
        var code = code
        if (code == 1) {
            this.EqCode1()
        }
        else if (code == 2) {
            this.EqCode2()
        }
        else if (code == 3) {
            this.EqCode3()
        }
        else if (code == 4) {
            this.EqCode4()
        }
        else if (code == 5) {
            this.EqCode5()
        }
        else if (code == 6) {
            this.EqCode6()
        }
        else if (code == 7) {
            this.EqCode7()
        }
        else if (code == 8) {
            this.EqCode8()
        }
        else if (code == 9) {
            this.EqCode9()
        }
        else if (code == 10) {
            this.EqCode10()
        }
        else if (code == 11) {
            this.EqCode11()
        }
        else if (code == 12) {
            this.EqCode12()
        }
        else if (code == 13) {
            this.EqCode13()
        }
        else if (code == 14) {
            this.EqCode14()
        }
        else if (code == 15) {
            this.EqCode15()
        }
    }

    EqCode1 = () => {

        var blank1 = "Acceleration" + this.state.Exponent
        console.log(blank1, this.state.Exponent)
        //Initial velocity, Final Velocity, Time
        this.setState({
            Values4: false,
            Value1: blank1,
            Value2: "Displacement",
            Placeholder1: "Initial Velocity(m/s)",
            Placeholder2: "Final Velocity(m/s)",
            Placeholder3: "Time(s)",
        })

        var Solve = this.state.solve

        if(Solve === true){

            //Taking inputs
            var u = this.state.Input1
            var v = this.state.Input2
            var t = this.state.Input3

            //Acceleration
            var Val1A = v - u
            var Val2A = Val1A / t
            var Val2A = Val2A.toPrecision(3)

            var FirstStep = "v = u + at"
            var SecoundStep = v + " = " + u + " + " + t + "a"
            var ThirdStep = v + " - " + u + " = " + t + "a"

            var FourthStep = Val1A + " = " + t + "a"
            var FifthStep = Val1A + " / " + t + " = a"
            var Val2A = Val1A / t
            var Val2A = Val2A.toPrecision(3)
            var SixthStep = "a = " + Val2A + "m/s/s"
            this.setState({
                Value1FirstStep : FirstStep,
                Value1SecoundStep : SecoundStep,
                Value1ThirdStep : ThirdStep,
                Value1FourthStep : FourthStep,
                Value1FifthStep : FifthStep,
                Value1SixthStep : SixthStep,
                Formula1: "v = u + at"
            })

            //Displacement
        }
        
            
    }
    EqCode2 = () => {
        //Initial velocity, Final Velocity, Acceleration
    }
    EqCode3 = () => {
        //Initial velocity, Final Velocity, Displacement
    }
    EqCode4 = () => {
        //Initial velocity, Acceleration, Displacement
    }
    EqCode5 = () => {
        //Initial velocity, Time, Displacement
    }
    EqCode6 = () => {
        //Initial velocity, Acceleration, Time
    }
    EqCode7 = () => {
        //Displacement, Final Velocity, Time
    }
    EqCode8 = () => {
        //Acceleration, Final Velocity, Time
    }
    EqCode9 = () => {
        //Diplacement, Final Velocity, Acceleration
    }
    EqCode10 = () => {
        //Displacement, Acceleration, Time
    }
    EqCode11 = () => {
        //Initial velocity
        this.setState({
            Values4: true,
            Value1: "Initial Velocity",
            Placeholder1: "Final Velocity(m/s)",
            Placeholder2: "Time(s)",
            Placeholder3: "Displacement(m)",
            Placeholder4: "Acceleration(m/s/s)",
            Value1FirstStep : 1,
            Value1SecoundStep : 1,
            Value1ThirdStep : 1,
            Value1FourthStep : 1,
            Value1FifthStep : 1,
            Value1SixthStep : 1,
            Value1SeventhStep : 1,
            Value1EightStep : 1,

            Value2FirstStep : 1,
            Value2SecoundStep : 1,
            Value2ThirdStep : 1,
            Value2FourthStep : 1,
            Value2FifthStep : 1,
            Value2SixthStep : 1,
            Value2SeventhStep : 1,
            Value2EightStep : 1,

            Value3FirstStep : 1,
            Value3SecoundStep : 1,
            Value3ThirdStep : 1,
            Value3FourthStep : 1,
            Value3FifthStep : 1,
            Value3SixthStep : 1,
            Value3SeventhStep : 1,
            Value3EightStep : 1,

            Value4FirstStep : 1,
            Value4SecoundStep : 1,
            Value4ThirdStep : 1,
            Value4FourthStep : 1,
            Value4FifthStep : 1,
            Value4SixthStep : 1,
            Value4SeventhStep : 1,
            Value4EightStep : 1,

            Withouth1: 1,
            Withouth2: 1,
            Withouth3: 1,
            Withouth4: 1,
        })
    }
    EqCode12 = () => {
        //Final Velocity
    }
    EqCode13 = () => {
        //Time
    }
    EqCode14 = () => {
        //Acceleration
    }
    EqCode15 = () => {
        //Displacement
    }

    componentDidMount = async () => {
        await this.InitialiseEqCode()
        var Exponent = "2"
        this.setState({
            Exponent: Exponent.sup()
        })
        this.SelectEq(this.state.EqCode)
    }

    render() {
        return(
            <View>
                <Header
                    leftComponent = {
                        <Icon
                            name = "arrow-left"
                            type = "feather"
                            color = "#696969"
                            onPress = {() => {
                                this.props.navigation.navigate("MotionScreen")
                            }}
                            size = {40}
                        />   
                    }
                    centerComponent = {{
                        text: "Enter your Values",
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
                {
                    this.state.Values4 === true?(
                        <View style = {styles.container}>
                            {this.modal1()}
                            <Text style = {styles.title4}>
                                {this.state.Value1}
                            </Text>
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder1} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input1}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input1: text
                                    })
                                }}
                            />
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder2} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input2}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input2: text
                                    })
                                }}
                            />
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder3} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input3}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input3: text
                                    })
                                }}
                            />
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder4} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input4}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input4: text
                                    })
                                }}
                            />
                            <TouchableOpacity 
                                style = {styles.button}
                                onPress = {()=> {
                                    this.setState({
                                        solve: true
                                    })
                                    this.SelectEq(this.state.EqCode)
                                }}
                            >
                                <Text style = {styles.buttonText}>
                                    Solve
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                    :
                    (
                        <View style = {styles.container}>
                            {this.modal2()}
                            <Text style = {styles.title3}>
                                {this.state.Value1}
                            </Text>
                            <Text style = {styles.title4}>
                                {this.state.Value2}
                            </Text>
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder1} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input1}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input1: text
                                    })
                                }}
                            />
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder2} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input2}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input2: text
                                    })
                                }}
                            />
                            <TextInput 
                                style = {styles.inputBox} 
                                placeholder = {this.state.Placeholder3} 
                                keyboardType = {'numeric'} 
                                value = {this.state.Input3}
                                onChangeText = {(text) => {
                                    this.setState({
                                        Input3: text
                                    })
                                }}
                            />
                            <TouchableOpacity 
                                style = {styles.button}
                                onPress = { async ()=> {
                                    await this.setSolveTrue()
                                    this.SelectEq(this.state.EqCode)
                                }}
                            >
                                <Text style = {styles.buttonText}>
                                    Solve
                                </Text>
                            </TouchableOpacity>
                        
                        </View>
                    )
                }
            </View>
        )
    }

    setSolveTrue = async () => {
        this.setState({
            solve: true
        })
    }
}

var styles = StyleSheet.create({
    container : { 
        flex:1,
        alignItems: "center",
        paddingTop: 50
    }, 
    title4 :{
        fontSize:25,
        paddingBottom:60,
        color : '#451E5D'
    },
    title3 :{
        fontSize:25,
        paddingBottom:20,
        color : '#451E5D'
    },
    Subtitle: {
        fontSize:25,
        color : '#451E5D',
        paddingBottom: 20
    },
    ModalTitle :{
        fontSize:45,
        paddingBottom:10,
        color : '#451E5D'
    },
    ModalTitle2 :{
        fontSize:45,
        paddingBottom:30,
        color : '#451E5D'
    },
    ModalText: {
        fontSize:15,
        paddingBottom:5,
        color : '#C89CE4'
    },
    button :{
        width:350,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:70,
        backgroundColor: '#451E5D'
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
    inputBox:{
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