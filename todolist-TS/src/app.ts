import { ITodoData } from "./js/typings"

;((doc) => {

  // 先获取到input，button，list
  const oInput: HTMLElement = document.querySelector('input')
  const oAddBtn: HTMLElement = document.querySelector('button')
  const oTodoList: HTMLElement = document.querySelector('.todo-list')

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: '哈哈哈哈',
      completed: false
    },
    {
      id: 2,
      content: '2哈哈哈哈',
      completed: true
    },
    {
      id: 2,
      content: '3哈哈哈哈',
      completed: false
    },
  ]

  // init
  const init = (): void => {
    bindEvent()
  }

  function bindEvent (): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false)
    oTodoList.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick (): void {

  }

  function handleListClick (e: MouseEvent): void {

  }

  init()

})(document)