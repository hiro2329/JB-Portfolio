function About() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT</h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Add breakpoints to your blank page,<br />
                        then drop sections to have them<br />
                        responsive out of the box.
                    </p>
                    {/* <div className="flex gap-4">
                        <button className="bg-black text-white font-semibold px-5 py-2 rounded-md shadow-md hover:shadow-lg transition">
                            Get Started
                        </button>
                        <button className="bg-gray-100 text-gray-700 font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition">
                            Learn More
                        </button>
                    </div> */}
                </div>

                {/* Right: Image Placeholder */}
                <div className="w-full h-64 bg-gray-200 bg-[repeating-linear-gradient(45deg,_#e5e7eb_0px,_#e5e7eb_1px,_transparent_1px,_transparent_20px)] rounded-lg shadow-inner" />
            </div>
        </section>
    );
}

export default About;
