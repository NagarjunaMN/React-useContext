import React, {useCallback, useEffect, useState} from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

function useCommentApi() {
    const [comment,setComment] = useState([])

    const getComments = useCallback(() => {
        const readComments = async () => {
            const res = await axios.get(`${URL}/comments`)
            setComment(res.data)
        }
        readComments()
    },[])
    useEffect(() => {
        getComments()
    },[])

  return {
    comments : [comment,setComment]
  }
    
}

export default useCommentApi
