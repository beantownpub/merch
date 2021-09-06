import React, { useState, useEffect } from 'react'
import { StyledMenuItem, StyledMenuSection } from './styles/menuStyles'

const MenuItem = (props) => {
    return (
        <StyledMenuItem>
            <div className="namePrice">
                <div><h2>{props.name}</h2></div>
                <div><h3>{props.price}</h3></div>
            </div>
            <p>{props.description}</p>
        </StyledMenuItem>
    )
}

function menuSectionItems(menuItems) {
    const itemList = []
    let cnt = 1
    for (const item of Object.keys(menuItems)) {
        itemList.push(
            <MenuItem
                key={cnt}
                name={menuItems[item].name}
                price={menuItems[item].price}
                description={menuItems[item].description}
            />
        )
        cnt++
    }
    return (
        <section>
            {itemList}
        </section>
    )
}

export const MenuSection = (props) => {
    const [state, setState] = useState([])
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            category: props.category
        })
    }

    useEffect(() => {
        fetch('menu/categories', options)
            .then(response => response.json())
            .then(data => setState( data.data ))
            .catch(error => console.log(error))
    }, [])

    return (
        <StyledMenuSection>
            <h2>{props.name}</h2>
            {props.description && <p>{props.description}</p>}
            {menuSectionItems(state)}
            {props.postInfo && <p>{props.postInfo}</p>}
        </StyledMenuSection>
    )
}
