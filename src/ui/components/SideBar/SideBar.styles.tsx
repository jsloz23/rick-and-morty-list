import tw from "twin.macro";
import styled from "styled-components";

export const StyledSideBar = styled.div.attrs({
    className: "StyledSideBar"
})`
    ${tw`relative w-full lg:(w-[375px] h-screen)`}
    backdrop-filter: blur(10px);

    h1 {
        ${tw`text-2xl leading-8 font-bold text-primary-50`}
    }
    .titleDiv {
        ${tw`mt-[41px] mb-[16px] mx-6 text-left`}
    }
`

export const StyledFilters = styled.div.attrs({
    className: "StyledFilters"
})`
${tw`flex flex-row justify-between items-center gap-3 w-full h-6 px-9 pt-8 pb-4`}
.results {
    ${tw`text-base leading-6 font-semibold text-[#2563EB]`}
}
.filterContainer {
    ${tw`flex justify-center items-center py-0.5 px-3 w-20 h-6 rounded-xl`}
    background: rgba(99, 216, 56, 0.2);
}
.filters {
    ${tw`text-sm leading-5 font-semibold text-[#3B8520]`}
}
`