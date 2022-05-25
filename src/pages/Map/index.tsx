import * as C from './styles'
import { useCharacter } from '../../hooks/useCharacter'
import { Character } from '../../components/Character'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'


export function Map(){
  const { user } = useAuth();
  const char = useCharacter()

  const handleKeyDown = (e: KeyboardEvent)=>{
    switch(e.code){
      case 'KeyD':
      case 'ArrowRight':
        char.moveToRight()
      break;
      case 'KeyA':
      case 'ArrowLeft':
        char.moveToLeft()
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveToUp()
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveToDown()
      break;
    }
  }

  useEffect(() =>{
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  return(
    <C.Container>
      <C.Map>
        <Character 
          x={char.x}
          y={char.y}
          side={char.side}
          name={user?.name}
        />
      </C.Map>
    </C.Container>
  )
}