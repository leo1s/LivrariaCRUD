import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Contato = ({
  id,
  nome,
  telefone,
  email,
  datanascimento,
  handleRemoveContato
}) => {
  const histCory = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="Contato">
      <Card.Body>
        <Card.Title className="Nome do contato">{nome}</Card.Title>
        <div className="book-details">
          <div>Nome: {nome}</div>
          <div>telefone: {telefone} </div>
          <div>email: {email} </div>
          <div>data de nascimento: {new Date(datanascimento).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => Contato.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveContato(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Contato;