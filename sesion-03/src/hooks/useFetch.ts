import { useEffect, useState } from "react";

//T --> Generics
export function useFetch<T>(url: string) { 
    //Aqui guardaremos la data final
    const [data, setData] = useState<T | null>(null)
    //Mostrar o no un loop que diga cargando...
    const [loading, setLoading] = useState<boolean>(true)
    //por si tenemos errores y fallamos
    const [error, setError] = useState<Error | null>(null)

    //efecto de que cuandi cargue el componente (o renderice por primera vez haremos useEffect)

    useEffect(() => {
      setLoading(true)
      setError(null)
      // Creamos un mando a distancia para abortar el fetch
      const controller = new AbortController();
      //El signal es una señal que va por el cable del fetch
      const { signal } = controller;
      const fetchData = async () => {
        try {
            //hacemos la llamda y pasamos la señal de cancelación
            const response = await fetch(url, { signal })
            if(!response.ok){{
                setError(error as Error)
                throw new Error("Error en la peticion")
            }}
            const result = await response.json()
            setError(null);
            setData(result);
        } catch (error: unknown) {
            setError(error as Error)
        } finally {
            setLoading(false);
        }
      }

      //********* Uno DE LOS ERRORES MAS UTILIZADOS ES UE NO LLAMAIS A LA FUNCION DENTRO DE useEffect() */
      fetchData()
      //El return se ejecuta cuando se va adesmontar el componente
      return () => {
        controller.abort()
      }
    }, [url])

    return { data, loading, error };
    
}