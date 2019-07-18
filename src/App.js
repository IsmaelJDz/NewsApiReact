import React, { Component, Fragment } from "react";
import Header from "../src/components/Header";
import ListaNoticias from "../src/components/ListaNoticias";
import Formulario from "../src/components/Formulario";

//URL API https://newsapi.org/docs/endpoints/top-headlines
//API KEY af274e40f9234ed3a448beeea10480f0
//WEB https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=af274e40f9234ed3a448beeea10480f0

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=af274e40f9234ed3a448beeea10480f0`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <Formulario />

        <div className="container white contenedor-noticias">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
