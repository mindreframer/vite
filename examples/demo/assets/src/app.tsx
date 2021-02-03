import { h, Fragment } from 'preact'
import { Logo } from './logo'

export function App() {
  let images = ["162100", "180116", "180311", "180548"]
  let imgContainers = images.map((value, idx) => {
    return <img src={`images/${value}.jpg`} height={50} style="padding: 5px;"/>
  })
  return (
    <>
      <p>Hello Vite + Preact!</p>
      {imgContainers}
    </>
  )
}
