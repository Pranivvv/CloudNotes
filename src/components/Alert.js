import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '40px'}}> 
    {
      props.alert && <div className={`alert alert-${props.alert.state==='Success'?'success':'danger'}`} style={{height: '60px'}} role="alert">
      <p><strong>{props.alert.state}:</strong> {props.alert.mess} </p>
    
    </div>
    }
    </div>
  )
}

