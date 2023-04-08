import tw from "twin.macro";
import styled from "styled-components";

export const StyledFilterBoxContainer = styled.form.attrs({
    className: "StyledFilterBoxContainer"
})`
${tw`absolute z-50 top-0 bg-white flex flex-col items-center w-full h-full lg:(static pb-6 mx-4 mt-2 h-[400px] right-[1081px] top-[158px] rounded-md)`} /* absolute */
box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
Button {
    ${tw`mt-10 md:(mt-4)`}
}
`

export const StyledOptionsContainer = styled.div.attrs({
    className: "StyledOptionsContainer"
})`
${tw`flex flex-col items-center gap-y-2  w-[295px] h-[72px] mt-6 mb-2`}
h2 {
    ${tw`w-full text-left gap-1.5 text-sm leading-5 font-medium text-gray-500`}
}
`

export const RadioButtonsContainer = styled.div.attrs({
    className: "RadioButtonsContainer"
})`
${tw`flex gap-x-2`}
`