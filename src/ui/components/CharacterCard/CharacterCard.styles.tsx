import tw from "twin.macro";
import styled from "styled-components";

export interface StyledCharacterCardProps {
  className: string;
}

export const StyledCharacterCard = styled.div.attrs((props) => ({
    className: props.className,
  }))<StyledCharacterCardProps>`
${tw`flex flex-row items-center py-4 px-5 gap-4 w-11/12 h-[74px] mx-4 rounded-lg cursor-pointer`}

.characterInfo{
    ${tw`w-[207px] text-left text-base leading-6`}
}
h3 {
    ${tw`font-semibold text-[#111827]`}
}
p {
    ${tw`font-normal text-[#6B7280]`}
}
img {
    ${tw`rounded-[20px]`}
}
`