import React from 'react';

function AboutUs() {
    return (
        <div className=" min-h-screen flex flex-col items-center p-4 mt-2">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                Your Company Name: Your Journey, Our Drive
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
                Experience the Freedom of the Road
            </h2>

            {/* Image */}
            <div className="w-full max-w-4xl mb-8">
                <img src="https://i.pinimg.com/564x/3b/fe/f6/3bfef65bc8946db2ef5c6e35dd5acbe4.jpg" alt="Happy family enjoying a road trip in a rented car" className="w-full rounded-lg shadow-lg" />
            </div>

            <div className='flex flex-wrap flex-col gap-2 items-center justify-center'>

                {/* Mission and Values Section */}
                <div className="max-w-3xl w-100 bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>To provide hassle-free car rental solutions</li>
                        <li>To offer a wide range of vehicles to suit every need</li>
                        <li>To deliver exceptional customer service</li>
                    </ul>
                </div>


                <div className="max-w-3xl w-100 bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Values</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li><strong>Customer-Centric:</strong> Your satisfaction is our priority.</li>
                        <li><strong>Reliability:</strong> We value punctuality and trust.</li>
                        <li><strong>Innovation:</strong> We embrace technology to enhance your experience.</li>
                        <li><strong>Sustainability:</strong> We're committed to eco-friendly practices.</li>
                    </ul>
                </div>

                {/* Why Choose Us Section */}
                <div className="max-w-3xl w-100 bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose Us?</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Easy Booking: Book your car in just a few clicks.</li>
                        <li>Flexible Rentals: Choose from daily, weekly, or monthly rentals.</li>
                        <li>Well-Maintained Fleet: Drive safe and stylish vehicles.</li>
                        <li>24/7 Support: Assistance is always a call away.</li>
                        <li>Transparent Pricing: No hidden fees, just clear costs.</li>
                    </ul>
                </div>

                <div className="w-[100%] bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">What Sets Us Apart</h3>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Instant Booking: Reserve your ride in seconds with our streamlined platform.</li>
                        <li>Flexible Rentals: Daily, weekly, or monthly plans to suit your schedule.</li>
                        <li>Top-Notch Fleet: Drive safe and stylish vehicles, meticulously maintained.</li>
                        <li>24/7 Support: Wherever you are, our team is just a call away.</li>
                        <li>Transparent Pricing: No hidden costs, only upfront pricing.</li>
                    </ul>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg p-6 mb-12 w-full max-w-3xl flex flex-col items-center text-center shadow-md">
                <h4 className="text-3xl font-bold mb-4">Ready to explore?</h4>
                <p className="text-lg mb-6">Book your dream car today!</p>
                <button className="bg-yellow-400 text-blue-800 font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors">
                    Book Now
                </button>
            </div>

            {/* Optional Testimonials or Additional Info */}
            <div className="max-w-3xl text-gray-600 text-center">
                <p className="text-lg mb-4">"Amazing service! The best car rental experience I've ever had!"</p>
                <p>- Satisfied Customer</p>
            </div>
        </div>
    );
}

export default AboutUs;
