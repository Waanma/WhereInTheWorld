import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stackNavigator";

const Navigation = ({toggleTheme}) => {
    return (
        <NavigationContainer>
            <StackNavigator toggleTheme={toggleTheme}/>
        </NavigationContainer>
    )
}

export default Navigation;