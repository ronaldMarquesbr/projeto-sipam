import { Table, Container, StatusField, SearchButton, Pagination, PrintButton } from "./styles";
import { BsCircleFill, BsPrinter } from "react-icons/bs"


export function ConsultTable(){
    return(
        <Container>
            <div>
                <h2>Consulta</h2>
                <SearchButton placeholder="Search" />
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>NUP</th>
                        <th>Objeto</th>
                        <th>Empresa</th>
                        <th>Termo aditivo</th>
                        <th>Status</th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123456789</td>
                        <td>Manutencao Predial</td>
                        <td>Max Engenharia</td>
                        <td>182020</td>
                        <td><StatusField status="andamento"><BsCircleFill/>em andamento</StatusField></td>
                    </tr>
                    <tr>
                        <td>123456789</td>
                        <td>Manutencao Predial</td>
                        <td>Max Engenharia</td>
                        <td>182020</td>
                        <td><StatusField status="vigor"><BsCircleFill/>em vigor</StatusField></td>
                    </tr>
                    <tr>
                        <td>123456789</td>
                        <td>Manutencao Predial</td>
                        <td>Max Engenharia</td>
                        <td>182020</td>
                        <td><StatusField status="vigor"><BsCircleFill/>em vigor</StatusField></td>
                    </tr>
                    <tr>
                        <td>123456789</td>
                        <td>Manutencao Predial</td>
                        <td>Max Engenharia</td>
                        <td>182020</td>
                        <td><StatusField status="vigor"><BsCircleFill/>em vigor</StatusField></td>
                    </tr>
                </tbody>
            </Table>
            <div className="table-footer">
                <PrintButton>Imprimir<BsPrinter /></PrintButton>

                <Pagination>
                    <a href="#">Previous</a><span>1</span><a href="#">Next</a>
                </Pagination>
            </div>
        </Container>
    )
}