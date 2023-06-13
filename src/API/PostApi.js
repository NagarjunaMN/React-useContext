import React, {useCallback, useEffect, useState} from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

function usePostApi() {
    const [post,setPost] = useState([])

    const getPosts = useCallback(() => {
        const readPosts = async () => {
            const res = await axios.get(`${URL}/posts`)
            setPost(res.data)
        }
        readPosts()
    },[])
    useEffect(() => {
        getPosts()
    },[])
  return {
    posts : [post,setPost]
  }
    
}

export default usePostApi
