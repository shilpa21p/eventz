import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function EventDetails() {
    const params = useParams()
    const [event, setEvent] = useState({})

  
        const getEvent = async() =>{
            await axios.get(`/api/v1/event/getEvents/${params.id}`)
            .then(res => {
                setEvent(res.data.event)
            }).catch(err => console.log(err.message))
        }

    useEffect(() => {
        getEvent()
    },[event])

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3">Event Details</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">{event.name}</h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Description</strong>
                            <span className="float-end">{event.description}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Event Date</strong>
                            <span className="float-end">{event.eventDate}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Event Status</strong>
                            <span className="float-end">{event.isEnabled ? "Active" : "In Active"}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Event Created By</strong>
                            <span className="float-end">{event.createdBy}</span>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetails
