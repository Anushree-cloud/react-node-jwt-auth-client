import React, {useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [regStatus, setRegStatus] = useState('')


    const onSubmitHandler = (event) => {
        event.preventDefault()
        addUser()
    }

    const addUser = () => {
        let user = {
            name: name,
            email: email,
            password: password
        }
        axios.post('http://localhost:8040/users', user).then(response => {
            setRegStatus(response.data.data.message)
            console.log(response.data)
        }).catch(error => console.log(error))
    }

    return (
        <div style={{ margin: '50px', width:'25vw'}}>
            <h1 className="text-light bg-dark p-2 m-0">Registration</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="d-flex flex-column bg-danger">
                    <label htmlFor='name' className="mt-2">Name</label>
                    <input type="name" className="name p-2 m-2" name="name" placeholder="enter name" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="d-flex flex-column bg-danger">
                    <label htmlFor='email'>Email</label>
                    <input type="email" className="email p-2 m-2" name="email" placeholder="enter email" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="d-flex flex-column bg-danger">
                    <label htmlFor='password'>Password</label>
                    <input type="password" className="password p-2 m-2" name="password" placeholder="enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className="btn btn-dark w-100">Submit</button>
            </form>
            <h3 className='mt-1'>{regStatus}</h3>
        </div>
    )
}
