import React from 'react'
import { StyledCharacterListContainer } from './characterList.styles'
import SideBar from '../../components/SideBar/SideBar'
import ProfileBackground from '../../components/ProfileBackground/ProfileBackground'
import { useViewAppModel } from '../../viewAppModel'

const CharacterList = () => {
  const {characters, starredCharacters, addFavoriteCharacter, showFilterBox, changeFilterBoxStatus, 
    applyFilter, filterText, applyBoxFilter, showCharacters, showStarredCharacters, speciesFilter,
  showFilters, numberOfFilters, selectCharacter, setShowFilterBox, clickedCharacter, setClickedCharacter, deleteCharacter} = useViewAppModel()
  return (
    <StyledCharacterListContainer>
      <SideBar characters={characters} starredCharacters={starredCharacters} addFavoriteCharacter={addFavoriteCharacter} 
      showFilterBox={showFilterBox} changeFilterBoxStatus={changeFilterBoxStatus} applyFilter={applyFilter} filterText={filterText}
      applyBoxFilter={applyBoxFilter} showCharacters={showCharacters} showStarredCharacters={showStarredCharacters} 
      speciesFilter={speciesFilter} showFilters={showFilters} numberOfFilters={numberOfFilters}
      selectCharacter={selectCharacter} setShowFilterBox={setShowFilterBox}/>
      {clickedCharacter &&
      <div className='absolute z-50 w-full h-full lg:w-0 flex justify-center'>
        <ProfileBackground characters={characters} starredCharacters={starredCharacters} setClickedCharacter={setClickedCharacter}
        deleteCharacter={deleteCharacter}/>
      </div>
      }
   
    </StyledCharacterListContainer>
  )
}

export default CharacterList