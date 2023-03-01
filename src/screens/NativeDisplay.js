import React, { Component } from 'react';
const CleverTap = require('clevertap-react-native');

import { Button, View,Image ,Text,StyleSheet,TextInput ,TouchableOpacity, TouchableWithoutFeedbackBase,FlatList} from 'react-native';
//import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            identity:'',
            name:'',
            response:[],
            data:[],
            dataSource:[{"img1":"https://image.shutterstock.com/image-vector/vector-red-default-stamp-isolated-260nw-1738700144.jpg","cta1":"www.default.com","text1":"Default User","img2":"https://image.shutterstock.com/image-vector/vector-red-default-stamp-isolated-260nw-1738700144.jpg","cta2":"www.default2.com"},{"img1":"https://image.shutterstock.com/image-vector/vector-red-default-stamp-isolated-260nw-1738700144.jpg","cta1":"www.default.com","text1":"Default User","img2":"https://image.shutterstock.com/image-vector/vector-red-default-stamp-isolated-260nw-1738700144.jpg","cta2":"www.default2.com"}]
            
        };
        //...whatever construction you need
      }

      componentDidMount() {
        CleverTap.setDebugLevel(3);
        CleverTap.enablePersonalization();
        this.getAllDisplayUnits();
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
        //   dataSource: responseJson
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

      //function for onuserlogin
      loginpress(){
        CleverTap.onUserLogin({ 'Name': this.state.name, 'Identity': this.state.identity, 'Email': this.state.email, 'Phone': '+916281919001', 'Gender': 'M','Customer-Type':'Platinum','birthdate': new Date('2020-03-03T06:35:31'), 'MSG-push': true ,'MSG-email' : true,
        'MSG-sms' : true,
        'MSG-whatsapp' : true})
      
      this.props.navigation.navigate('Home')
    console.log("email is"+this.state.email+"identity is"+this.state.identity)
    }
    getAllDisplayUnits = () => {
    
        CleverTap.getAllDisplayUnits((err, res) => {
          this.setState({ response: JSON.parse(res)})
    //      this.setState({ data: JSON.parse(res.custom_kv)})

            console.log("DATA IS"+this.state.response.custom_kv.data)
        this.setState({ data: JSON.parse(this.state.response.custom_kv.data)})
            console.log("data IS"+this.state.response.custom_kv.data)

    
          //NotificationViewed for Native Display
          CleverTap.pushDisplayUnitViewedEventForID(this.state.nativekey);
    
        });
    
      };
    
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#fff'}}>
      <Text style={{paddingTop:30}}>Welcome to Native Display</Text>
      <View style={{padding:20}}>
      <FlatList
      padding ={20}
      showsHorizontalScrollIndicator={true}

         data={this.state.data}
         renderItem={({item}) => 
         <View style={{height:150,width:500}}>
            <Image
          style={{width:200,height:20,padding:20,paddingBottom:20 }}
          source={{uri:item.img1}}
      />
         <Text style={{fontSize:20}}>{item.text1}</Text>
         <Text style={{fontSize:20,paddingTop:20}}>CTA LINK {item.cta1}</Text>

         <View style={{height: 1,backgroundColor:'gray'}}></View>
         </View>
        }
       />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: '#000',
    },
    link: {
      fontWeight: 'bold',
      color:'#000',
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5,
        borderColor: '#000',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,elevation:5
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
        height: 400
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18,
        color: '#000'
    },
    email: {
        color: 'red'
    }
  })
export default Display;