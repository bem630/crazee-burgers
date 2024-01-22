import React from 'react'

function EmptyMenuAdmin({onReset}) {
    
  return (
    <div>
        <span>Pas de produit</span>
        <button onClick={onReset}>generer les produit</button>
    </div>
  )
}

export default EmptyMenuAdmin