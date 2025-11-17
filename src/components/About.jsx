const About = () => {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-12">
          About Velo Mart
        </h1>

        {/* Core Values Section */}
        <section className="mb-16 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold  mb-6 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold  mb-2">
                Customer Focus
              </h3>
              <p className="">
                Our customers are at the heart of everything we do. We strive to
                exceed expectations and build lasting relationships through
                exceptional service and support.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold  mb-2">
                Quality Products
              </h3>
              <p className="">
                We are committed to offering a curated selection of high-quality
                products that meet the diverse needs and preferences of our
                customers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold  mb-2">
                Integrity & Trust
              </h3>
              <p className="">
                We operate with transparency and honesty. Building trust with
                our customers, partners, and community is paramount to our
                success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold  mb-2">
                Passion for Excellence
              </h3>
              <p className="">
                We are passionate about what we do and constantly seek ways to
                improve, innovate, and deliver the best possible shopping
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Shop With Us Section */}
        <section className=" p-8 rounded-lg shadow-lg">
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
    
  );
};

export default About;
