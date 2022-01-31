import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './components/content/footer/main'
import { FadeSlider } from './components/imageSliders/sliders'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/topBar/main'
import Routes from './reactRoutes'
import { config } from './utils/main'
const PAGES = config.pages
const STATIC_URL = config.urls.static

function topMenu() {
    return (
        <div >
            <img src={`${STATIC_URL}/img/logos/beantown_script_logo.svg`}  alt="beantown pub logo" />
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor='#fcba03'
            hoverColor='white'
            props={linkProps(PAGES, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(PAGES, 'menu_list')} />

function navBarLogo() {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={`${STATIC_URL}/img/logos/beantown.svg`}  alt="beantown pub logo" />
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

if (document.getElementById('mainSlider')) {
    ReactDOM.render(
        <FadeSlider/>,
        document.getElementById('mainSlider')
    )
}
