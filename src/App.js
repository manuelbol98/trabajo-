import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { Table,
   Button,
   Container,
   Modal, 
   ModalHeader, 
   ModalBody, 
   FormGroup, 
   ModalFooter,} from "reactstrap";

const data = 
[
  { id: 1,
  producto: "cafe",
  referencia: "juan valdes",
  precio:"$5000",
  peso:"80g",
  categoria:"viveres",
  cantidad:"5",
  fecha:"15/06/98" 
},

  { id: 2, 
  producto: "te hindu", 
  referencia: "te", 
  precio:"$5200",
  peso:"36g",
  categoria:"viveres",
  cantidad:"10",
  fecha:"19/09/22" 
},

  { id: 3, 
  producto: "papas", 
  referencia: "mecato", 
  precio:"$3000",
  peso:"50g",
  categoria:"viveres",
  cantidad:"20",
  fecha:"05/12/14" 
},

  { id: 4, 
  producto: "suavitel", 
  referencia: "aseo hogar", 
  precio:"6500",
  peso:"120g",
  categoria:"aseo",
  cantidad:"15",
  fecha:"09/12/21" 
},

  { id: 5, 
  producto: "mantequilla", 
  referencia: "comida fria", 
  precio:"5000",
  peso:"85g",
  categoria:"manteca",
  cantidad:"8",
  fecha:"15/5/23" 
},

  { id: 6, 
  producto: "manzana", 
  referencia: "fruver", 
  precio:"3000",
  peso:"52g",
  categoria:"fruver",
  cantidad:"20",
  fecha:"12/01/23" 
},

];


class App extends React.Component {

  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      producto: "",
      referencia: "",
      precio: "",
      peso:"",
      categoria:"",
      cantidad:"",
      fecha:"",
    },
  };

   mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
   };

   cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
   };

   mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
   };

   cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
   };

   editar = (dato) => {
     var contador = 0;
     var arreglo = this.state.data;
     arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].producto = dato.producto;
        arreglo[contador].referencia = dato.referencia;
        arreglo[contador].precio = dato.precio;
        arreglo[contador].peso = dato.peso;
        arreglo[contador].categoria = dato.categoria;
        arreglo[contador].cantidad = dato.cantidad;
        arreglo[contador].fecha = dato.fecha;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
   };

   eliminar = (dato) => {
     var opcion = window.confirm("responsabilidad tuya si lo borras " + dato.id);
     if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {

        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }

        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
   };

   insertar = () => {

     var valorNuevo = { ...this.state.form };
     valorNuevo.id = this.state.data.length + 1;
     var lista = this.state.data;
     lista.push(valorNuevo);
     this.setState({ modalInsertar: false, data: lista });
   }

   handleChange = (e) => {

     this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
     });
   };

  render() {

    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>Registrar producto</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>referncia</th>
                <th>precio</th>
                <th>peso</th>
                <th>categoria</th>
                <th>cantidad</th>
                <th>fecha</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.producto}</td>
                  <td>{dato.referencia}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.peso}</td>
                  <td>{dato.categoria}</td>
                  <td>{dato.cantidad}</td>
                  <td>{dato.fecha}</td>
                  <td>

                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar 

                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Producto:
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                referencia:
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.referencia}
              />
            </FormGroup>

            <FormGroup>
              <label>
                precio:
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

            <FormGroup>
              <label>
                peso:
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.peso}
              />
            </FormGroup>

            <FormGroup>
              <label>
                categoria:
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.categoria}
              />
            </FormGroup>

            <FormGroup>
              <label>
                cantidad:
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                fecha:
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fecha}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>registro del producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                producto:
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                referencia:
              </label>
              <input
                className="form-control"
                name="referencia"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                precio:
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                peso:
              </label>
              <input
                className="form-control"
                name="peso"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                categoria:
              </label>
              <input
                className="form-control"
                name="categoria"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                cantidad:
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                fecha:
              </label>
              <input
                className="form-control"
                name="fecha"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;