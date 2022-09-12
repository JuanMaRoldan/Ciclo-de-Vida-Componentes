import React, { Component } from "react";
import Genre from "./Genre";


class GenresInDb extends Component {
  /* le damos estado al componente */
  constructor() {
    super(); /* method */
    this.state = {
      genresList:
        [], /* estado iniciaal . la info la tendré por pedido a una api*/
        load:true
    };
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Genres in Data Base
            </h6>
          </div>
       
          <div className="card-body">
          {
           this.state.load 
           ? <p>cargando...</p>
           :
           <div className="row">
           {
           this.state.genresList.map((genre, index) => {
             return <Genre {...genre} key={index} />;
           })}
         </div>
        }
           
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    /* lo llamna desoues de que se monta el componente */
    try {
      let response = await fetch("http://localhost:3001/api/genres");

      let result = await response.json();
        console.log(result.data)
      this.setState(
        {
        genresList:  result.data, /* cambiar el valor por lo que recibo de result */
        load : false
      }
      );
    } catch (error) {
      console.error(error);
    }
  }
  componentDidUpdate() {
    console.log("el componente se actualizó");
  }
}

export default GenresInDb;
