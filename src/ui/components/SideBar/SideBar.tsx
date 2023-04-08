import React, { FC } from 'react'
import { StyledFilters, StyledSideBar } from './SideBar.styles'
import SearchBar from '../SearchBar/SearchBar'
import ListOfCharacters from '../ListOfCharacters/ListOfCharacters'
import FilterBox from '../FilterBox/FilterBox'
import { CharacterProps } from '../../viewAppModel'

interface SideBarProps {
  characters: Array<CharacterProps>;
  starredCharacters: Array<CharacterProps>;
  addFavoriteCharacter: (id: string) => void;
  showFilterBox: boolean;
  changeFilterBoxStatus: (flag: boolean) => void
  applyFilter: (targetValue: string) => void
  filterText: string;
  applyBoxFilter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, filterCharacter: string, filterSpecie: string, filterFromAtoZ: string) => void
  showCharacters: boolean
  showStarredCharacters: boolean
  speciesFilter: string;
  showFilters: boolean;
  numberOfFilters: number;
  selectCharacter: (id: string) => void
  setShowFilterBox: React.Dispatch<React.SetStateAction<boolean>>

}

const SideBar: FC<SideBarProps> = ({characters, starredCharacters, addFavoriteCharacter, showFilterBox, 
  changeFilterBoxStatus, applyFilter, filterText, applyBoxFilter, showCharacters, showStarredCharacters, speciesFilter
  ,showFilters, numberOfFilters, selectCharacter, setShowFilterBox}) => {
  
  return (
    <StyledSideBar>
      <div className='titleDiv'>
        <h1>Rick and Morty list</h1>
      </div>
      <SearchBar changeFilterBoxStatus={changeFilterBoxStatus} showFilterBox={showFilterBox} applyFilter={applyFilter}/>
      {showFilterBox && <FilterBox applyBoxFilter={applyBoxFilter} setShowFilterBox={setShowFilterBox}/>}
      {showFilters && <StyledFilters>
        <p className='results'>{characters.length + starredCharacters.length} Results</p>
        <div className='filterContainer'>
          <p className='filters'>{numberOfFilters === 1 ? `${numberOfFilters} Filter` : `${numberOfFilters} Filters`}</p>
        </div>
      </StyledFilters>}
      <div>
        { starredCharacters.length > 0 && showStarredCharacters && <ListOfCharacters title={`STARRED CHARACTERS (${starredCharacters && starredCharacters.length})`} characters={starredCharacters} 
        addFavoriteCharacter={addFavoriteCharacter} heartColor={"#53C629"} borderColor={"#53C629"} filterText={filterText} 
        speciesFilter={speciesFilter} selectCharacter={selectCharacter} />}
      </div>
      <div>
        {showCharacters && <ListOfCharacters title={`CHARACTERS (${characters && characters.length})`} characters={characters} addFavoriteCharacter={addFavoriteCharacter} 
        heartColor={"#FFFFFF"} borderColor={"#D1D5DB"} filterText={filterText} speciesFilter={speciesFilter}
        selectCharacter={selectCharacter} />}
      </div>
    </StyledSideBar>
  )
}

export default SideBar