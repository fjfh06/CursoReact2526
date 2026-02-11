//Guardar en una base de datos
const guardarEnBaseDeDatos = async (todo: TodoData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Guardado en la base de datos:",todo)
    localStorage.setItem('todo', JSON.stringify(todo));
};

//Funcion que ejecuta react al enviar el formulario
//Es el objeto que contiene los datos del formulario
const guardarAction = async (_prevState: FormState, formData:FormData):Promise<> => {
    
}