import React from 'react'
import { StyledMenuItem } from '../styles/menuItem'
import { StyledMenuSection } from '../styles/menuSection'

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

export const CategoryCard = (props) => {
    const renderItems = () => {
        let items = ''
        if (props.items) {
            items = props.items.map((item) =>
                <MenuItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                />
            )
        }
        return (
            <div className="sectionItems" aria-labelledby="Category card items Container">
                {items}
            </div>
        )
    }

    return (
        <StyledMenuSection aria-labelledby="Menu section" orderNumber={props.orderNumber}>
            {props.items &&
                <h2 className="sectionTitle">{props.name}</h2>
            }
            {props.description &&
                <h3>{props.description}</h3>
            }
                {renderItems()}
        </StyledMenuSection>
    )
}
