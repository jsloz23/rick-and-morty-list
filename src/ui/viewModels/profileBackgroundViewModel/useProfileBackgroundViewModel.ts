import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useProfileBackgroundViewModel() {
    const search = useLocation().search
    const id = new URLSearchParams(search).get('id');
    const [comment, setComment] = useState<Array<string>>([])

    const addComment = (value: string, setTempComentary: React.Dispatch<React.SetStateAction<string>>) => {
        setComment([...comment, value])
        setTempComentary('');
    }

    useEffect(() => {
      setComment([])
    }, [id])
    
    return {
        id,
        addComment,
        comment
    }
}