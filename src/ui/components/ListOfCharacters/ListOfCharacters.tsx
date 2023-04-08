import React, { FC } from 'react'
import { StyledListOfCharacters } from './ListOfCharacters.styles'
import CharacterCard from '../CharacterCard/CharacterCard'
import { CharacterProps } from '../../viewAppModel';

interface ListOfCharactersProps {
  title: string;
  characters?: Array<CharacterProps>;
  starredCharacters?: Array<CharacterProps>;
  addFavoriteCharacter?: (id: string) => void
  heartColor: string;
  borderColor: string;
  filterText: string;
  speciesFilter: string;
  selectCharacter: (id: string) => void
}

const ListOfCharacters: FC<ListOfCharactersProps> = ({title, characters, starredCharacters, addFavoriteCharacter, heartColor, borderColor, 
  filterText, speciesFilter, selectCharacter}) => {
  
  return (
    <StyledListOfCharacters>
      <div className='characterListTitle'>
        <h2>{title}</h2>
      </div>
      
      {characters && characters.filter(character => character.name.toLocaleLowerCase().trim().includes(filterText.toLocaleLowerCase().trim())).filter(character => speciesFilter !== '' ? character.species === speciesFilter : character).map((character: { id: string; name: string; species: string; image: string; }) => 
        <CharacterCard key={character.id} id={character.id} name={character.name} species={character.species} image={character.image} 
        addFavoriteCharacter={addFavoriteCharacter} heartColor={heartColor} borderColor={borderColor} selectCharacter={selectCharacter} 
        /> 
      )}
    
    </StyledListOfCharacters>
  )
}

export default ListOfCharacters

