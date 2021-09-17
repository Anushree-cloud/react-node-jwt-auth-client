import axios from 'axios'
import React, {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        login()
    }

    const login = () => {
        let user = {
            email: email,
            password: password
        }
        axios.post('http://localhost:8040/login', user).then(response => {
            console.log(response.data.data);
            setLoginStatus(response.data.data.message)
            auth()
        }).catch(error => console.log(error))
    }

    const auth = () => {
        axios.get('http://localhost:8040/profile').then(response => {
            setIsAuthenticated(response.data.message)
        })
    }

    return (
        <div style={{ margin: '50px', width:'25vw'}}>
            <form onSubmit={onSubmitHandler} className="p-2">
                <h1 className="text-light bg-dark p-2 m-0">Login</h1>
                <div className="d-flex flex-column bg-danger">
                    <label htmlFor='email' className="mt-2">Email</label>
                    <input type="email" className="email p-2 m-2" name="email" placeholder="enter email" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="d-flex flex-column bg-danger">
                    <label htmlFor='password'>Password</label>
                    <input type="password" className="password p-2 m-2" name="password" placeholder="enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className="btn btn-dark w-100">Submit</button>
            </form>
            <h3>{loginStatus}</h3>
            <h2>{isAuthenticated}</h2>
        </div>
    )
}
