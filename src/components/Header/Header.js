import React from 'react'
import { Linka, Lista, ListaItem, Navigacija } from './HeaderStyle' 

const Header = () => {
  return (
    <>
        <Navigacija>
            <Lista>
                <ListaItem>
                    <Linka to="/">
                        Prva stranica
                    </Linka> 
                </ListaItem>
                <ListaItem>
                    <Linka to="/login">
                        Druga stranica
                    </Linka>
                </ListaItem>
            </Lista>
        </Navigacija>
    </>
  )
}

export default Header