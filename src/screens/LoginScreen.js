import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

import DatePicker from 'react-native-datepicker'; 
//hj ,
const CleverTap = require('clevertap-react-native');


export default function LoginScreen({ navigation }) {
  const [em, setEmail] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');



  const [date, setDate] = useState(new Date());
  
 

 function onLoginPressed  ()  {

    var name = input1
    var identity = input2
   var email = em
    var phone = input3
    //var Date = input4
    var props = {
      'Name': name,                   // String
      'Identity': identity,                  // String or number
      'Email': email,                 // Email address of the user
      'Phone': phone ,                   // Phone (with the country code, starting with +) 
      //'DOB' : input4,   // Date of Birth. Set the Date object to the appropriate value first

// optional fields. controls whether the user will be sent email, push, etc.
      'MSG-email': true,                        // Disable email notifications
      'MSG-push': true,                          // Enable push notifications
      'MSG-sms': true,                          // Disable SMS notifications
      'MSG-whatsapp': true,                      // Enable WhatsApp notifications
      //'Stuff': myStuff                           //Array of Strings for user properties
}

CleverTap.onUserLogin(props)

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
 
<TextInput
        label="Name"
        returnKeyType="next"
        value={input1}
       onChangeText={(text) => setInput1(text)}
        autoCapitalize="none"
        textContentType="text"
      />
<TextInput
        label="Identity"
        returnKeyType="next"
        value={input2}
       onChangeText={(text) => setInput2(text)}
        autoCapitalize="none"
        textContentType="text"
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={em}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        //autoCompleteType="email"
        textContentType="text"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={input3}
       onChangeText={(text) =>setInput3(text)}
        autoCapitalize="none"
        textContentType="text"
        keyboardType="numeric"
      />
     

      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Click here to update user properties </Text>
        <TouchableOpacity onPress={() => navigation.replace('UserProperty')}>
          <Text style={styles.link}>Update</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
