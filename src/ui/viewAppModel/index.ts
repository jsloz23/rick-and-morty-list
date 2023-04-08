import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface CharacterProps {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
  selected?: boolean;
}

const ALL_CHARACTERS = gql`
query getCharacters {
  characters{
    results{
      id
      name
      species
      status
      image
    }
  }
}
`

export function useViewAppModel() {
    const [characters, setCharacters] = useState<Array<CharacterProps>>([])
    const [starredCharacters, setStarredCharacters] = useState<Array<CharacterProps>>([])
    const [showFilterBox, setShowFilterBox] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');
    const [showCharacters, setShowCharacters] = useState(true);
    const [showStarredCharacters, setShowStarredCharacters] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [numberOfFilters, setNumberOfFilters] = useState(0);
    const [selectedCharacter, setSelectedCharacter] = useState<Array<CharacterProps>>([])
    const [clickedCharacter, setClickedCharacter] = useState(false)

    const navigate = useNavigate()
    
    const result = useQuery(ALL_CHARACTERS)
    
    useEffect(() => {
      setCharacters(result?.data?.characters?.results) 
    }, [result])

    const changeFilterBoxStatus = (flag: boolean) => {
      setShowFilterBox(flag)
    }

    const findElement = (id: string) => {
      const starredCharacter = starredCharacters.find(character => character.id === id);
      let flag = false;
      if(starredCharacter){
        flag = true
      }
      
      return flag
    }

    const addFavoriteCharacter = (id: string) => {

      const isTheCharacterStarred = findElement(id)

      if(isTheCharacterStarred === false){
        const newCharacters = characters.filter(character => character.id !== id)
        const newStarredCharacters = characters.filter(character => character.id === id)

        setCharacters(newCharacters)
        setStarredCharacters([...starredCharacters, {
          id: newStarredCharacters[0].id,
          name: newStarredCharacters[0].name,
          species: newStarredCharacters[0].species,
          status: newStarredCharacters[0].status,
          image: newStarredCharacters[0].image,
          selected: newStarredCharacters[0].selected
        }])
      }
      else{

        const newStarredCharacters = starredCharacters.filter(character => character.id !== id)
        const newCharacters = starredCharacters.filter(character => character.id === id)

        setStarredCharacters(newStarredCharacters)

        setCharacters([...characters, {
          id: newCharacters[0].id,
          name: newCharacters[0].name,
          species: newCharacters[0].species,
          status: newCharacters[0].status,
          image: newCharacters[0].image,
          selected: newStarredCharacters[0]?.selected
        }])
     
      }
      
    }

    const applyFilter = (targetValue: string) => {
      if(targetValue){
        setFilterText(targetValue);
      }
    }

    const sortFunction = (a: any, b: any) => {
      const nameA = a.name.toUpperCase(); 
      const nameB = b.name.toUpperCase();
      if(nameA < nameB){
        return -1
      }
      else if(nameA > nameB){
        return 1
      }
      return 0
    }

    const sortByID = (a: any, b: any) => {
      const idA = parseInt(a.id)
      const idB = parseInt(b.id)
      if(idA < idB){
        return -1
      }
      return 0
    }

    const applyBoxFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,filterCharacter: string, 
      filterSpecie: string, filterFromAtoZ: string) => {
      e.preventDefault()
      let numberFilters = 0;
      if(filterFromAtoZ === 'A-Z'){
        const arrayOfCharactersForSort = [...characters]
        const sortedCharacters = arrayOfCharactersForSort.sort((a,b) => sortFunction(a,b))

        const arrayOfStarredCharactersForSort = [...starredCharacters]
        const sortedStarredCharacters = arrayOfStarredCharactersForSort.sort((a,b) => sortFunction(a,b))

        setCharacters(sortedCharacters)
        setStarredCharacters(sortedStarredCharacters)
      } else if(filterFromAtoZ === 'Z-A'){
        const arrayOfCharactersForSort = [...characters]
        const sortedCharacters = arrayOfCharactersForSort.sort((b,a) => sortFunction(a,b))

        const arrayOfStarredCharactersForSort = [...starredCharacters]
        const sortedStarredCharacters = arrayOfStarredCharactersForSort.sort((b,a) => sortFunction(a,b))

        setCharacters(sortedCharacters)
        setStarredCharacters(sortedStarredCharacters)
      } else if(filterFromAtoZ === 'All'){
        const arrayOfCharactersForSort = [...characters]
        const sortedCharacters = arrayOfCharactersForSort.sort((a,b) => sortByID(a,b))
        setCharacters(sortedCharacters)
      }
      if(filterCharacter === 'All'){
        setShowCharacters(true)
        setShowStarredCharacters(true)
        setShowFilters(false)
        numberFilters = 0;
      }
      else if(filterCharacter === 'Starred'){
        setShowCharacters(false)
        setShowStarredCharacters(true)
        setShowFilters(true)
        numberFilters = numberFilters + 1;
      }
      else if(filterCharacter === 'Others'){
        setShowCharacters(true)
        setShowStarredCharacters(false)
        setShowFilters(true)
        numberFilters = numberFilters + 1;
      }

      if(filterSpecie=== 'Human' || filterSpecie === 'Alien'){
        setSpeciesFilter(filterSpecie)
        setShowFilters(true)
        numberFilters = numberFilters + 1;
      }
      else{
        setSpeciesFilter('')
      }
      setShowFilterBox(false)
      setNumberOfFilters(numberFilters);
      
    }

    const selectCharacter = (id: string) => {
      const tempCharacter = characters.filter(character => character.id === id)
      setClickedCharacter(true)
      setSelectedCharacter(tempCharacter)
      navigate(`/character?id=${id}`)
    }

    const deleteCharacter = (id: string) => {
      const tempCharacters = characters.filter(character => character.id !== id);
      const tempStarredCharacters = starredCharacters.filter(character => character.id !== id);
      setCharacters(tempCharacters)
      setStarredCharacters(tempStarredCharacters)
    }

    return {
        characters,
        starredCharacters,
        addFavoriteCharacter,
        showFilterBox,
        changeFilterBoxStatus,
        applyFilter,
        filterText,
        applyBoxFilter,
        showCharacters,
        showStarredCharacters,
        speciesFilter,
        showFilters,
        numberOfFilters,
        selectCharacter,
        selectedCharacter,
        setShowFilterBox,
        clickedCharacter,
        setClickedCharacter,
        deleteCharacter
    }
}