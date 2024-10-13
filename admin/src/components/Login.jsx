import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h1>Admin Pannel</h1>
            <form >
                <div>
                    <p>Email Address</p>
                    <input type="email" placeolder='your@email.com' />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeolder='pass' />

                    <button type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login