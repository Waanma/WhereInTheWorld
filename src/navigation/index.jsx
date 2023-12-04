import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stackNavigator";

const Navigation = ({ changeTheme }) => {
    return (
        <NavigationContainer>
            <StackNavigator changeTheme={changeTheme} />
        </NavigationContainer>
    )
}

export default Navigation;