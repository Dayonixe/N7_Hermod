export function availableWidgets() {
  return  [
    {
      name: "Weather Widget",
      content: <Weather/>,
    },
    {
      name:"Cinema Widget",
      content:<Cinema/>,
    },
    {
      name:"TodoList Widget", 
      content: <TodoList/>, 
    }
  ]
}