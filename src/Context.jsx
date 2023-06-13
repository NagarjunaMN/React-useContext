import React, { createContext } from 'react'
import useUserApi from './API/UserApi'
import usePostApi from './API/PostApi'
import useCommentApi from './API/CommentApi'

//init context
export const DataContext = createContext()

function DataProvider(props) {
    const data = {
      userApi : useUserApi(),
      postApi : usePostApi(),
      commentApi : useCommentApi()
    }
  return (
    <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
