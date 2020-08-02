import 'mobx-react-lite/batchingForReactDom'
import { action, computed, configure, decorate, observable } from 'mobx'

configure({ enforceActions: "observed"})

export class StoreToDo {
  todos = []
  term = ''
  filter = ''

  get filteredListTodo() {
    return this.todos.filter(todo => todo.title.includes(this.filter))
  }

  changeTerm = (value) => {
    this.term = value
  }

  changeFilter = (value) => {
    this.filter = value
  }

  addToDo = (option) => {
    this.todos.push(option)
  }

  removeToDo = (id) => {
    this.todos = this.todos.filter(el => el.id !== id)
  }
}

decorate(StoreToDo, {
  todos: observable,
  term: observable,
  filter: observable,
  addToDo: action,
  changeTerm: action,
  changeFilter: action,
  filteredListTodo: computed,
  removeToDo: action,
})