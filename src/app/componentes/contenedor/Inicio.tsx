import { PeliListar } from "../peliculas/PeliListar";

export const Inicio = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Bienvenidos a RetroCine</h2>
            <p>
            Sumérgete en el maravilloso mundo de las películas clásicas, donde cada escena es una obra de arte y cada historia una leyenda. Aquí encontrarás los títulos que marcaron generaciones y siguen cautivando corazones. ¡Prepárate para disfrutar de lo mejor del cine en su época dorada, desde la comodidad de tu hogar!
            </p>
            <button className="btn btn-outline-light" type="button" onClick={PeliListar}
            >
              Ver películas
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
