import React from 'react'
import { useState } from 'react'


const Tickets = () => {

    const [ticket, setTicket] = useState(5);
    const [isOpenModal, setIsOpenModal] = useState(false)


    const toogleModal = ()=>{
        setIsOpenModal(!isOpenModal)
    }

    const getTikets  = () =>{
        if (ticket == 0) {
            setTicket(0)
        }
        setTicket(ticket - 1);
        alert("¡Entrada comprada con éxito!");
    }

    return (
        <section id='tickets' className="py-16 bg-madera text-blanco text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-Lato font-bold mb-8">¡No te lo pierdas!</h2>
                <p className="text-xl mb-4">
                    {ticket > 0 ? "Entradas Disponibles: " : "Entradas Agotadas: "}
                        <span className='font-bold'>{ ticket }</span>
                </p>
                <button
                    onClick={toogleModal}
                    disabled= {ticket === 0}
                    className={`mt-2 px-4 py-2 rounded-lg ${ticket === 0 ? "bg-gray-400" : "bg-black hover:bg-gray-900"} cursor-pointer`}
                >
                    Comprar Entrada
                </button>

                {/* Manejo del Modal */}
                {isOpenModal && (
                    
                    <div className=" flex inset-0 justify-center items-center mt-4">
                            <div className="bg-crema text-black p-6 rounded-lg shadow-lg max-w-md">
                                <h2 className="text-xl font-semibold mb-4">Reserva tus tikets</h2>
                                <form>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="text-gray-700 px-2 py-1 border rounded"
                                            placeholder='Ingrese su nombre'
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                        type="email"
                                        className="text-gray-700 px-2 py-1 border rounded"
                                        placeholder='Ingrese su mail'
                                        />
                                    </div>
                                    {/* Button */}
                                    <div className="flex justify-center">
                                        <button
                                            type="button"
                                            onClick={toogleModal}
                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                                            >
                                            Cancelar
                                        </button>

                                        <button
                                            onClick={ ()=>{
                                                getTikets();
                                                setIsOpenModal(false);
                                            }}
                                            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                        >
                                            Confirmar
                                        </button>
                                    </div>
                                </form>
                            </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Tickets;