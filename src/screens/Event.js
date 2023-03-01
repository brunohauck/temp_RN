import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import Background from '../components/Background'

const CleverTap = require('clevertap-react-native');

 const Event = ({navigation}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [input9, setInput9] = useState('');
  const [input10, setInput10] = useState('');
  
  const [headerInput, setHeaderInput] = useState('');

  const onSignUpPressed = () => {
    console.log(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, headerInput);
    // Add your logic here to submit the form data
    var evt = headerInput
    var ev1 = input1
    var evval1 = input2
   var ev2 = input3
    var evval2 = input4
    var ev3 = input5
    var evval3 = input6
   var ev4 = input7
    var evval4 = input8
    var ev5 = input9
    var evval5 = input10
  
    //var Date = input4
    
    //alert("Message"+input1);
    var props = {
    
      [input1]:  evval1,
      [ev2]: evval2,  
     [ev3]: evval3,
    [ev4]: evval4,
        [ev5]: evval5,
                        
}

CleverTap.recordEvent(evt,props)
  };

  return (
    <Background>
    <BackButton goBack={navigation.goBack} />

    <View style={styles.container}>
      <TextInput
        style={styles.headerInput}
        placeholder="Enter event name"
        value={headerInput}
        onChangeText={text => setHeaderInput(text)}
      />
      <View style={styles.formContainer}>
        <View style={styles.formRow}>
          <TextInput
            style={styles.formInput}
            placeholder="event prop 1"
            value={input1}
            onChangeText={text => setInput1(text)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Value in string"
            value={input2}
            onChangeText={text => setInput2(text)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.formInput}
            placeholder="event prop 2"
            value={input3}
            onChangeText={text => setInput3(text)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Value in integer"
            value={input4}
            onChangeText={text => setInput4(text)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.formInput}
            placeholder="event prop 3"
            value={input5}
            onChangeText={text => setInput5(text)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Value in float"
            value={input6}
            onChangeText={text => setInput6(text)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.formInput}
            placeholder="event prop 4"
            value={input7}
            onChangeText={text => setInput7(text)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Value in boolean"
            value={input8}
            onChangeText={text => setInput8(text)}
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.formInput}
            placeholder="event prop 5"
            value={input9}
            onChangeText={text => setInput9(text)}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Value in datetime"
            value={input10}
            onChangeText={text => setInput10(text)}
          />
        </View>
      </View>
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Submit
      </Button>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('StartScreen')}>
          <Text style={styles.link}>Back</Text>
        </TouchableOpacity>
</View>
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  headerInput: {
    width: '100%',
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  formContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  formInput: {
    width: '45%',
    height: 50,
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor:  'gray',
    borderRadius: 10,
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Event;
    
    
    
