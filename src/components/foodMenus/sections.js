import React, { useState, useEffect } from 'react'
import { StyledMenuItem } from './styles/menuItem'
import { StyledMenuSection } from './styles/menuSection'

const MenuItem = (props) => {
    return (
        <StyledMenuItem aria-labelledby="Menu item container">
            <table>
                <tbody>
                    <tr>
                        <td className="itemName">{props.name}</td>
                        <td className="itemPrice">{props.price}</td>
                    </tr>
                </tbody>
            </table>
            <p>{props.description}</p>
        </StyledMenuItem>
    )
}

function menuSectionItems(menuItems) {
    console.log('Menu Items: ' + menuItems)
    const itemList = []
    let cnt = 1
    for (const item of Object.keys(menuItems)) {
        console.log('Item: ' + menuItems[item])
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
        <div className="sectionItems">
            {itemList}
        </div>
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
        <StyledMenuSection aria-labelledby="Menu section">
            <h2 className="sectionTitle">{props.name}</h2>
            {props.description && <div className="sectionText"><p>{props.description}</p></div>}
            {menuSectionItems(state)}
            {props.postInfo && <div className="sectionText"><p>{props.postInfo}</p></div>}
        </StyledMenuSection>
    )
}
