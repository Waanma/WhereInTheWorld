import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetails from "../../screens/itemDetails/index";
import Home from "../../screens/home/index";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "styled-components";
import { useStore } from "../../store/appStore";
import { useEffect } from "react";

const DarkModeText = styled.Text`
        font-family: QuicksandMedium;
    `
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { theme, changeTheme, initializeTheme } = useStore();

    useEffect(() => {
        initializeTheme();
    }, [initializeTheme]);

    const moonName = () => {
        return theme === "default" ? "moon" : "moon-outline";
    };
    const moonColor = () => {
        return theme === "dark" ? "#FFF" : "#000000";
    }

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
                            onPress={changeTheme}
                            style={
                                {
                                    flexDirection: "row",
                                    gap: 5,
                                }
                            }
                        >
                            <Ionicons name={moonName()} size={20} color={moonColor()} />
                            <DarkModeText>
                                {theme === "default" ? "Dark mode" : "Light mode"}
                            </DarkModeText>
                        </TouchableOpacity>
                    ),
                })}
                component={Home} />
            <Stack.Screen
                name="Details"
                options={() => ({
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={changeTheme}
                            style={
                                {
                                    flexDirection: "row",
                                    gap: 5,
                                }
                            }
                        >
                            <Ionicons name={moonName()} size={17} color={moonColor()} />
                            <DarkModeText>
                                {theme === "default" ? "Dark mode" : "Light mode"}
                            </DarkModeText>
                        </TouchableOpacity>
                    ),
                })}
                component={ItemDetails} />
        </Stack.Navigator>
    )
}

export default StackNavigator;