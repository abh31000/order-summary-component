export default function Card(){
    return(
        <>
        <div className="bg-white w-fit mx-auto my-32">
        <img src="src/assets/illustration-hero.svg" alt="" />
            <div className="w-96 mx-auto">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className="">
                    <h2>Annual Plan</h2>
                    <h4>$59.99/year</h4>
                    <button>Change</button>
                </div>
                <button>Proceed to Payment</button>
                <button>Cancel Order</button>
            </div>
        </div>
        </>
    )
}