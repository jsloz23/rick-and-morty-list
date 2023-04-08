import tw from "twin.macro";
import styled from "styled-components";

export interface StyledRadioButtonProps {
    value: string;
  }

export const StyledRadioButton = styled.input.attrs((props) => ({
    className: props.className,
  }))<StyledRadioButtonProps>`
${tw`appearance-none border border-solid border-gray-200 w-24 h-11 rounded-lg text-sm leading-5 font-semibold`}
&:after {
    ${({ value }) =>
    value && `content: '${value}';`}

    ${tw`h-full flex items-center justify-center`}
}
&:checked {
    ${tw`bg-primary-100 text-primary-600 border-none`}
}
`


/**${tw`flex justify-center items-center py-[17px] px-[10px] gap-3 w-[102px] h-[44px] bg-[#EEE3FF] rounded-lg`}**/