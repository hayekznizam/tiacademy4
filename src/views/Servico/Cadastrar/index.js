import { Link } from "react-router-dom";
import { Button,Container, Form,FormGroup, Input,Label } from "reactstrap";

export const Cadastrar = () => {

  const cadServico = async =>{
    console.log("Cadastrar");
  }

  return (
    <Container>
      <div className="d-flex">
        <div className="m-auto p-2">
        <h1>Cadastrar Novo Serviço</h1>

        </div>
        <div className="p-2">
          <Link to="/listar-servico" className="btn btn-outline-success btn-sm">Serviços</Link>
        </div>
    </div>
    <hr className="m-1"/>

    <Form className="p-2" onSubmit={cadServico}>
  <FormGroup className="p-2">
    <Label>
      Nome
    </Label>
    <Input
      name="nome"
      placeholder="Nome do serviço"
      type="text"
    />
  </FormGroup>
  <FormGroup className="p-2">
    <Label>
      Descrição
    </Label>
    <Input
      
      name="descricao"
      placeholder="Descrição do Serviço"
      type="text"
    />
  </FormGroup>
  
  <Button type="submit" outlinecolor ="sucess">
    Cadastrar
  </Button>
</Form>

    </Container>
    
  );
};
