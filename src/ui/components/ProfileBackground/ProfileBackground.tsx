import React, { FC, useState } from 'react'
import { StyledInfoBodyContainer, StyledInfoHeaderContainer, StyledProfileBackgorundContainer } from './ProfileBackground.styles'
import avatarImage from "../../assets/images/Avatar.png"
import { useProfileBackgroundViewModel } from '../../viewModels'
import { CharacterProps } from '../../viewAppModel';
import { Button } from '../Button/Button';
import BackArrow from '../../assets/images/backArrow.svg'

interface ProfileBackgroundProps {
  characters: Array<CharacterProps>;
  starredCharacters: Array<CharacterProps>;
  setClickedCharacter: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCharacter: (id: string) => void;
}

const ProfileBackground: FC<ProfileBackgroundProps> = ({characters, starredCharacters, setClickedCharacter, deleteCharacter}) => {
  const {id, addComment, comment} = useProfileBackgroundViewModel()
  const [tempCommentary, setTempComentary]= useState('')
  return (
    <StyledProfileBackgorundContainer>
    {characters && characters.filter(character => character.id  === id).map(character =>
    <>
      <StyledInfoHeaderContainer>
      <div className='backArrow'>
        <img src={BackArrow} alt='back-arrow' onClick={() => {setClickedCharacter(false)}}/>
      </div>
      <div className='imageAndTitle'>
        <img
          width="75px"
          height="75px"
          src={character.image}
          alt="Character Icon"
          className='rounded-full'
        />
        <h3>{character.name}</h3>
        </div>
      </StyledInfoHeaderContainer>

      <StyledInfoBodyContainer>
          <h4>Specie</h4>
          <p>{character.species}</p>
          <hr className=" w-full opacity-50 border-spacing-1 border-gray-500 my-4" />
          <h4>Status</h4>
          <p>{character.status}</p>
          <hr className=" w-full opacity-50 border-spacing-1 border-gray-500 my-4" />
          <h4>ID</h4>
          <p>{character.id}</p>
          <h4 className='mt-2'>Comment</h4>
          {comment.map(comm => <p>{comm}</p>)}
          <textarea onChange={(e) => {setTempComentary(e.target.value)}} value={tempCommentary}/>
          <div className='flex flex-row justify-between w-full'>
          <Button onClick={() => {addComment(tempCommentary, setTempComentary)}}>Submit</Button>
          <button onClick={() => {id && deleteCharacter(id)}} className='bg-red-400 rounded-lg h-9 text-white'>Delete</button>
          </div>
      </StyledInfoBodyContainer>
    </>
    )}

{starredCharacters && starredCharacters.filter(character => character.id  === id).map(character =>
    <>
      <StyledInfoHeaderContainer>
      <div className='imageAndTitle'>
        <img
          width="75px"
          height="75px"
          src={character.image}
          alt="Character Icon"
          className='rounded-full'
        />
        <h3>{character.name}</h3>
        </div>
      </StyledInfoHeaderContainer>

      <StyledInfoBodyContainer>
          <h4>Specie</h4>
          <p>{character.species}</p>
          <hr className=" w-full opacity-50 border-spacing-1 border-gray-500 my-4" />
          <h4>Status</h4>
          <p>{character.status}</p>
          <hr className=" w-full opacity-50 border-spacing-1 border-gray-500 my-4" />
          <h4>ID</h4>
          <p>{character.id}</p>
          <h4 className='mt-2'>Comment</h4>
          {comment.map(comm => <p>{comm}</p>)}
          <textarea onChange={(e) => {setTempComentary(e.target.value)}} value={tempCommentary}/>
          <div className='flex flex-row justify-between w-full'>
          <Button onClick={() => {addComment(tempCommentary, setTempComentary)}}>Submit</Button>
          <button onClick={() => {id && deleteCharacter(id)}} className='bg-red-400 rounded-lg h-9 text-white'>Delete</button>
          </div>
      </StyledInfoBodyContainer>
    </>
    )}
      
    </StyledProfileBackgorundContainer>
  )
}

export default ProfileBackground