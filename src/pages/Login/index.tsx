import { Container, LoginCard, Form, Brand } from "./styles";

import logoImg from "../../assets/logo-sipam.png";


export function Login(){
    return(
        <Container>
            <LoginCard>
                <Brand>
                    <img src={logoImg} alt="Logo SIPAM" />
                    <h2>SISMAX</h2>
                </Brand>

                <Form>
                    <div>
                        <label htmlFor="email-input">E-mail</label>
                        <input type="email" id="email-input" required/>
                    </div>
                    <div>
                        <label htmlFor="passwd-input">Senha</label>
                        <input type="password" id="passwd-input"required/>
                    </div>

                    <button>Entrar</button>
                </Form>
            </LoginCard>
        </Container>
    )
}