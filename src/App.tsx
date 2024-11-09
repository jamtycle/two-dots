import React from "react";
import "./App.css";

const poem = `Dos puntos
ennubecidos
            despiertos

Dos puntos
entumecidos
            con nuestras curvas
            infinitas

Dos bisectrizes
    ángulados equidistantes
convergiendo sobre el reinicio del cartesiano.

Gusto a azahar,
    en la sensación remota
                   aremolinada
                    remedio
                   en medio
de una sensación musicalizada
de un acto perpétuo
una luz musical
    viajando a la velocidad de fotónes,
    completamente entrelazados
  hay un sentir nacido
      desde la separación de dos nautrones energéticos.
`;

const poem2 = `Desde la ditancia se ven
dos puntos
dos almas
juntas
      alegres juntas
      felices
              juntas

juntas juntas
juntasjuntas
juntajsuntas
juntjuasntas
junjuntastas
jujuntntasas
jjuntauntass

======================================

Ojalá poder tocar tus labios melocotón,
acariciar tu sexo seda,
dejar en ti el comienzo familiar,
cuidarte lentamente,
cocinarte a fuego lento
comerte rápido
amamantarte chiquito,
quererte lindo,
besarte en diminutivo


Gracias por estár aquí,
gracias por un año de existencia juntos,
dos puntitos
gracias, por ti
gracias a ti
gracias, tú.
`;

function App() {
    const [current, setCurrent] = React.useState(0);

    // document.addEventListener(
    //     "keydown",
    //     (e) => {
    //         const c = current;
    //         if (e.key === "ArrowRight") {
    //             setCurrent((c + 1) % 2);
    //         } else if (e.key === "ArrowLeft") {
    //             setCurrent((c + 2) % 2);
    //         }
    //     },
    //     true,
    // );

    return (
        <>
            <div className="h-full w-[35%] m-auto flex flex-col gap-5 select-none">
                <h1 className="text-4xl flex-initial">• Two dots •</h1>
                <pre className="text-left flex-grow">
                    {(() => (current === 0 ? poem : poem2))()}
                </pre>
                <div className="flex gap-4 justify-center text-4xl">
                    {(() =>
                        current === 0 ? (
                            <span className="text-purple-300">⊙</span>
                        ) : (
                            <span
                                className="text-orange-400 hover:text-purple-100"
                                onClick={() => setCurrent(0)}
                            >
                                •
                            </span>
                        ))()}
                    {(() =>
                        current === 1 ? (
                            <span className="text-purple-300">⊙</span>
                        ) : (
                            <span
                                className="text-orange-400 hover:text-purple-100"
                                onClick={() => setCurrent(1)}
                            >
                                •
                            </span>
                        ))()}
                </div>
            </div>
            <div className="w-full h-full flex absolute top-0 left-0 -z-50">
                <div className="pulse w-1/2">
                    <span className="pulse__item_orange"></span>
                    <span className="pulse__item_orange"></span>
                    <span className="pulse__item_orange"></span>
                    <span className="pulse__item_orange"></span>
                </div>
                <div className="pulse w-1/2">
                    <span className="pulse__item_purple"></span>
                    <span className="pulse__item_purple"></span>
                    <span className="pulse__item_purple"></span>
                    <span className="pulse__item_purple"></span>
                </div>
            </div>
        </>
    );
}

export default App;
