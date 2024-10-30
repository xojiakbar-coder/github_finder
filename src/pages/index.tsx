import Head from "next/head";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
// import Home from "./Home/page";
import HomePage from "./home";

const Root = () => {
  return (
    <>
      <Head>
        <title>Github Finder</title>
      </Head>
      <div className="flex flex-col w-full max-h-max">
        <Navbar />
        <div>
          <HomePage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
