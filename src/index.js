import React from 'react'
import ReactDOM from 'react-dom'
import { SquareWidget } from './components/merch/square/square'
import { HeroHeader, Footer } from './components/content/common'
import { FadeSlider } from './components/imageSliders/sliders'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/topBar/main'
// import Merch from './components/merch/merch'
import Routes from './reactRoutes'
const config = require('./config.json')
const pages = config.beantown.pages
const staticURL = config.beantown.static_url

function topMenu() {
    return (
        <div >
            <img src={staticURL + "/img/logos/beantown_script_logo.svg"}  alt="beantown pub logo" />
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor='#fcba03'
            hoverColor='white'
            props={linkProps(pages, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(pages, 'menu_list')} />

function navBarLogo() {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={staticURL + "/img/logos/beantown.svg"}  alt="beantown pub logo" />
        </a>
    );
}

ReactDOM.render(
    <TopMenuBar
        bottomMenu=''
        fontColor='#fcebbb'
        navBarLogo={navBarLogo()}
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor='black'
        menuColor='#494040' />,
    document.getElementById('topBar')
)

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)

ReactDOM.render(
    <Routes />,
    document.getElementById('app')
)

if (document.getElementById('heroHeader')) {
    ReactDOM.render(
        <HeroHeader/>,
        document.getElementById('heroHeader')
    )
}

if (document.getElementById('mainSlider')) {
    ReactDOM.render(
        <FadeSlider/>,
        document.getElementById('mainSlider')
    )
}

// if (document.getElementById('merch')) {
//     ReactDOM.render(
//         <Merch/>,
//         document.getElementById('merch')
//     )
// }

if (document.getElementById('squareForm')) {
    ReactDOM.render(
        <SquareWidget/>,
        document.getElementById('squareForm')
    )
}
