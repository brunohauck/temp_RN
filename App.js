import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  Event,
  Dashboard,
  UserProperty,
  CustomAppInbox,
  NativeDisplay
} from './src/screens'
const CleverTap = require('clevertap-react-native');

const Stack = createStackNavigator()


class App extends React.Component {
  constructor(props) {
    super(props);}
  componentDidMount(){
    CleverTap.initializeInbox();
    };
    render(){
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="UserProperty" component={UserProperty} />
         <Stack.Screen name="CustomAppInbox" component={CustomAppInbox} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
}
export default App;