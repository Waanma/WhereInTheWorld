import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components";
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = ({ searchText, setSearchText }) => {

    const SearchContainer = styled.View`
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #f8f8ff;
    `
    const ContentContainer = styled.View`
        display: flex;  
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
    `
    const SearchSvg = styled.View`
        width: 15%;
        justify-content: center;
        align-items: center;
    `
    const InputContainer = styled.View`
        display: flex;
        shadow-color: #000;
        shadow-offset: 1px 1px;
        shadow-opacity: 0.05;
        shadow-radius: 10px;
        elevation: 1;
    `
    const Input = styled.TextInput`
        width: 100%;
        height: 100%;
        color: black;
        font-size: 20px;
        padding: 10px;
        border-radius: 2px;
        font-family: "QuicksandMedium";
    `
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <SearchContainer>
                <ContentContainer>
                    <SearchSvg>
                        <Ionicons
                            name="search-outline"
                            size={30}
                        />
                    </SearchSvg>
                    <InputContainer >
                        <Input
                            placeholder="Search for a country....."
                            onChangeText={setSearchText}
                            value={searchText}
                        />
                    </InputContainer>
                </ContentContainer>
            </SearchContainer>
        </KeyboardAvoidingView>
    )
}

export default SearchBar;