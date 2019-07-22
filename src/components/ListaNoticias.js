import React from "react";
import PropTypes from "prop-types";
import Noticia from "./Noticia";
import uuid from "uuid";

const ListaNoticias = ({ noticias }) => (
  <div className="row">
    {noticias.map(noticia => (
      <Noticia key={(noticia.id = uuid())} noticia={noticia} />
    ))}
  </div>
);

ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default ListaNoticias;
