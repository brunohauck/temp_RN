import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import NativeDisplay from './NativeDisplay'
import {View,TouchableOpacity, Text} from 'react-native'

const CleverTap = require('clevertap-react-native')

export default function StartScreen({ navigation }) {

  function AppInbox  ()  {
    CleverTap.addListener(CleverTap.CleverTapInboxDidInitialize, (event) => {
      _handleCleverTapInbox(CleverTap.CleverTapInboxDidInitialize, event);
  });

function _handleCleverTapInbox(eventName, event) {
  console.log('CleverTap Inbox Event - ', eventName, event);
  CleverTap.showInbox({
      'tabs': ['Offers', 'Promotions'],
      'navBarTitle': 'My App Inbox',
      'navBarTitleColor': '#FF0000',
      'navBarColor': '#FFFFFF',
      'inboxBackgroundColor': '#AED6F1',
      'backButtonColor': '#00FF00',
      'unselectedTabColor': '#0000FF',
      'selectedTabColor': '#FF0000',
      'selectedTabIndicatorColor': '#000000',
      'noMessageText': 'No message(s)',
      'noMessageTextColor': '#FF0000'
  });
}

  }
  getUnitID = () => {
    CleverTap.getDisplayUnitForId(this.state.nativekey, (err, res) => {
      console.log('Get Display Unit for Id:' + res);
      alert(`Get Display Unit for Id: ${res}`);
    });
  };
  goNativeDisplay =() =>{
    this.props.navigation.navigate('Display');
  }

  /*
  //Fetch Native Display Payload
  getAllDisplayUnits = () => {
    
    CleverTap.getAllDisplayUnits((err, res) => {
      console.log(`All Display Units:--- ${res}`);
      //  alert(`All Display Units: ${res}`);
      this.setState({ datasource: JSON.parse(res) })
      this.setState({ nativekey: this.state.datasource.wzrk_id }) //Store wzrk_id to use it as Unit_id  
      this.setState({ message: this.state.datasource.content[0].message.text, title: this.state.datasource.content[0].title.text })
      console.log("Unit ID is" + this.state.nativekey)

      //NotificationViewed for Native Display
      CleverTap.pushDisplayUnitViewedEventForID(this.state.nativekey);

    });
  };*/


  return (
    <Background>
    
   
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Identity Manangement
      </Button>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Event')}
      >
       Events
      </Button>

      <Button
        mode="contained"
        //onPress={() => navigation.navigate('LoginScreen')}
        onPress={(AppInbox)}>
        App Inbox
      </Button>
<Button
        mode="contained"
        onPress={() => navigation.navigate('CustomAppInbox')}
      >
        Custom App Inbox
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('NativeDisplay')}
      >
        Native Display
      </Button>
     
    <NativeDisplay title="Module" value="My Value" />
    <View style={{ width: 200, paddingTop: 30 }}>
          <Button title='Show Native Display'  onPress={() => this.getAllDisplayUnits()} />
          </View>
          <View style={{ width: 200, paddingTop: 30, flexDirection: 'row' }}>
            <Button title='Show Unit Display Payload'  onPress={() => this.getUnitID()} />
            <Text style={{ color: '#000000', fontSize: 15, paddingTop: 15,width:200 }}>Teste</Text>
          </View>
          <View style={{ width: 300, paddingTop: 30 }}>
            {/* Here render native display values */}



            {/* Push Notification Clicked Event for Native Display */}
            <TouchableOpacity style={{borderWidth:2}}onPress={() => CleverTap.pushDisplayUnitClickedEventForID(this.state.nativekey)}>

              <Text style={{ fontSize: 15, width: '100%', color: '#000000' }}>Native Titleee :- fdfds</Text>
              <Text style={{ fontSize: 15, width: '100%', color: '#000000' }}>Native Message :- fdsfds</Text>
            </TouchableOpacity>
          </View>
    </Background>
  )
}
