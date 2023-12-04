import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar";
import SearchBar from "../searchBar/index";
import DropdownComponent from "../dropDown/index";
import Item from "../item/index";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

const HomePage = () => {

  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchText, setSearchText] = useState("");

  const Container = styled.View`
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 10px;
    background-color: ${({ theme }) => theme.colors.background};
  `
  const Input = styled.View`
    height: 10%;
    width: 70%;
  `
  const DropContainer = styled.View`
    width: 60%;
    display: flex;
  `
  const ItemContainer = styled.View`
  `

  return (
    <Animatable.View
      animation="fadeIn"
      duration={500}
    >
      <Container>
        <StatusBar hidden />
        <Input>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </Input>
        <DropContainer>
          <DropdownComponent
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </DropContainer>
        <ItemContainer>
          <Item selectedRegion={selectedRegion} searchText={searchText} />
        </ItemContainer>
      </Container >
    </Animatable.View>
  );
}
export default HomePage;