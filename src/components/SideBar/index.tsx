import { Container, Brand, Menu, MenuItem } from "./styles";
import logoSipamImg from "../../assets/logo-sipam.png";

import { FiUserPlus } from "react-icons/fi"
import { AiFillHome, AiFillSetting,AiFillContainer } from "react-icons/ai"
import { Link } from "react-router-dom";

export function SideBar(){
    return(
        <Container >
            <Brand>
                <img src={logoSipamImg} alt="Logo SIPAM" />
                <h2>SISMAX</h2>
            </Brand>

            <Menu>
                <MenuItem isSelected="true">
                    <Link to="/app">
                        <AiFillHome />
                        Dashboard
                    </Link>
                </MenuItem>

                <MenuItem> 
                    <Link to="/app">
                        <FiUserPlus />
                        Cadastro
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link to="consulta">
                        <AiFillContainer />
                        Consulta
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link to="/app">
                        <AiFillSetting />
                        Configurações
                    </Link>
                </MenuItem>
            </Menu>
        </Container>
    )
}