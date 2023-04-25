export default function Card(){
    return(
        <>
        <div className="bg-white w-fit mx-auto my-32 font-['Red_Hat_Display']">
        <img src="src/assets/illustration-hero.svg" alt="" />
            <div className="w-96 mx-auto ">
                <h1 className="">Order Summary</h1>
                <p className="">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className="">
                    <h2 className="">Annual Plan</h2>
                    <h4 className="">$59.99/year</h4>
                    <button className="">Change</button>
                </div>
                <button className="">Proceed to Payment</button>
                <button className="">Cancel Order</button>
            </div>
        </div>
        </>
    )
}