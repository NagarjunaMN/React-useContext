import React, { useContext } from 'react'
import { DataContext } from '../Context'

function Users() {
    const context = useContext(DataContext)
    const [users] = context.userApi.users
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Users</h3>
        </div>
      </div>
      <div className="row">
        {
            users && users.map((item, index) => {
                return(
                    <div className="col-md-4 mt-2 mb-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-success text-center"> {item.name} </h4>
                            </div>
                            <div className="cad-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Email</strong>
                                        <span className="text-success float-end"> {item.email} </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Phone</strong>
                                        <span className="text-success float-end"> {item.phone} </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Website</strong>
                                        <span className="text-success float-end"> {item.website} </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Username</strong>
                                        <span className="text-success float-end"> {item.username} </span>
                                    </li>
                                </ul>
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

export default Users
