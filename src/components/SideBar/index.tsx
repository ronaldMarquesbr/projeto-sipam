import { Container, Brand, Menu, MenuItem } from "./styles";
import logoSipamImg from "../../assets/logo-sipam.png";

import { FiUserPlus } from "react-icons/fi"
import { AiFillHome, AiFillSetting,AiFillContainer } from "react-icons/ai"

export function SideBar(){
    return(
        <Container >
            <Brand>
                <img src={logoSipamImg} alt="Logo SIPAM" />
                <h2>SISMAX</h2>
            </Brand>

            <Menu>
                <MenuItem isSelected="true">
                    <a href="#">
                        <AiFillHome />
                        Dashboard
                    </a>
                </MenuItem>

                <MenuItem> 
                    <a href="#">
                        <FiUserPlus />
                        Cadastro
                    </a>
                </MenuItem>

                <MenuItem>
                    <a href="#">
                        <AiFillContainer />
                        Consulta
                    </a>
                </MenuItem>

                <MenuItem>
                    <a href="#">
                        <AiFillSetting />
                        Configurações
                    </a>
                </MenuItem>
            </Menu>
        </Container>
    )
}