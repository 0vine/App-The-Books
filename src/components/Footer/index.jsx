import "./Footer.scss"
import iconbookwhite from "../../assets/LogoWhite.svg"


export const Footer = () => {
    return (
        <>
            <footer className="footer-">
                <div className="div-footer">
                    <img src={iconbookwhite} alt="Logo Branco" />
                    <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
                </div>

            </footer>
        </>
    )
}