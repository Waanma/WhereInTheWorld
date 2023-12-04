import styled from "styled-components";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

const ItemContainer = styled.TouchableOpacity`
        background-color: #F6B379;
    `
const CountryImage = styled.Image`
        height: 200px;
        border-top-left-radius: 11px;
        border-top-right-radius: 11px;
    `
const TextContent = styled.Text`
        color: ${({ theme }) => theme.colors.text2};
        font-family: QuicksandMedium;
        padding-left: 10px;
        ${(props) => props.boldText && `
            font-weight: bold;
            font-size: 20px;        
            font-family: QuicksandBold;
            padding: 10px;
        `}
    `
const ItemCard = ({ item }) => {
    const navigation = useNavigation();

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 50,
                    width: 3,
                    backgroundColor: "transparent",
                }}
            />
        );
    };

    return (
        <Animatable.View
            animation="fadeIn"
            duration={1000}
        >
            <ItemContainer
                onPress={() => { navigation.navigate("Details", { itemData: item }) }}
                style={
                    {
                        borderWidth: 2,
                        height: 350,
                        borderColor: "#707070",
                        borderRadius: 15,
                        gap: 6,
                        width: 300,
                    }
                }>
                <CountryImage source={{ uri: item.flags.png }} />
                <TextContent boldText>
                    {item.name.common}
                </TextContent>
                <TextContent>
                    Capital: {item.capital}
                </TextContent>
                <TextContent>
                    Region: {item.region}
                </TextContent>
                <TextContent>
                    Population : {item.population}
                </TextContent>
            </ItemContainer>
        </Animatable.View>
    )
}

export default ItemCard;