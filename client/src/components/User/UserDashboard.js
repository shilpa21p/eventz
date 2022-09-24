import React,{ useContext, useEffect,useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import { NavLink } from 'react-router-dom'

function UserDashboard() {
  const context = useContext(GlobalContext)
  const [curEvents, setCurEvents] = useState([])
  const [event, setEvent] = context.eventApi.events 

  useEffect(() =>{
    //filtered active events
    const activeEvents = event.filter((item) => item.isEnabled === true)
    setCurEvents(activeEvents)
  },[curEvents])
  return (
    <div className="container">
      <div className="col-md-12">
         <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3">User Dashboard</h3>
          </div>
         </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-stripped table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  curEvents && curEvents.map((item, index) =>{
                    return(
                      <tr className="text-center" key={index}> 
                          <th> {item._id}</th>
                          <th> {item.name} </th>
                          <th>
                            <NavLink to={`/details/${item._id}`} className="btn btn-info">Details</NavLink>
                          </th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard