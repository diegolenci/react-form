import { useState } from "react"

function App() {

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

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
      </div>
    </>
  )
}

export default App
