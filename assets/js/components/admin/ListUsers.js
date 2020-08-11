import React, { Component } from 'react';
import DiscountModal from './modal/DiscountModal';
import BlockCbModal from './modal/BlockCbModal';
import Table from 'react-bootstrap/Table';
import NavbarAdmin from './NavbarAdmin';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedatas: [],
      isLoaded: false,
      users: '',
      dates: [],
      show: false,
      showBlock: false,
      id: '',
      nom: '',
      prenom: '',
      discount: '',
      payment: {},
    };
    this.updateState = this.updateState.bind(this);
    this.showModal = this.showModal.bind(this);
    this.showBlockModal = this.showBlockModal.bind(this);
    this.downloadUsersData = this.downloadUsersData.bind(this);
  }

  updateState(value) {
    this.setState({ updatedatas: value.update });
    this.refresh();
    console.log(this.state);
  }

  refresh() {
    console.log('refresh');
    fetch('http://localhost:8000/api/admin/listUsers')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          users: json,
          show: false,
        });
      });
  }

  showModal(id, nom, prenom, discount) {
    this.setState({
      id: id,
      nom: nom,
      prenom: prenom,
      discount: discount,
      show: true,
      showBlock: false,
    });
    console.log(this.state.show);
  }

  showBlockModal(id, nom, prenom) {
    fetch('http://localhost:8000/api/admin/pay/' + id)
      .then((res) => res.json())
      .then((json) => {
        json == '' ? (json = null) : json;
        this.setState({
          payment: json,
          id: id,
          nom: nom,
          prenom: prenom,
          show: false,
          showBlock: true,
        });
      });
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/admin/listUsers')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          users: json,
        });
      });
  }

  downloadUsersData() {
    fetch('http://localhost:8000/api/listUsers/download').then((res) => {
      console.log(res);
      res.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'listUsers.csv';
        a.click();
      });
      window.location.href = response.url;
    });
  }

  render() {
    const updatedatas = this.state;
    const { isLoaded, users } = this.state;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <>
          <NavbarAdmin />
          <div className="col">
            <div className="row">
              <a
                className="mt-3 mb-3 ml-2"
                href="#"
                onClick={this.downloadUsersData}
              >
                <button className="btn btn-primary">
                  Télecharger la liste des clients
                </button>
              </a>
            </div>
            <div className="row">
              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#id</th>
                      <th>Pseudo</th>
                      <th>Prénom</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Adresse</th>
                      <th>CP</th>
                      <th>Ville</th>
                      <th>Pays</th>
                      <th>Crée le</th>
                      <th>Rabais</th>
                      <th>Paiements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user, i) => (
                      <tr key={i} id={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.cp}</td>
                        <td>{user.city}</td>
                        <td>{user.countries}</td>
                        <td>
                          {new Date(
                            user.createdAt.substr(0, 10)
                          ).toLocaleDateString('fr-FR', options)}
                        </td>
                        <td>
                          <button
                            onClick={(e) =>
                              this.showModal(
                                user.id,
                                user.lastname,
                                user.firstname,
                                user.discount
                              )
                            }
                            className="btn btn-success"
                          >
                            Ajouter
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={(e) =>
                              this.showBlockModal(
                                user.id,
                                user.lastname,
                                user.firstname
                              )
                            }
                            className="btn btn-warning"
                          >
                            Restreindre
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>

            <BlockCbModal
              payment={this.state.payment}
              showBlock={this.state.showBlock}
              nom={this.state.nom}
              prenom={this.state.prenom}
              id={this.state.id}
              dataToParent={this.updateState}
            />

            <DiscountModal
              show={this.state.show}
              id={this.state.id}
              nom={this.state.nom}
              prenom={this.state.prenom}
              discount={this.state.discount}
              dataToParent={this.updateState}
            />
          </div>
        </>
      );
    }
  }
}

export default ListUsers;
