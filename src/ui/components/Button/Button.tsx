import tw from "twin.macro";
import styled from "styled-components";

export const Button =  styled.button.attrs({
    className: "Button"
})`
${tw`flex flex-row justify-center items-center py-[9px] px-[17px] w-[295px] h-[38px] bg-[#8054C7] rounded-lg text-white`}
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
`