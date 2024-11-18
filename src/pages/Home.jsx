import Feat from "../Components/Feat";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LatePro from "../Components/LatePro";


const Home = () => {
  return (
  <>
    <div className="bg-[url('src/assets/home-bg.jpg')] bg-cover bg-center min-h-[calc(100vh-64px)] w-full">
      <div className="h-svh w-full bg-gradient-to-tr from-gray-700 to-transparent flex flex-col items-center justify-center text-white px-4">
        <div className="pb-16 w-2/3">
        {/* Title */}
        <h1 className="text-6xl text-red-700 font-bold mb-4">Fresh Flowers</h1>

        {/* Subtitle */}
        <h2 className="text-4xl text-gray-800 font-semibold mb-6">Natural & Beautiful</h2>

        {/* Description */}
        <p className="max-w-2xl text-gray-300 text-lg w-1/2">
          Flowers always make people better, happier, and more helpful; they are sunshine, food, 
          and medicine to the soul.
        </p>
        <p className="text-lg my-4">
        <button type="button" className="text-white bg-red-800 hover:bg-red-600 rounded-xl py-2 px-4">Shop now!</button>
        </p>
        </div>
      </div>
    </div>
    <LatePro/>
    <Feat/>
    </>
  );
};

export default Home;

