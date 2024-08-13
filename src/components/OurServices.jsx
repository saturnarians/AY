import React from "react";

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We offer a comprehensive range of services designed to enhance and manage the public image of our celebrity clients.
          </p>
        </div>
        <div className="flex flex-wrap flex-col xl:flex-row 2xl-row mx-4 text-ellipsis tracking-tight leading-tight">
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Public Relations</h3>
              <p className="text-gray-600 ">
                We specialize in representing celebrities and managing their public image. Our services include coordinating interviews and appearances, managing social media, and handling media inquiries.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Celebrity Bookings & Events</h3>
              <p className="text-gray-600">
                We streamline the booking process for celebrity appearances at various events, ensuring a smooth experience for everyone involved.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Interviews</h3>
              <p className="text-gray-600">
                We are excited to facilitate interviews with our distinguished celebrities, ensuring a collaborative and productive experience.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Appearances</h3>
              <p className="text-gray-600">
                We excel at organizing various engagements, including speaking events, book signings, concerts, and red-carpet appearances, providing a seamless experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;