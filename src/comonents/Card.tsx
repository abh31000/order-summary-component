export default function Card(){
    return(
        <>
        <div className="bg-white rounded-xl overflow-hidden drop-shadow-lg w-fit mx-auto my-7 font-['Red_Hat_Display']">
        <img className="w-fit" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682428063/illustration-hero_wxutdz.svg" alt="" />
            <div className="w-96 flex-col space-y-3 pt-8 p-6 mx-auto ">
                <h1 className="text-2xl text-center text-[#1f2f56] font-extrabold">Order Summary</h1>
                <p className="text-base text-center text-[#7280a7]">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className="flex justify-between pt-4 px-5">
                    <div className="flex justify-center space-x-4">
                        <img src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682428063/icon-music_jewbyp.svg" alt="" />
                        <div className="">
                            <h2 className="font-extrabold text-[#1f2f56]">Annual Plan</h2>
                            <h4 className="text-[#7280a7]">$59.99/year</h4>
                        </div>
                    </div>
                    <button className="text-[#3829e0] my-auto h-fit font-semibold underline decoration-2 transition duration-200 hover:no-underline hover:text-[#9266f8]">Change</button>
                </div>
                <div className="grid pt-5 gap-4">
                    <button className=" bg-[#3829e0] transition duration-200 hover:bg-[#8568c9] text-white  font-semibold p-2 rounded-lg">Proceed to Payment</button>
                    <button className="text-[#7280a7] transition duration-200 hover:text-[#1f2f56] font-semibold mb-3">Cancel Order</button>
                </div>
            </div>
        </div>
        </>
    )
}