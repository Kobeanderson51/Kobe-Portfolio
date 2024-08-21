import React from 'react';

import bgImage from '../assets/images/bg-image.jpg';

export default function Hero() {
    return (
        <div>
            <section 
                className="text-white text-center py-40 bg-cover " 
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Hello, I'm Kobe Anderson
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                        Web Developer | Currently Pursuing Web Development at Mountainland Technical College
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/kobe-anderson/" 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </div>
    );
}
