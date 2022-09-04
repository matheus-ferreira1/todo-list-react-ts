import React, { useState} from 'react'

interface TodoItem {
  id: number
  value: string
  completed: boolean
}

const App: React.FC = () => {
  
  let count:number = 1
  const [todoName, setTodoName] = useState<string>('')
  const [todoId, setTodoId] = useState<number>(0)
  const [todoList, setTodoList] = useState<TodoItem[]>([])

  const handleAdd = () => {
    setTodoId(prev => prev + 1)
    const newItem = {
      id: todoId,
      value: todoName,
      completed: false
    }
    setTodoList(prev => [...prev, newItem])
    setTodoName('')
  }

  const handleDelete = (id: number) => {
    console.log(id);
    setTodoList(prev => prev.filter(item => item.id !== id))
    
  }

  const handleComplete = (id: number) => {
    console.log(id);
    
  }
  
  return (
    <div>
      <div>
        <input 
          type="text"
          placeholder='Your todo here...'
          value={todoName}
          onChange={event => setTodoName(event.target.value)}
        />
        <button onClick={() => handleAdd()}>
          Add
        </button>
      </div>
      
      <div>
        {todoList.length >= 1 && (
          todoList.map((item) => (
            <div key={item.id}>
              <input value={item.value} type="text" readOnly />
              <input value={item.id} type="text" readOnly />
              <button onClick={() => handleComplete(item.id)}>
                Complete
              </button>
              <button onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      
    </div>
  )
}

export default App