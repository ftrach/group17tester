import React from 'react';

const AboutUs = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to G17</h1>
        <p className="text-lg text-gray-600 mb-8">
          At Group 17, we&apos;re all about style and technology. <br /> We blend the latest in tech with the trendiest streetwear to create a unique experience for our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is simple: to provide the stylish street tech enthusiasts with the coolest gadgets, accessories, and apparel that not only look good but also enhance their tech lifestyle.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Whether you&apos;re a fashion-forward techie looking for the latest smartwatch, a gadget guru searching for cutting-edge accessories, or simply someone who appreciates the fusion of style and technology, Group 17 is your go-to destination.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Join us on this exciting journey as we revolutionize the intersection of fashion and technology. Welcome to Group 17—where style meets innovation!
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
