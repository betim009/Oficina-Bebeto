import React, { useEffect, useContext, useState, useCallback } from "react";
import { QrReader } from 'react-qr-reader';
import '../App.css';
import Context from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";

function Cliente() {
  const navigate = useNavigate();
  const {
    selectedClientId,
    setSelectedClientId,
    selectedClient,
    setSelectedClientById
  } = useContext(Context);

  const [qrCodeResult, setQrCodeResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrCodeResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    if (selectedClientId !== null) {
      setSelectedClientById(selectedClientId);
    }
  }, [selectedClientId, setSelectedClientById]);

  const handleInputChange = (e) => {
    setSelectedClientId(parseInt(e.target.value));
  }

  const handleQrCodeResult = useCallback(() => {
    if (qrCodeResult !== null) {
      setSelectedClientId(parseInt(qrCodeResult));
      setQrCodeResult(null);
    }
  }, [qrCodeResult, setSelectedClientId]);

  useEffect(() => {
    handleQrCodeResult();
  }, [handleQrCodeResult]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-center">
        <h2 className="mt-4 mb-4">Identificação do Cliente</h2>
        <h5 className="display-5" style={{ fontSize: "20px" }}>POR QRcode</h5>
        <div className="Scan mb-4">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            onResult={(result) => console.log(result)}
          />
        </div>
        <div>
          <h4 className="display-5" style={{ fontSize: "20px" }}>Por ID:</h4>
          <input type="text" onChange={handleInputChange} />
          {selectedClient !== undefined ?
            <div className="mt-4">
              <p>Cliente: {selectedClient.nome}</p>
              <p>Automóvel: {selectedClient.automovel}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/servicos", { state: { cliente: selectedClient } })}>
                Prosseguir
              </button>
            </div>
            :
            <span />
          }
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cliente;