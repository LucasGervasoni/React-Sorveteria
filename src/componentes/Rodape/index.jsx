import estilos from "./Rodape.module.css";
import Image from "next/image";
import Logo from "/public/logo.png";

export default function Rodape() {
    return (
        <footer className={estilos.footer}>

            <div className={estilos.contato}>

                <Image src={Logo} className="logo" alt="Logo gelateria"></Image>

                <div className={estilos.cards_container}>
                    <div className={estilos.card_contato}>
                        <h4>ENDEREÇO</h4>
                        <span>Rio de Janeiro</span>
                    </div>

                    <div className={estilos.card_contato}>
                        <h4>CONTATO</h4>
                        <span>Info@meusite.com</span>
                        <span>Tel: (99) 9999-9999</span>
                    </div>
                    <div className={estilos.card_contato}>
                        <h4>HORÁRIOS</h4>
                        <span>ABERTO SEG Á SEXTA</span>
                        <span>10:00 - 18:00</span>
                    </div>
                </div>
            </div>

        </footer>
    )
}