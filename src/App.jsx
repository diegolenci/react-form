import { useState } from "react"

function App() {

  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  const handleNewPost = (e) => {
    setNewPost(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
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
          posts.length > 0 ? (
            <ul>
              {
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
            <h3>Non ci sono posts</h3>
          )
        }
      </div>
    </>
  )
}

export default App
