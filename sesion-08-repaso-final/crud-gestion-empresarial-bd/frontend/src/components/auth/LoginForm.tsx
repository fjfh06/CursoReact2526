import { useActionState } from "react";
import { useAuth } from "../../hooks/useAuth"

const LoginForm = () => {
    const { login } = useAuth();
    const formAction = async (_prev: {error: string|null}, formData: FormData) => {
        const email = formData.get("email")?.toString().trim() || "" as string
        const password = formData.get("password")?.toString().trim() || "" as string

        if (!email || !password) {
            return {
                error: "Todos los campos son obligatorios"
            }
        }

        const success = await login({ email, password });
        if(!success) {
            return {
                error: "Credenciales incorrectas"
            }
        }
        return {
            error: null
        };
    }

    const [state, handleSubmit, isPending ] = useActionState(formAction, { error: null })
  return (
    <div>
        <form 
        action={handleSubmit} 
        className="bg-white p-6 rounded shadow-amber-950 max-w-md mx-auto">
        {/* Aqui pondre los errores */}
        {state.error && <div className="bg-red-100 p-2 text-red-700 mb-4 rounded">{state.error}</div>}
        <div>
            <input type="email" name="email" placeholder="email" required className="input" />
            <input type="password" name="password" placeholder="password" required className="input" />
        </div>
        <div className="flex gap-2 mt-5">
            <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary"
            >{isPending ? "Logging in ..." : "Login"}</button>
            <p>Demo: demo@example.com/Demo123!</p>
        </div>
        </form>
    </div>
  )
}

export default LoginForm