import React, { FC } from 'react'
import { StyledFilterBoxedButton, StyledSearchBarContainer, StyledSearchBarInput, StyledSearchIconContainer } from './SearchBar.styles'
import searchIcon from '../../assets/images/SearchIcon.svg' 
import filterBoxIcon from '../../assets/images/FilterBoxIcon.svg'
import FilterBoxActiveIcon from '../../assets/images/FilterBoxActiveIcon.svg' 

interface SearchBarProps {
  showFilterBox: boolean;
  changeFilterBoxStatus: (flag: boolean) => void
  applyFilter: (targetValue: string) => void
}
const SearchBar: FC<SearchBarProps> = ({changeFilterBoxStatus, showFilterBox, applyFilter}) => {
  return (
    <StyledSearchBarContainer>
      <StyledSearchIconContainer>
        <img
          width="25px"
          height="25px"
          src={searchIcon}
          alt="Input icon"
        />
      </StyledSearchIconContainer>
      <StyledSearchBarInput placeholder='Search or filter results' onChange={(e) => applyFilter(e.target.value)}/>
      <StyledFilterBoxedButton>
        <img
          width="50px"
          height="50px"
          src={showFilterBox ? FilterBoxActiveIcon : filterBoxIcon}
          alt="Input icon"
          onClick={() => {changeFilterBoxStatus(!showFilterBox)}}
        />
      </StyledFilterBoxedButton>
    </StyledSearchBarContainer>
  )
}

export default SearchBar