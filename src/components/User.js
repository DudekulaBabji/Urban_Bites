//import profilePic from "../components/assets"
const User = () =>{
    return (
        <div className ="max-w-4xl mx-auto p-6 text-center">

            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>


            <p className="text-lg text-gray-600 mb-8">
        Welcome to <span className="font-semibold">Urban Bites – Your Food, Delivered Fast & Fresh.</span> – 
        Hungry? We’ve got you covered! At Urban Bites, we connect you to your favorite restaurants and hidden local gems, delivering hot and fresh meals right to your doorstep. From quick snacks to full meals, we bring a wide variety of flavors, made with love, at lightning speed. Our mission is simple – to make food ordering easy, enjoyable, and hassle-free, so you can focus on what matters most: enjoying every bite.
      </p>



            {/* Founder Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transition transform hover:-translate-y-1 hover:shadow-2xl">
        <img
          src="/mypic.jpg" // replace with your profile pic
          alt="Founder"
          className="w-40 h-40 rounded-full border-4 border-pink-300 shadow-lg mb-4 object-cover"
        />
        <h2 className="text-3xl font-bold text-gray-900">Babji</h2>
        <p className="text-gray-600">Founder & Developer</p>
        <p className="mt-2 text-gray-500">
          From Pulivendula 🌍 | Passionate about food & technology.
        </p>
        <div className="mt-5 flex space-x-6">
          <a href="mailto: https://github.com/DudekulaBabji" className="text-blue-500 hover:underline">
            🐙 GitHub
          </a>
          <a href="babjid786@gmail.com" className="text-blue-500 hover:underline">
           📧 Email
          </a>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-pink-100 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To deliver tasty, fresh, and affordable meals with a seamless 
            ordering experience.
          </p>
        </div>
        <div className="bg-pink-100 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become the most trusted and loved food delivery platform in your city.
          </p>
        </div>
      </div>

        </div>
    )
}

export default User;