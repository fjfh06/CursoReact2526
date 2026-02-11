import { createContext, useState } from "react";
import type { User } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | null>(null)

interface AppProviderProps {
    children: React.ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {
    const [state, setState] = useState<AppState>({
        user: {
            id: "1",
            nombre: "Profe React",
            email: "profe@gmail.com",
            avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
            role: "admin"
        },
        theme: "dark",
        language: "es"
    })
    // habra que usar el useEffect para cargar el idioma, theme al iniciar el componente
    const setUser = (user: User | null) => {
        //esto funciona pero
        setState({...state, user })
        //es recomendable forzar usar el estado anterior
        //setState(prev => ({ ...prev, user: user }))
    }

    const setTheme = (theme: Theme) => {
        setState({...state, theme})
    }

    const setLanguage = (language: Language) => {
        setState({...state, language})
    }

    const value = {
        ...state,
        setUser,
        //setTheme,
        //setLanguage,
    }
    return <AppContext value={value}>{children}</AppContext>
}