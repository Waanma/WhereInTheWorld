import styled from "styled-components"
import { useRoute } from "@react-navigation/native";
import { Image } from "react-native";

const ContentContainer = styled.ScrollView`
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background};
    `
const ImgContainer = styled.View`
        justify-content: center;
        align-items: center;
        padding-vertical: 10%;
        width: 100%;
    `
const TitleText = styled.Text`
        margin-left: 25px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
        font-size: 20px;
    `
const FirstDetails = styled.View`
        margin: 25px;
        gap: 5px;
    `
const SecondDetails = styled.View`
        margin: 25px;
        gap: 5px;
    `
const TextDetails = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: QuicksandMedium;
        ${(props) => props.padding && `
            padding-left: 50px;
            font-family: QuicksandBold;
        `}
    `
const BordersContainer = styled.View`
        width: 100%;
        align-items: center;
        flex-direction: column;
    `
const Border = styled.View`
        border: 1px solid;
        padding: 5px;
    `
const BorderTitle = styled.View`
    
    `
const BordersContent = styled.View`
        align-items: center;
    `
const Borders = styled.View`
        padding-horizontal: 10%;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px; 
    `
const ItemDetails = () => {
    const route = useRoute();
    const { itemData } = route.params;

    return (
        <ContentContainer>
            <ImgContainer>
                <Image
                    style={{ borderColor: "#212121", borderWidth: 2, borderRadius: 5, }}
                    source={{ uri: itemData.flags.png }}
                    width={300}
                    height={200}
                />
            </ImgContainer>
            <TitleText>
                <TextDetails padding>
                    {itemData.name.common}
                </TextDetails>
            </TitleText>
            <FirstDetails>
                <TextDetails>
                    Native Name: {itemData.name.official}
                </TextDetails>
                <TextDetails>
                    Population: {itemData.population}
                </TextDetails>
                <TextDetails>
                    Region: {itemData.region}
                </TextDetails>
                <TextDetails>
                    Sub Region: {itemData.subregion}
                </TextDetails>
            </FirstDetails>
            <SecondDetails>
                <TextDetails>
                    Top Level Domain: {itemData.tld}
                </TextDetails>
                <TextDetails>
                    Area: {itemData.area}
                </TextDetails>
            </SecondDetails>
            {Array.isArray(itemData.borders) && itemData.borders.length > 0 ? (
                <BordersContainer>
                    <BorderTitle>
                        <TextDetails>Borders</TextDetails>
                    </BorderTitle>
                    <Borders>
                        {itemData.borders.map((border, index) => (
                            <BordersContent key={index}>
                                <Border >
                                    <TextDetails>{border}</TextDetails>
                                </Border>
                            </BordersContent>
                        ))}
                    </Borders>
                </BordersContainer>
            ) : (
                <TextDetails padding>No borders</TextDetails>
            )}
        </ContentContainer >
    )
}
export default ItemDetails;