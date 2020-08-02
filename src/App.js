import React from 'react'
import { observer } from 'mobx-react'

export const App = observer(({ store: {
  changeFilter, changeTerm, filteredListTodo, addToDo, todos, filter, term } }) => {

  const onHandlerSubmit = (event) => {
    event.preventDefault()
    if (term) {
      addToDo({ id: Date.now(), title: term, isCompleted: false })
      changeTerm('')
    }
  }

  const handlerChangeTerm = ({ target: { value } }) => {
    changeTerm(value)
  }

  const handlerChangeFilter = ({ target: { value } }) => {
    changeFilter(value)
  }

  return <div style={{width: "1000px", margin: "2rem auto"}}>
    <p style={{textAlign: "center", fontSize: "2rem"}}>
      ToDo list <i style={{color: "orange"}}>Mobx</i> and <i style={{color: "blue"}}>React</i>
    </p>
    {todos.length > 0 && <div className="row">
      <div className="col s12" style={{display: "flex", justifyContent: "center"}}>
        <div>
          <input
            placeholder="Поиск"
            id="first_name"
            type="text"
            className="validate"
            value={filter}
            onChange={handlerChangeFilter}
          />
          <span className="helper-text">Фильтр ваших дел</span>
        </div>
      </div>
    </div>}
    <div className="row">
      <form className="col s12" onSubmit={onHandlerSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="text"
              type="text"
              className="validate"
              onChange={handlerChangeTerm} value={term}
              placeholder="Задача"
            />
            <span className="helper-text">Добавьте в список ваше дело</span>
          </div>
        </div>
      </form>
    </div>
    <div>
      {filteredListTodo.length ? `Количество дел: ${filteredListTodo.length}` : null}
      {filteredListTodo.length
        ? <div className="collection">
          {filteredListTodo.map(({title, id}) => <a href="#" key={id} className="collection-item">{title}</a>)}
        </div>
        : <p style={{padding: ".75rem"}}>Ваш список дел пуст</p>}
    </div>
  </div>
})