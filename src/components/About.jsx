const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">
          About Velo Mart
        </h1>

        {/* Core Values Section */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to
                exceed expectations and build lasting relationships through
                exceptional service and support.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600">
                We are committed to offering a curated selection of high-quality
                products that meet the diverse needs and preferences of our
                customers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Integrity & Trust
              </h3>
              <p className="text-gray-600">
                We operate with transparency and honesty. Building trust with
                our customers, partners, and community is paramount to our
                success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Passion for Excellence
              </h3>
              <p className="text-gray-600">
                We are passionate about what we do and constantly seek ways to
                improve, innovate, and deliver the best possible shopping
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Shop With Us Section */}
        <section className="bg-blue-800 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Why Shop With Velo Mart?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
              <p>
                We carefully select every item in our store, ensuring you get
                access to top-quality products and the latest trends.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Prices</h3>
              <p>
                Enjoy great value without compromising on quality. We work hard
                to offer competitive prices across our entire range.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p>
                Our friendly customer support team is always ready to help you
                with any questions or concerns, ensuring a smooth shopping
                journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Secure & Easy Shopping
              </h3>
              <p>
                Shop with confidence thanks to our secure checkout process and
                user-friendly website design.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    // <div className="py-12 px-6 sm:px-12 lg:px-24">
    //   <div className="max-w-7xl mx-auto text-center">
    //     <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
    //       About Velo Mart
    //     </h1>
    //     <p className="text-xl text-gray-600 mb-8">
    //       Welcome to Velo Mart, your one-stop destination for all things
    //       cycling! Whether you're a seasoned cyclist or just starting out, we
    //       offer a wide range of high-quality bikes, accessories, and apparel to
    //       enhance your cycling experience.
    //     </p>

    //     <div className="lg:grid lg:grid-cols-2 lg:gap-12">
    //       <div className="mb-8 lg:mb-0">
    //         <h2 className="text-3xl font-bold text-blue-800 mb-4">
    //           Our Mission
    //         </h2>
    //         <p className="text-lg text-gray-600">
    //           At Velo Mart, our mission is simple: to provide cyclists with the
    //           best products, expert advice, and exceptional service. We are
    //           passionate about cycling and aim to create a community where
    //           cyclists of all levels can find the gear they need to succeed.
    //         </p>
    //       </div>
    //       <div>
    //         <h2 className="text-3xl font-bold text-blue-800 mb-4">
    //           Why Choose Us?
    //         </h2>
    //         <ul className="list-disc list-inside text-lg text-gray-600">
    //           <li>High-quality bikes and accessories from trusted brands</li>
    //           <li>Fast and reliable shipping</li>
    //           <li>Expert customer support and product advice</li>
    //           <li>Wide selection of cycling apparel and gear</li>
    //           <li>Dedicated to building a cycling community</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="mt-12">
    //       <h2 className="text-3xl font-bold text-blue-800 mb-4">
    //         Join the Velo Mart Community
    //       </h2>
    //       <p className="text-lg text-gray-600">
    //         Whether you're looking to upgrade your bike or get new accessories,
    //         we have everything you need to elevate your cycling experience. Join
    //         our growing community of cycling enthusiasts and discover the
    //         difference Velo Mart can make!
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
