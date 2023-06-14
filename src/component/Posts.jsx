import React, { useContext } from 'react'
import { DataContext } from '../Context'

function Posts() {
  const context = useContext(DataContext)
    const [posts] = context.postApi.posts
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Posts</h3>
        </div>
      </div>
      <div className="row">
        {
            posts && posts.map((item, index) => {
                return(
                    <div className="col-md-4 mt-2 mb-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h6 className="text-center"> {item.id} {item.title} </h6>
                            </div>
                            <div className="cad-body">
                                <p className="text-secondary"> {item.body} </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Posts
