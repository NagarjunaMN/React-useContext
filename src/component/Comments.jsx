import React, { useContext } from 'react'
import { DataContext } from '../Context'

function Comments() {
    const context = useContext(DataContext)
    const [comments] = context.commentApi.comments
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Comments</h3>
        </div>
      </div>
      <div className="row">
        {
            comments && comments.map((item, index) => {
                return(
                    <div className="col-md-4 mt-2 mb-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h6 className="text-center"> {item.id} {item.name} </h6>
                            </div>
                            <div className="card-body">
                                <p className="text-secondary"> {item.body} </p>
                            </div>
                            <div className="card-footer">
                              <strong>Email</strong>
                              <span className="text-success float-end">{item.email}</span>
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

export default Comments
