import React from "react";
import PessoasService from "../service/PessoasService";


class PessoasComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            pessoas: [],
        }
    }

    componentDidMount(){
        PessoasService.getPessoas().then((response) => {
            this.setState({pessoas: response.data})
        })
    }

    render() {
        return (
            <div>
                <h1 className= "text-center">Lista Pessoas</h1>
                <table className= "table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>CPF</td>
                            <td>Email</td>
                            <td>Data nascimento</td>
                            <td>Data cadastro</td>
                            <td>Data update</td>
                            <td>Deletado?</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pessoas.map(
                                pessoas =>
                                <tr key={pessoas.id}>
                                    <td>{pessoas.id}</td>
                                    <td>{pessoas.nome}</td>
                                    <td>{pessoas.cpf}</td>
                                    <td>{pessoas.email}</td>
                                    <td>{pessoas.data_nascimento}</td>
                                    <td>{pessoas.data_cadastro}</td>
                                    <td>{pessoas.data_alteracao}</td>
                                    <td>{pessoas.deletado}</td>                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PessoasComponent 