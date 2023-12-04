import styled from "styled-components";
import { useEffect, useState } from "react";
import countryApi from "../../api/base.api";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const Item = ({ selectedRegion, searchText }) => {

    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchCountry()
    }, [selectedRegion]);

    useEffect(() => {
        filterData();
    }, [searchText, allCountries]);

    const filterData = () => {
        const filtered = allCountries.filter(item =>
            item.name.common.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const fetchCountry = async () => {
        setLoading(true);
        try {
            let response;
            if (selectedRegion === "All") {
                response = await countryApi.get("all");
            } else {
                response = await countryApi.get(`region/${selectedRegion}`);
            }
            const allCountriesData = response.data;
            setAllCountries(allCountriesData);
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    }

    const Container = styled.View`
        height: 100%;
        width: 100%;
        align-items: center;
    `
    const CountryFlatList = styled.FlatList`
    `
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
            <Container>
                {
                    loading ?
                        <View style={{ position: "absolute", left: "50%" }}>
                            <ActivityIndicator
                                size={50}
                                style={{ marginLeft: -25 }}
                                animating={true}
                                color={"black"}
                            />
                        </View>
                        :

                        <CountryFlatList
                            data={filteredData}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.renderSeparator}
                            renderItem={({ item }) => (
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
                            )}
                        />
                }
            </Container>
        </Animatable.View>
    )
}

export default Item;