import Button from "./elements/Button";
import homePagehome from "../assets/images/homePagehome.png";

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-1 mx-auto relative flex items-center-justify-between " style={{ height: '430px' }}>
            <div className="banner-deescription w-full md:w-1/2 p-3">
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
            <p className="font-semibold text-lg text-red-600 py-2"></p>
                <h2 className="mb-6 text-4xl font-Italic text-white">
                "Your Dream Property Awaits: Explore ResiLink's Extensive Listings Today!"
                </h2>
                {/* <p className="font-semibold text-lg text-red-600 py-2">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div> */}
            </div>
            <div className="banner-image w-full md:w-1/2 p-0 flex justify-end">
                <img src={homePagehome} alt="banner" height={105} className="max-h-110" />
            </div>
        </div>
    )
}