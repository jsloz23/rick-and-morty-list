import React, { FC, useState } from 'react'
import { StyledOptionsContainer, StyledFilterBoxContainer, RadioButtonsContainer } from './FilterBox.styles'
import { Button } from '../Button/Button'
import RadioButton from '../RadioButton/RadioButton'
import BackArrow from '../../assets/images/backArrow.svg'

interface FilterBoxProps {
  applyBoxFilter: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, filterCharacter: string, filterSpecie: string, filterFromAtoZ: string) => void
  setShowFilterBox: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterBox: FC<FilterBoxProps> = ({applyBoxFilter, setShowFilterBox}) => {
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");
  const [filterFromAtoZ, setFilterFromAtoZ] = useState("")

  return (
    <StyledFilterBoxContainer>
        <div className='flex flex-row justify-between items-center pt-4 pr-6 pb-4 pl-4 w-full h-16 mt-4 md:hidden'>
          <img src={BackArrow} alt='back-arrow' onClick={() => {setShowFilterBox(false)}}/>
           <h3 className='text-base leading-6 font-semibold text-gray-900'>Filters</h3>
           <br></br>
        </div>
        <StyledOptionsContainer>
            <h2>Character</h2>
            <RadioButtonsContainer>
              <RadioButton name='filterCharacter' value='All' onChange={e => setFilterCharacter(e.target.value)}/>
              <RadioButton name='filterCharacter' value={'Starred'} onChange={e => setFilterCharacter(e.target.value)}/>
              <RadioButton name='filterCharacter' value={'Others'} onChange={e => setFilterCharacter(e.target.value)}/>
            </RadioButtonsContainer>
        </StyledOptionsContainer>
        <StyledOptionsContainer>
            <h2>Specie</h2>
            <RadioButtonsContainer>
              <RadioButton name='filterSpecie' value={'All'} onChange={e => setFilterSpecie(e.target.value)}/>
              <RadioButton name='filterSpecie' value={'Human'} onChange={e => setFilterSpecie(e.target.value)}/>
              <RadioButton name='filterSpecie' value={'Alien'} onChange={e => setFilterSpecie(e.target.value)}/>
            </RadioButtonsContainer>
        </StyledOptionsContainer>
        <StyledOptionsContainer>
            <h2>Alphabetic Sort</h2>
            <RadioButtonsContainer>
              <RadioButton name='filterAtoZ' value={'All'} onChange={e => setFilterFromAtoZ(e.target.value)}/>
              <RadioButton name='filterAtoZ' value={'A-Z'} onChange={e => setFilterFromAtoZ(e.target.value)}/>
              <RadioButton name='filterAtoZ' value={'Z-A'} onChange={e => setFilterFromAtoZ(e.target.value)}/>
            </RadioButtonsContainer>
        </StyledOptionsContainer>
        <Button onClick={(e) => {applyBoxFilter(e, filterCharacter, filterSpecie, filterFromAtoZ)}}>Filter</Button>
    </StyledFilterBoxContainer>
  )
}

export default FilterBox

          