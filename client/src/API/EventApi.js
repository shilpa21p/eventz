import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'

//used to read the events data from server
function EventApi() {
    const [event,setEvent] = useState([])
    
    useEffect(() =>{
        const getEvent = async () => {
            await axios.get(`/api/v1/event/getEvents`)
            .then(res => {
                setEvent(res.data.events)
            }).catch(err => toast.error(err.message))
        }
        getEvent()
    }, [event] )

  return {
    events:[event,setEvent]
  }
}

export default EventApi