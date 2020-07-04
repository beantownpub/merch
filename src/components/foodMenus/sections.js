import React, { useState, useEffect } from 'react'
import { StyledMenuItem, StyledMenuSection } from './styles/menuStyles'

const apiUrl = 'https://menu-api.jalgraves.com'
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

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
        console.log(`Item: ${menuItems[item]}`)
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
    const uri = `/v1/menu/section/${props.category}`

    useEffect(() => {
        fetch(`${apiUrl}${uri}`)
            .then(response => response.json())
            .then(data => setState( data ))
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