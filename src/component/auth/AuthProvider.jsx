import React, { Children } from 'react'

function AuthProvider({children}) {
    let [user, setUser] = React.useState(null)
    
    const signin = (username, password) => {
        // send a post request to backend
        // if the user is authenticated, put userinfo into user context
        setUser({ username })
    
        // also put the user info into localstorage for persistence
        // localStorage.setItem('user',user.username)
    }

    const signout = () => {
        // clear user context
        setUser(null)
    }
    const value = {user,signin,signout}

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
const AuthContext = React.createContext(null)

export {AuthProvider,AuthContext}

