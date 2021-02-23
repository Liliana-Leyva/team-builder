import React, { useState, useEffect } from 'react'
import TeamMembers from './teamMembers'
import Form from './form'
import axios from '../axios'
import TeamForm from './form'

const initialForm={
  name: "",
  email: "",
  role:""
}
export default function App() {
  const [team, setTeam] = useState([]) // careful what you initialize your state to
  const [form, setForm] = useState(initialForm)
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, [])


  const submit =() => {
    setTeam([...team, form])
    setForm(initialForm)
   
    
  }
  
  
  const update = (name,value) => {
    setForm({...form, [name]:value})
  }
  return (
    <div className='container'>
      <h1>Team Members</h1>
      
      <TeamForm form={form} update={update} submit={submit} />
      
      {
        team.map(teamMember => {
          return (
            <TeamMembers key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  )
}
