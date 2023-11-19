export interface ResponseCiudadano {
  count:    number;
  next:     string;
  previous: null;
  results:  Ciudadano[];
}

export interface Ciudadano {
  idciudadano:      number;
  area:             string;
  roluniversitario: string;
  primernombre:     string;
  segundonombre:    string;
  primerapellido:   string;
  segundoapellido:  string;
  solapin:          string;
  carnetidentidad:  string;
  provincia:        string;
  municipio:        string;
  sexo:             string;
  residente:        boolean;
  fechanacimiento:  Date | null;
  idexpediente:     string;
  fecha:            Date;
  idpersona:        string;
  imagen_facil:      ImagenFacil;
}

export interface ImagenFacil {
  idciudadano?:        number;
  foto?:               string;
  valida?:             boolean;
  fecha?:              Date;
  fechaActualizacion?: Date;
}
