import tw from "twin.macro";
import styled from "styled-components";

export const StyledProfileBackgorundContainer = styled.div.attrs({
    className: "StyledProfileBackgorundContainer"
})`
    ${tw`w-full px-6 lg:(w-full px-0) bg-white`}
`   

export const StyledInfoHeaderContainer = styled.div.attrs({
    className: "StyledInfoHeaderContainer"
})`
${tw`flex flex-col items-center pt-10 w-full   lg:(px-[100px] pb-4 absolute w-[1065px] h-[171px] left-[375px] top-0 gap-y-2)`}
.imageAndTitle {
    ${tw`w-full lg:(w-[865px]) text-left`}
}
h3 {
    ${tw`text-2xl leading-8 font-bold text-gray-900`}
}
.backArrow {
    ${tw`w-full mb-4 lg:(hidden)`}
}
`   

export const StyledInfoBodyContainer = styled.div.attrs({
    className: "StyledInfoBodyContainer"
})`
    ${tw`flex flex-col items-center py-0 w-full   lg:(px-[100px] absolute w-[1065px] h-[400px] left-[375px] top-[171px]) text-left`}
    h4 {
        ${tw` font-semibold text-gray-900`}
    }
    p {
        ${tw`font-medium text-gray-500`}
    }
    h4, p {
        ${tw`w-full text-base leading-6`}
    }
    textarea {
        ${tw`w-full border-2`}
    }
    Button {
        ${tw`w-24 mt-2`}
    }
` 