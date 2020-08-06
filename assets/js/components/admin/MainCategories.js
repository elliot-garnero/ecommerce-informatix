import React, { Component } from 'react';
import axios from 'axios';

class MainCategories extends Component {

    constructor(props){
        super(props);
        this.state = {
          categories: [],
          deleted: "" 
        }
    }

    //DID MOUNT
    componentDidMount() {
        this.getCategories();
      }
  
    //FUNCTIONS
    getCategories() {
        axios.get(`http://localhost:8000/api/getcategories`)
        .then((res) => {
            const categories = res.data;
            this.setState({ categories, loading: false });
        });
    }
    deleteCategorie(idValue){
        axios.post(`http://localhost:8000/api/deleteCategorie/`+idValue)
        .then(() => {
            this.setState(
                {deleted: "Suppression effecutée ! Rechargez la page pour visualiser le changement."}
            )
        });
    }

    
    render(){
        const categories= this.state.categories
        const deleted= this.state.deleted
        return(
        <div className="container card">
            <h2 className="m-4 text-center txt-orange">
                <strong>Administrateur / Gérer les catégories : </strong>
            </h2>
            <div className="card bg-blue txt-white p-2 m-4">
                <label htmlFor="categories">Liste des catégories</label>
                <div className="form-control">
                    <ul className="list-group">
                    {categories.map((categorie,i) => (
                        console.log(categorie.idCat),
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>{categorie.catName}</strong>
                            <div>
                                <button type="button" className="btn btn-danger"
                                    onClick={() => this.deleteCategorie(categorie.idCat)}> 
                                    Supprimer cette catégorie 
                                </button>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
                <p className="m-2">{deleted}</p>
            </div>
            <form method="POST" action="/api/createCategorie">
                <div className="card-header info-color white-text text-center py-4">
                    <label htmlFor="name">Nom de la catégorie</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    placeholder="Nom"
                    />
                </div>
                <div className="card-header info-color white-text text-center py-4">
                    <label htmlFor="picture1">Image</label>
                    <input
                    type="text"
                    className="form-control"
                    id="picture"
                    name="picture"
                    placeholder="Photo"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-orange txt-white btn btn-block mt-4"
                    value="Créer cette catégorie"
                />
                <br />
            </form>
        </div>
        )
    }
}

export default MainCategories;
