import tw from "twin.macro";
import styled from "styled-components";

export const StyledListOfCharacters = styled.div.attrs({
    className: "StyledListOfCharacters"
})`
    ${tw``}
    .characterListTitle{
        ${tw`flex flex-row items-start py-0 h-full my-6 mx-4`}
    }
    h2{
        ${tw`text-xs leading-4 font-semibold tracking-wider uppercase text-gray-500 text-left`}
    }
`