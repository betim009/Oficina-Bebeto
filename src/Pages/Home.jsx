import React from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";
import image1 from "../Images/01.jpg";
import image2 from "../Images/02.jpg";
import '../App.css';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/clientes");
    }

    return (
        <div className="container">
            <div className="row my-5">
                <h1 className="text-center mb-3">Seja bem-vindo à Oficina do Bebeto</h1>
                <div className="col-md-6 flex-row-reverse">
                    <p className="text-left mb-5" style={{ fontSize: "20px" }}>
                        Oficina do Bebeto: onde o cuidado com o seu veículo é a nossa prioridade.
                        Na Oficina do Bebeto, oferecemos serviços de manutenção e reparação de veículos de alta qualidade,
                        garantindo que o seu carro seja tratado com o máximo de cuidado e atenção.
                        Nossa equipe de mecânicos altamente qualificados e experientes está sempre pronta para ajudá-lo a
                        resolver qualquer problema que seu veículo possa ter, desde uma simples troca de óleo até reparos
                        complexos no motor.
                        Além disso, oferecemos uma ampla gama de serviços para atender a todas as necessidades do
                        seu veículo, incluindo: Diagnóstico avançado, Serviços de freio, Suspensão e direção,
                        Sistema elétrico e eletrônico, Ar condicionado e refrigeração, Troca de óleo e filtro e
                        Reparos de motor e transmissão
                    </p>
                    <div className="mb-3">
                        <img src={image2} className="img-fluid" alt="imagem 2" />
                    </div>
                </div>
                <div className="col-md-6 flex-row">
                    <div className="mb-3">
                        <img src={image1} className="img-fluid" alt="imagem 1" />
                    </div>
                    <p className="text-rightmb-5" style={{ fontSize: "20px" }}>
                        Na Oficina do Bebeto, temos o compromisso de garantir que o seu veículo esteja sempre em boas
                        condições, mantendo sua segurança e conforto enquanto você dirige.
                        <br></br>    
                        Aqui, valorizamos a transparência em nossos serviços e mantemos nossos clientes informados a
                        cada passo do processo, garantindo que você esteja sempre ciente do que está acontecendo com
                        o seu veículo.
                        Portanto, se você está procurando por uma oficina de confiança para cuidar do seu carro,
                        não procure mais do que a Oficina do Bebeto. Estamos sempre prontos para ajudá-lo com todas
                        as suas necessidades de manutenção e reparação automotiva. <br></br>
                        Agende uma visita conosco hoje mesmo e experimente a diferença que podemos fazer pelo
                        seu veículo.<br></br> É só clicar em "Iniciar o Serviço" e dar escolher um dos nossos serviços.
                    </p>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-primary" type="button" onClick={handleClick}>
                        Iniciar Serviço
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
