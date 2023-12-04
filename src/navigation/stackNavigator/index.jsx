import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ItemDetails from "../../screens/itemDetails/index";
import Home from "../../screens/home/index";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";
import { styled } from "styled-components";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ toggleTheme, theme }) => {

    const moonName = () => {
        return theme === "default" ? "moon" : "moon-outline";
    };

    const moonColor = () => {
        return theme === "default" ? "#FFF" : "black";
    }

    const DarkModeText = styled.Text`
        font-family: QuicksandMedium;
    `

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitle: "Where in the world?",
                headerStyle: {
                    backgroundColor: "#F49E52",

                },
                headerTintColor: "#1B1C1E",
                headerTitleStyle: {
                    fontSize: 16,
                    fontFamily: "QuicksandMedium",
                }
            }}>
            <Stack.Screen
                name="Home"
                options={() => ({
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={toggleTheme}
                            style={
                                {
                                    flexDirection: "row",
                                    gap: 5,
                                }
                            }
                        >
                            <Ionicons name={moonName()} size={20} color={moonColor()} />
                            <DarkModeText>Dark Mode</DarkModeText>
                        </TouchableOpacity>
                    ),
                })}
                component={Home} />
            <Stack.Screen
                name="Details"
                options={() => ({
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={toggleTheme}
                            style={
                                {
                                    flexDirection: "row",
                                    gap: 5,
                                }
                            }
                        >
                            <Ionicons name={moonName()} size={17} color={moonColor()} />
                            <Text>Dark Mode</Text>
                        </TouchableOpacity>
                    ),
                })}
                component={ItemDetails} />
        </Stack.Navigator>
    )
}

export default StackNavigator;