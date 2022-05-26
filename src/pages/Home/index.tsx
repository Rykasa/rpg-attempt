import { useNavigate } from 'react-router-dom'

import { Mountains, FinnTheHuman, GoogleLogo} from 'phosphor-react'
import * as C from './styles'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

export function Home() {
  const {user, signInWithGoogle} = useAuth()
  const navigate = useNavigate()

  async function handleCreateCharacter(){
    if(!user){
      await signInWithGoogle()
    }

    navigate('/map')
  }

  return(
    <C.Container>
      <C.Aside>
        <strong>Uma nova aventura te espera</strong>
        <p>Crie seu personagem e inicie sua jornada</p>
        <Mountains className="aside-img" />
      </C.Aside>
      <C.Main>
        <div>
          <FinnTheHuman className="user-img" />
          <button onClick={handleCreateCharacter}>
            <GoogleLogo className="google-img" />
            Cria sua conta com o Google
          </button>
        </div>
      </C.Main>
    </C.Container>
  )
}