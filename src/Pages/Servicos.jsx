import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import pecas from '../Data/Pecas';
import Footer from '../Components/Footer';

function Servicos() {
    const location = useLocation();
    const cliente = location.state ? location.state.cliente : undefined;
    const [pecasSelecionadas, setPecasSelecionadas] = useState([]);
    const [dataInicio, setDataInicio] = useState(null);
    const navigate = useNavigate();

    const handlePecaSelecionada = (e) => {
        const idPeca = parseInt(e.target.value);
        const peca = pecas.find((p) => p.id === idPeca);
        if (e.target.checked) {
            setPecasSelecionadas([...pecasSelecionadas, peca]);
        } else {
            setPecasSelecionadas(pecasSelecionadas.filter((p) => p.id !== idPeca));
        }
    };

    const handleFinalizar = () => {
        const dataAtual = new Date();
        const dataEntrega = addDays(dataAtual, 2);

        const mensagem =
            `Data do pedido: ${format(dataAtual, 'dd/MM/yyyy')},
Data de entrega: ${format(dataEntrega, 'dd/MM/yyyy')}`;


        alert(mensagem);
        setDataInicio(dataAtual);
        navigate('/');

        // for remove warning
        console.log(dataInicio)
    };

    const valorTotal = pecasSelecionadas.reduce((acc, peca) => acc + peca.valor, 0);

    return (
        <div className="container mt-4 text-center">
            <h1>Serviços</h1>
            <div className="mb-3">
                <label htmlFor="responsavel" className="display-4" style={{fontSize:"20px"}}>
                    Responsável pelo serviço
                    <select style={{ width: "240px" }} className="form-select mt-2 text-center" id="responsavel">
                        <option value="option-1">Bebeto</option>
                    </select>
                </label>
            </div>
            <h5>Informações do cliente</h5>
            {cliente !== undefined ? (
                <div>
                    <p>Cliente: {cliente.nome}</p>
                    <p>Automóvel: {cliente.automovel}</p>
                </div>
            ) : (
                <p>Cliente não encontrado</p>
            )}
            <h5> Selecione o serviço desejado</h5>
            <form>
                <fieldset>
                    {pecas.map((peca) => (
                        <div key={peca.id}>
                            <input
                                className="m-1"
                                type="checkbox"
                                id={`checkbox-${peca.id}`}
                                value={peca.id}
                                onChange={handlePecaSelecionada}
                                checked={pecasSelecionadas && pecasSelecionadas.some((p) => p.id === peca.id)}
                            />
                            <label htmlFor={`checkbox-${peca.id}`}>
                                {peca.nome} - R$ {peca.valor.toFixed(2)}
                            </label>
                        </div>
                    ))}
                </fieldset>
            </form>
            {pecasSelecionadas.length > 0 && (
                <div className="mt-4">
                    <h5>Valor Total do Serviço:</h5>
                    <p>R$ {valorTotal.toFixed(2)}</p>
                    <button className="btn btn-primary" onClick={handleFinalizar}>
                        Finalizado
                    </button>
                </div>
            )}
            <Footer />
        </div>
    );

}

export default Servicos;
