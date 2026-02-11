import { createContext, use, useContext, useState, type ReactNode } from "react"

interface User {
    email: string
}
interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => boolean
    logout: () => void

}

//Creamos el almacen global que podremos usar en cualquier componente
const AuthContext = createContext< AuthContextType | null>(null)

//Creamos el provider o proveedor que envuelva el contexto
export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

    //login
    const login = (email: string, password: string): boolean => {
        if(email === 'admin@admin.com' && password === '1234'){
            setUser({email})
            return true
        }
        return false
    }
    //logout
    const logout = () => {
        setUser(null)
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
    }

//para usar el contexto creo un hook personalizado por mi
export function useAuth(){
    const context = useContext(AuthContext)
    if(context === null){
        throw new Error('Error al usar el contexto')
    }
    return context
}