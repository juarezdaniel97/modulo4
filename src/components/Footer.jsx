import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Mapa de Ubicación */}
                <div id='location'>
                    <h2 className="text-xl font-bold text-white mb-4">Ubicación del Festival</h2>
                    <iframe 
                        title="Mapa del Festival"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d368.92212669446116!2d-66.22592462788701!3d-28.3951520793416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94269500579c3f2b%3A0xf463256c5a6a73bb!2sAnfiteatro%20Municipal%20de%20Pom%C3%A1n!5e0!3m2!1ses-419!2sar!4v1739825208005!5m2!1ses-419!2sar" 
                        className="w-full h-64 rounded-lg"
                        allowFullScreen=""
                        loading="lazy">
                        </iframe>
                </div>
    
                {/* Formulario de Contacto */}
                <div id='contact'>
                    <h2 className="text-xl font-bold text-white mb-4">Contacto</h2>
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Correo Electrónico" 
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                            required 
                        />
                        <textarea 
                            placeholder="Tu mensaje..." 
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                            rows="4"
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full bg-festival-gold hover:bg-yellow-400 cursor-pointer text-gray-900 font-bold py-2 rounded transition duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
    
            {/* Redes Sociales y Créditos */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-8">
                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="#" className="text-gray-400 hover:text-red-600">
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                        <i className="bi bi-facebook"></i>
                    </a>        
                    <a href="#" className="text-gray-400 hover:text-pink-600">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
                <div className="text-center text-xs text-gray-600">
                    &copy; 2024 Festival de San Sebastián. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer;