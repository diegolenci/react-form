import { useState } from "react"

function App() {
  //posts: array iniziale vuoto
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  //si occupa di gestire il campo input
  const handleNewPost = (e) => {
    //funzione che aggiorna lo stato iniziale della variabile newpost
    setNewPost(e.target.value)
  }
  //entra in funzione quando l'utente clicca sul bottone d'invio
  const handleSubmit = (e) => {
    //evita di ricaricare la pagina
    e.preventDefault()
    //aggiunge nuovo array pieno
    setPosts( () => [...posts, newPost] )
    //svuota il campo input
    setNewPost('')
  }

  return (
    <>
      <div className="container">
        <h2>Aggiungi post</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={newPost}
          onChange={handleNewPost}
          placeholder="inserisci un post"/>

          <button className="btn btn-primary">Aggiungi post</button>
        </form>

        <h2>Lista posts</h2>
        {
          //controlla se la lunghezza dell'array post è magg di 0
          posts.length > 0 ? (
            <ul>
              {
                //se ci sono dei post li mostra
                posts.map( (element, index) => {
                  return (
                    <li key={index}>
                      {element}
                    </li>
                  )
                })
              }
            </ul>
          ) : (
            //altrimenti compare questo messaggio
            <h3 className="text-danger">Non ci sono posts</h3>
          )
        }
      </div>
    </>
  )
}

export default App
