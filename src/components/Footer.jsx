import { useState } from 'react';

const Footer = () => {
    return (
        <footer className="bg-purple-400 text-white p-6 mt-10">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4 text-pink-200">Young Essence</h2>
                <p className="text-center mb-4 text-yellow-100">
                    Creatividad, individualidad y modernidad en un solo lugar.
                </p>
                <div className="flex space-x-6 mb-4">
                    <a href="https://www.instagram.com" className="text-pink-200 hover:text-pink-800">
                        Instagram
                    </a>
                    <a href="https://www.facebook.com" className="text-pink-200 hover:text-pink-800">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" className="text-pink-200 hover:text-pink-800">
                        Twitter
                    </a>
                </div>
                <p className="text-sm text-center text-yellow-100">
                    &copy; 2025 Young. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
