import "../css/componentes.css";
// import webpacklogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre = "sin nombre") =>{
    console.log("Se creó y ejecutó la función saludar adecuadamente");
    let h1 = document.createElement("h1");
    h1.innerText=`Hola, ${nombre}`;
    document.body.append(h1);

    //img
    // const img = document.createElement("img");
    // img.src = webpacklogo;
    // document.body.append(img);
}