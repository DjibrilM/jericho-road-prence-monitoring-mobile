import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import Profile from "../screens/profile";
import agents from "../screens/agents";
import Scan from "../screens/scan";

import Login from "../screens/login";
import routes from "../lib/util/routes";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: Platform.OS == 'android' ? 60 : 85
                },
                tabBarLabelStyle: {
                    position: "relative",
                    bottom: 10
                },
                tabBarInactiveTintColor: "#8e8e8e",
                tabBarActiveTintColor: "#5a8dfe",
            }}
            initialRouteName={routes.agents}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Octicons name="people" size={24} color={color} />
                    ),
                }}
                name={routes.agents}
                component={agents}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <Ionicons style={{ position: "relative", top: 5 }} name="scan" size={30} color={color} />
                    ),
                }}
                name={routes.scan}
                component={Scan}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="person-outline" size={24} color={color} />
                    ),
                }}
                name={routes.profile}
                component={Profile}
            />
        </Tab.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routes.home}
                screenOptions={{
                    contentStyle: {
                        backgroundColor: "#f1f5f9",
                    },
                }}
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={routes.home}
                    component={HomeTab}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name={routes.login}
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
