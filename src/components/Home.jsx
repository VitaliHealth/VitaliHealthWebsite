import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills, faSackDollar, faHeartbeat } from '@fortawesome/free-solid-svg-icons';



function Home() {
  return (
    <>
     {/* Main Section */}
      <section id="home" className="min-h-screen md:h-screen mt-20 md:mt-20 text-center md:text-left flex flex-col justify-between">
        {/* Text Content */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-8 md:mb-0 w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-teal mb-6">Welcome to Vitali Health</h1>
            <p className="text-sm md:text-base w-full sm:w-5/6 mb-6 mx-auto md:mx-0">
              Welcome to <strong className="text-primary-green">Vitali Health</strong> —your personalized path to better hypertension management. 
              From real-time tracking to expert guidance, we provide the tools and support you need to 
              take control of your health. Empower your journey today!
            </p>
            <AnchorLink href="#aboutus">
              <button className="px-6 py-3 bg-teal text-white text-sm md:text-base rounded-3xl hover:bg-coral transition-colors duration-300">
                Get Started
              </button>
            </AnchorLink>
          </div>

          {/* Image */}
          <div className="h-auto w-full md:w-1/3 mt-20 md:mt-0">
            <img
              src="/images/community.jpeg"
              alt="Lady working out"
              className="object-cover rounded-[20%_56%_26%_86%/42%_60%_20%_22%] w-full"
            />
          </div>
        </div>

        {/* Card Grid */}
        <div className="px-2 sm:px-4 md:px-8 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="bg-white shadow-2xl rounded-3xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <FontAwesomeIcon icon={faPills} className="text-teal w-10 h-10 mb-4 mx-auto" />
            <h2 className="text-lg font-bold text-teal mb-2">Reduce medication</h2>
            <p className="text-sm md:text-base">
              Natural blood pressure management to lessen reliance on medication.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-soft-coral shadow-2xl rounded-3xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <FontAwesomeIcon icon={faSackDollar} className="w-10 h-10 mb-4 mx-auto" />
            <h2 className="text-lg font-bold mb-2">Lower health care costs</h2>
            <p className="text-sm md:text-base">
              Preventive care to reduce medical expenses and complications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-2xl rounded-3xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <FontAwesomeIcon icon={faHeartbeat} className="text-teal w-10 h-10 mb-4 mx-auto" />
            <h2 className="text-lg font-bold text-teal mb-2">Improve quality of life</h2>
            <p className="text-sm md:text-base">
              Personalized plans for better health, more energy, and improved blood pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Hypertension Section */}
      <section id="aboutus" className="h-screen sm:h-screen px-6 md:px-16 mt-12 flex flex-col md:flex-row gap-8 md:text-left items-center">
        {/* Image Section */}
        <div className="flex-1 w-full md:w-1/3">
          <img
            src="/images/meditating1.jpeg"
            alt="African woman exercising with focus and energy"
            className="object-cover rounded-[20%_56%_26%_86%/42%_60%_20%_22%] w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full md:w-2/3 mt-8 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-teal text-center md:text-left">
            A Unified Approach to Hypertension Management
          </h1>
          <p className="text-sm md:text-base mb-4">
            We provide an integrated solution combining nutrition, fitness, stress management, 
            and lifestyle changes to empower patients with hypertension to take control of their health.
          </p>
          <p className="text-sm md:text-base mb-4">Our platform offers:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>
              <strong className="text-teal">Tailored Nutrition Plans:</strong> Custom dietary recommendations for optimal blood pressure.
            </li>
            <li>
              <strong className="text-teal">Effective Fitness Regimens:</strong> Personalized workouts to enhance cardiovascular health.
            </li>
            <li>
              <strong className="text-teal">Stress Management Techniques:</strong> Proven strategies to lower stress and its effects on blood pressure.
            </li>
            <li>
              <strong className="text-teal">Lifestyle Coaching:</strong> Expert guidance for sustainable lifestyle changes.
            </li>
          </ul>
          <p className="text-sm md:text-base mt-6">
            By addressing these areas, we help patients reduce medication reliance and improve overall well-being.
            We also foster a supportive community to combat isolation, enhance treatment adherence, 
            and promote better health outcomes.
          </p>
        </div>
      </section>
      <section id="whatwedo" className="h-fit sm:min-h-screen px-6 md:px-16 mt-12 flex flex-col md:flex-row gap-8 md:text-left items-center bg-gray-200">
        {/* Image Section */}
        <div className="flex-1 w-full md:w-2/3 mt-8 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-primary-green text-center md:text-left">
            Tired of managing hypertension
          </h1>
          <p className="text-sm md:text-base mb-4">
          Join our exclusive prototype and be among the first 20 to experience the future of hypertension management! 
          </p>
          <p className="text-sm md:text-base mb-4">Our innovative solution offers:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>
              <strong className="text-primary-green">Personalized support:</strong> Tailored recommendations just for you.
            </li>
            <li>
              <strong className="text-primary-green">Real-time monitoring:</strong> Track your progress and stay informed.
            </li>
            <li>
              <strong className="text-primary-green">Expert guidance:</strong> Access one-on-one consultations with top health professionals, including doctors, 
              nutritionists, fitness experts, stress management specialists, and lifestyle coaches..
            </li>
          </ul>
          <p className="text-sm md:text-base mt-6">
            Join now and take control of your health!
          </p>
        </div>
        <div className="flex-1 w-full md:w-1/3">
          <img
            src="/images/personalized.jpeg"
            alt="African woman exercising with focus and energy"
            className="object-cover w-full rounded-[20%_40%_26%_86%/42%_30%_53%_20%]"
          />
        </div>
        {/* Text Section */}
      </section>
    </>
  );
}

export default Home;