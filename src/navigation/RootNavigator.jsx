import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import InfoScreen from '../screens/InfoScreen';
import HomeNavigator from './HomeNavigator';
import { Ionicons } from '@expo/vector-icons';
export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    title: 'Home1',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="menu" color={color} size={size} />
                    )
                }}
            />

            <Tabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    title: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" color={color} size={size} />
                    )
                }}
            />
            
            <Tabs.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    title: 'Info',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="information-circle" color={color} size={size} />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}