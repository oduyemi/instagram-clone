



export const Header = () => {
    return(
        <nav className="">
            <button className="logo">
                <img src={require("../assets/instagram.png")} alt="logo" />
            </button>
            <input type="text" className="search" />
            <span className="nav-links">
                <button>
                    <i className="fas fa-home" />
                </button>
                <button>
                    <i className="far fa-comment-alt" />
                </button>
                <button>
                    <i className="far fa-compass" />
                </button>
                <button>
                    <i className="far fa-heart" />
                </button>
            </span>
        </nav>
    )
}