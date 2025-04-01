import { useState } from "react";
import accesorios from "../assets/accesorios.jpg";
import ropa from "../assets/ropa.jpg";
import calzado from "../assets/calzado.jpg";
import tendencia from "../assets/tendencia.jpg";

export default function Cuenta() {
    const [comments, setComments] = useState([]);
    const [inputs, setInputs] = useState({ accesorios: "", ropa: "", calzado: "", tendencia: "" });

    const handleAddComment = (category, image) => {
        if (inputs[category].trim() !== "") {
            setComments([...comments, { image, text: `NameUser: Usuario 1\nComentario: ${inputs[category]}` }]);
            setInputs({ ...inputs, [category]: "" }); // Limpiar input después de enviar
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-200">
            <div className="max-w-7xl w-full p-6 bg-purple-100 rounded-lg shadow-lg flex">
                {/* Parte izquierda: Cuadrícula de Imagen + Input + Botón */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold text-pink-600 mb-4 text-center">Comentarios</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[{ name: "accesorios", image: accesorios }, { name: "ropa", image: ropa }, { name: "calzado", image: calzado }, { name: "tendencia", image: tendencia }].map((item) => (
                            <div key={item.name} className="flex flex-col items-center">
                                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2" />
                                <input
                                    type="text"
                                    value={inputs[item.name]}
                                    onChange={(e) => setInputs({ ...inputs, [item.name]: e.target.value })}
                                    placeholder="Escribe un comentario"
                                    className="w-full p-2 mt-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <button
                                    onClick={() => handleAddComment(item.name, item.image)}
                                    className="mt-2 w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition"
                                >
                                    Enviar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Parte derecha: Comentarios Recibidos */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-bold text-pink-600 mb-4 text-center">Comentarios Recibidos</h2>
                    <ul className="space-y-4">
                        {comments.map((comment, index) => (
                            <li key={index} className="bg-white p-4 rounded-md shadow-md text-purple-700 flex items-center space-x-4">
                                <img src={comment.image} alt="Comentario" className="w-20 h-20 object-cover rounded-md" />
                                <p className="text-center whitespace-pre-line">{comment.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
