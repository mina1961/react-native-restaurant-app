import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import InfoScreen from '../screens/InfoScreen';
import HomeNavigator from './HomeNavigator';
export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();
    return (
       <Tabs.Navigator>
           <Tabs.Screen name="HomeTab" component={HomeNavigator} options={{ title: 'Home1', headerShown: false }}  />
           <Tabs.Screen name="CartTab" component={CartNavigator} options={{ title: 'Cart', headerShown: false }} />
           <Tabs.Screen name="Info" component={InfoScreen} />
       </Tabs.Navigator>
    );
}