import React, { useState } from "react";
import Context from "./Context";
import clientes from '../Data/Clientes';

const Provider = ({ children }) => {
  const [selectedClientId, setSelectedClientId] = useState(undefined);
  const [selectedClient, setSelectedClient] = useState(undefined);

  const setSelectedClientById = (id) => {
    const client = clientes.find(c => c.id === id);
    setSelectedClient(client);
  }

  const values = {
    selectedClientId,
    setSelectedClientId,
    selectedClient,
    setSelectedClientById,
  };

  return <Context.Provider value={values}> {children} </Context.Provider>
}

export default Provider;
