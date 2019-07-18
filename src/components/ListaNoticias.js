import React from "react";
import Noticia from "./Noticia";
import uuid from "uuid";

const ListaNoticias = ({ noticias }) => (
  <div className="row">
    {noticias.map(noticia => (
      <Noticia key={(noticia.id = uuid())} noticia={noticia} />
    ))}
  </div>
);

export default ListaNoticias;
