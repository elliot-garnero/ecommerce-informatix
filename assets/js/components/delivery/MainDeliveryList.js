import React from 'react';
import axios from 'axios';

class MainDeliveryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      orderList: [],
      status: '',
    };
    this.sortBy = this.sortBy.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/orderList')
    .then((res) => {
      this.setState ({
        orderList : res.data
      })
    })
  }

  selectChange(event){
    this.setState({ status: event.target.value });
  }

  sortBy(event){
    event.preventDefault();
    const data = this.state;
    axios.post('http://localhost:8000/api/deliveryListOrderBy', data)
    .then((res) => {
      this.setState ({
        orderList : res.data
      })
    })
  }



  render(){
    const { orderList } = this.state;
    const options = { year: 'numeric', month: 'short', day: 'numeric'};

      return(
        <div className="container-mb">
          <div className="mb-2 mt-2 p-3 aside_blue">
            <div className="row">
              <div className="col-3">
                <h5>Filtrer les commandes par :</h5>
                <form onSubmit={this.sortBy} method="post">
                  <select value={this.state.trie} onChange={this.selectChange} name="trier" className="form-control form-control-md">
                    <option value="à préparer">à préparer</option>
                    <option value="expédié">expédié</option>
                    <option value="livré">livré</option>
                  </select>
                  <button className="btn btn-secondary btn-sm mt-1"><i className="fa fa-sort-amount-asc"></i> Filtrer</button>
                </form>
                <a href={`/deliveryList`}>
                  <button className="btn btn-secondary btn-sm mt-1"><i className="fa fa-th-list"></i> Voir tout</button>
                </a>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date commande</th>
                  <th scope="col">id user</th>
                  <th scope="col">Destinataire</th>
                  <th scope="col">Montant</th>
                  <th scope="col">id produits</th>
                  <th scope="col">Mode d'exp</th>
                  <th scope="col">Packaging</th>
                  <th scope="col">Statut</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                
              {orderList.map((data, i) =>(
                <tr key={i}>
                  <th scope="row">{data.idOrder}</th>
                  <td>{new Date(data.ordDate.substr(0,10)).toLocaleDateString('fr-FR', options)}</td>
                  <td>{data.idUser}</td>
                  <td>{data.ordFirstname} {data.ordLastname}<br></br>{data.ordAddress}</td>
                  <td>{data.ordTotal} €</td>
                  <td>{data.ordProducts}</td>
                  <td>{data.ordMode}</td>
                  {data.packaging == 0 && <td>non</td>}
                  {data.packaging == 1 && <td>oui</td>}
                  {data.ordStatus == "livré" && <td className="text-success"><strong>{data.ordStatus}</strong></td>}
                  {data.ordStatus == "expédié" && <td className="text-primary"><strong>{data.ordStatus}</strong></td>}
                  {data.ordStatus == "à préparer" && <td className="text-danger"><strong>{data.ordStatus}</strong></td>}
                  <td>
                    <form method="post" action="/api/editDeliveryStatus">
                      <select name="ordStatus" className="form-control form-control-sm">
                        <option></option>
                        <option value="expédié">expédié</option>
                        <option value="livré">livré</option>
                        <option value="à préparer">à préparer</option>
                      </select>
                      <input name="idOrder" type="hidden" value={data.idOrder}></input>
                      <button type="submit" className="btn btn-secondary btn-sm"><i className="fa fa-share-square-o"></i> changer statut</button>
                    </form>
                  </td>
                </tr>

              ))}

              </tbody>
            </table>
          </div>
        </div>
      )
  }
}

export default MainDeliveryList;