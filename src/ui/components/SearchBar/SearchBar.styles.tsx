import tw from "twin.macro";
import styled from "styled-components";

export const StyledSearchBarContainer = styled.div.attrs({
    className: "StyledSearchBarContainer"
})`
${tw`flex flex-row`}
`

export const StyledSearchBarInput = styled.input.attrs({
    className: "StyledSearchBarInput"
})`
    ${tw`flex flex-row items-center outline-none w-52  left-6 lg:(py-[9px] pr-[7px] pl-[13px] gap-2 w-[327px] h-[38px]) bg-[#F3F4F6]`}
`

export const StyledSearchIconContainer = styled.div.attrs({
    className: "StyledSearchIconContainer",
})`
${tw`flex items-center bg-[#F3F4F6] ml-4 pl-5 rounded-l-lg`}
`

export const StyledFilterBoxedButton = styled.div.attrs({
className: "StyledFilterBoxedButton",
})`
${tw`flex items-center bg-[#F3F4F6] mr-4 pr-5 rounded-r-lg`}
img {
    ${tw`cursor-pointer`}
}
`