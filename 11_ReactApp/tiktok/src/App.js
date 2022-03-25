import { useContext } from 'react'
import { useStore, actions } from './store'

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const handleAdd = () => {
      dispatch(actions.addTodo(todoInput))
  }
  
  return (
    <div className="App" style={{ padding: 30 }}>
        <input 
          value={todoInput}
          placeholder="Enter todo..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} <span>&times;</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App;
