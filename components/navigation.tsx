import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../screens/profile";
import agents from "../screens/agents";
import Scan from "../screens/scan";

import Login from "../screens/login";
import routes from "../lib/util/routes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator initialRouteName={routes.agents}>
            <Tab.Screen options={{ headerShown: false }} name={routes.agents} component={agents} />
            <Tab.Screen options={{ headerShown: false }} name={routes.profile} component={Profile} />
            <Tab.Screen options={{ headerShown: false }} name={routes.scan} component={Scan} />
        </Tab.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routes.login}
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
                    component={
                        HomeTab
                    }
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
