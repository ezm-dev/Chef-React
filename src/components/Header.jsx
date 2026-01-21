import logoImage from "../images/recipe-logo.png"

export default function Header(){
    return(
        <header>

            <img src={logoImage} alt="header-image" />
            <h1> Chef AI</h1>
        </header>
    )
}