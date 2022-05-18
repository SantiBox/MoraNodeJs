const API = "https://api.github.com/users/";

async function Buscar(){
    const response = await fetch(API + 'SantiBox')
    //Ahora quiero traer la info en formato Json
    const Data = await response.json()
    console.log(Data)
}

const app = Vue.createApp({
    data() {
        return {
          message: 'Hola Gente'
        }
    }
})//montamos esta informacion en el div llamado app con "mount"
