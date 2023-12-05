import styled from "styled-components";
import { useEffect, useState } from "react";
import countryApi from "../../api/base.api";
import { ActivityIndicator, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import ItemCard from "../itemCard/index";

const NoResultsText = styled.Text`
    color: #fff;
    padding-top: 30px;
    font-family: QuicksandMedium;
`
const Container = styled.View`
        height: 100%;
        width: 100%;
        align-items: center;
    `
const CountryFlatList = styled.FlatList`
    `
const Item = ({ selectedRegion, searchText }) => {

    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(false);
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
                        filteredData.length === 0 ? (
                            <NoResultsText>Country not found</NoResultsText>
                        )
                            :
                            <CountryFlatList
                                data={filteredData}
                                showsVerticalScrollIndicator={false}
                                ItemSeparatorComponent={this.renderSeparator}
                                renderItem={({ item }) => (
                                    <ItemCard item={item} />
                                )}
                            />
                }
            </Container>
        </Animatable.View>
    )
}

export default Item;