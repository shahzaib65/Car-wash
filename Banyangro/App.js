
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import Subscription from './screens/Subscription';
import Booking from './screens/Booking';
import HatchBack from './screens/HatchBack';
import Suv from './screens/Suv';
import Sedan from './screens/Sedan';
import Carpet from './screens/Carpet';
import Sofa from './screens/Sofa';
import Dashboard from './screens/Dashboard';
import AccountPage from './screens/AccountPage';
import Billing from './screens/Billing';
import Normalwash from './screens/Normalwash';
import CarDetailing from './screens/CarDetailing';
import FoamCarwash from './screens/FoamCarwash';
function App() {
return(
  <NavigationContainer>
  <Stack.Navigator>

  <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
  <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
  <Stack.Screen options={{headerShown: false}} name="normal" component={Normalwash} />
  <Stack.Screen options={{headerShown: false}} name="foam" component={FoamCarwash} />
  <Stack.Screen options={{headerShown: false}} name="detailing" component={CarDetailing} />
  <Stack.Screen options={{headerShown: false}} name="Account" component={AccountPage} />
  <Stack.Screen options={{headerShown: false}} name="Bill" component={Billing} />
  <Stack.Screen options={{headerShown: false}} name="HatchBack" component={HatchBack} />
  <Stack.Screen options={{headerShown: false}} name="SUV" component={Suv} />
  <Stack.Screen options={{headerShown: false}} name="SEDAN" component={Sedan} />
  <Stack.Screen options={{headerShown: false}} name="Carpet" component={Carpet} />
  <Stack.Screen options={{headerShown: false}} name="Sofa" component={Sofa} />
  <Stack.Screen options={{headerShown: false}} name="Booking" component={Booking} />
  <Stack.Screen options={{headerShown: false}} name="Subscription" component={Subscription} />
  <Stack.Screen options={{headerShown: false}} name='ResetPassword' component={ResetPassword}/>
  <Stack.Screen options={{headerShown: false}} name='ForgotPassword' component={ForgotPassword}/>
  <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
</NavigationContainer>
);
}

export default App;
