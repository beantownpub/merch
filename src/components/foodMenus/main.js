import React from 'react'
import { StyledContentContainer, StyledMenuWarning } from './styles/main'
import { MenuSection } from './sections'

export const FoodMenu = () => {
    return (
        <StyledContentContainer aria-labelledby="Menu content container" backgroundColor="beige" margin="5rem auto 1rem auto">
            <MenuSection
                name="Appetizers"
                category="appetizers"
            />
            <MenuSection
                name="Title Town Wings"
                category="wings"
                description="Best wings in Boston! Available house battered or naked"
                postInfo="FLAVORS: plain, buffalo, honey buffalo, XXX hot, teriyaki, bbq, sweet chili, garlic parmesan. Choose two per order"
            />
            <MenuSection
                name="Soups"
                category="soups"
            />
            <MenuSection
                name="Salads"
                category="salads"
                description="Add grilled chicken 6, shrimp 7, lobster 14, steak 11"
                postInfo="DRESSINGS: Italian, Creamy Italian, Ranch, Blue Cheese, Greek, Honey Mustard, Russian, Balsamic Vinaigrette, Fat Free Vinaigrette, and Oila Vinegar"
            />
            <MenuSection
                name="Entrees"
                category="entrees"
                description="Add a starter salad to any entree or sandwich for 4.95"
            />
            <MenuSection
                name="Sandwiches"
                category="sandwiches"
                description="Sandwiches served on an extra large fresh roll with a pickle spear and a choice of side. Add a starter salad to any entree or sandwich for 4.95"
                postInfo="SIDES: French Fries, Baked Beans, Jasmine Rice, Vegetable, Cole Slaw, Home Made Chips, Potato Salad, Mashed Potatoes"
            />
            <MenuSection
                name="Burgers"
                category="burgers"
                description="Add a starter salad to any burger for 4.95"
            />
            <MenuSection
                name="Desserts"
                category="desserts"
            />
            <StyledMenuWarning aria-labelledby="Menu warning">
                <h3><span>*</span>These items are cooked to order. There is a risk associated with consuming undercooked meat products</h3>
            </StyledMenuWarning>
            </StyledContentContainer>
    )
}
