import React from 'react'

export default function TeamForm(props){
  const {form, update, submit} = props;
  const handleSubmit = event =>{
      event.preventDefault()
      submit()
  }
  
  const handleChange= event=>{
      const {name, value} =event.target;
      update(name,value);
  }
  
  return(
      <form className="form container" onSubmit={handleSubmit}>
          <div className="form-group inputs">
              <label>
              Name
              <input
                  type="text"
                  name="username"
                  placeholder="type your name..."
                  value={form.username}
                  onChange={handleChange}
              ></input>
              </label>
              <label>
              E-mail
              <input
                  type="email"
                  name="email"
                  placeholder="type an email..."
                  value={form.email}
                  onChange={handleChange}
                  
              ></input>
              </label>
              <label>
              Role
              <select name="role" value={form.role} onChange={handleChange}>
                <option value= "">-- Select a Role --</option>
                <option value= "Back-End">Back-End Engineer</option>
                <option value ="Front-End">Front-End Engineer</option>
                <option value ="Designer">UI Designer</option>
              </select>
              </label>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
          
      </form>
      
  )
}