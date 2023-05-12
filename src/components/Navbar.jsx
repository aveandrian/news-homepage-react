import { useState } from "react"
import '../styles/navbar.css'

export default function Navbar(){
    const [isOpened, setIsOpened] = useState(false)

    function toggleIsOpened(){
        setIsOpened(prev=> !prev)
    }

    return (
        <header>
            
            <nav >
                <div className="menu-icon-container"><img src={`/assets/images/${isOpened ? "icon-menu-close.svg" : "icon-menu.svg"}`} className="menu-open-icon" onClick={toggleIsOpened}></img></div>
                <div className={`nav-items ${isOpened ? "opened" : ""}`}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="new" className="menu-item" href="/new">New</a>
                    <a id="popular" className="menu-item" href="/contact">Popular</a>
                    <a id="trending" className="menu-item" href="/trending">Trending</a>
                    <a id="popular" className="menu-item" href="/categories">Categories</a>
                </div>
            </nav>
        </header>
    )
}