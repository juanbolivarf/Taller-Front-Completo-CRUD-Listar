import noDisponibleImg from "../../../assets/img/noDisponible.png";
export const PeliAdmin = () => {
  return (
  <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          Lamentablemente no hemos encontrado nada similar. ¡Seguiremos trabajando para solucionar el problema! <br />
          <img 
              src={noDisponibleImg} 
              alt="Imagen no disponible" 
              style={{ width: "200px", marginTop: "10px" }} 
          />
      </div>
  </>
  );
};