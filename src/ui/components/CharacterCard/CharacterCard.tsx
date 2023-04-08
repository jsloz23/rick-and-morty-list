import React, { FC } from 'react'
import { StyledCharacterCard } from './CharacterCard.styles'
import { HeartIcon } from '../../assets/icons'
import { CharacterProps } from '../../viewAppModel';
import { Link, useLocation } from 'react-router-dom';

interface CharacterCardProps {
  name: string;
  species: string;
  image: string;
  id: string;
  addFavoriteCharacter?: (id: string) => void;
  starredCharacters?: Array<CharacterProps>;
  heartColor: string;
  borderColor: string;
  selectCharacter: (id: string) => void

}

const CharacterCard: FC<CharacterCardProps> = ({name, species, image, id, addFavoriteCharacter, starredCharacters, 
  heartColor, borderColor, selectCharacter}) => {
    const search = useLocation().search
    const urlId = new URLSearchParams(search).get('id');
  return (
   
    <div className='relative flex flex-col items-center'>
      <hr className="w-11/12 opacity-50 border-spacing-1 border-gray-500 " />
      <StyledCharacterCard  onClick={() => {selectCharacter(id)}} className={urlId === id ?`bg-primary-100` : ``}>
        <div>
          <img
            width="32px"
            height="32px"
            src={image}
            alt="Character Icon"
          />
        </div>
        <div className='characterInfo'>
          <h3>{name}</h3>
          <p>{species}</p>
        </div>
        <div>
          <HeartIcon className='cursor-pointer' fill={heartColor} color={borderColor} onClick={() => {addFavoriteCharacter && addFavoriteCharacter(id)}}/>
        </div>
      </StyledCharacterCard>
    </div>
  
  )
}

export default CharacterCard