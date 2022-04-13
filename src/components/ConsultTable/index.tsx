import { Table } from "./styles";

export function ConsultTable(){
    return(
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
                    <td>em andamento</td>
                </tr>
            </tbody>
        </Table>
    )
}