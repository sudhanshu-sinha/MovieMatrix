import {useNavigate} from "react-router-dom";

function Contact() {
    const navigate= useNavigate();
    return (
        <div className="h-screen w-screen">
            <div className="p-[2%] relative">
                <i className="text-2xl font-semibold text-zinc-400 hover:text-[#6556cd] ri-arrow-left-long-line pr-7"
                   onClick={() => navigate(-1)}>
                </i>
            </div>

            {/*<div className="p-[2%]">*/}
            {/*    <h1 className="text-2xl font-semibold text-zinc-400">*/}
            {/*        <i className="hover:text-[#6556cd] ri-arrow-left-long-line pr-7"*/}
            {/*           onClick={() => navigate(-1)}>*/}
            {/*        </i>*/}
            {/*        Contact Us*/}
            {/*    </h1>*/}
            {/*</div>*/}
            <div className="flex flex-col absolute top-[8%] left-[44%] justify-center items-center">
                <h1 className="text-4xl font-black text-[#eab308]">Contact Us</h1>
            </div>
            <form className="flex flex-col justify-center items-center mt-16">
                <label className="text-2xl font-semibold text-[#eab308]">Send us a message</label>
                <label className="text-s text-zinc-400 mt-6">Full Name</label>
                <input className="w-[25%] rounded" type="text" placeholder="Name"/>
                <label className="text-s text-zinc-400 mt-6">Email</label>
                <input className="w-[25%] rounded" type="email" placeholder="Email"/>
                <label className="text-s text-zinc-400 mt-6">Subject</label>
                <input className="w-[25%] rounded" type="text" placeholder="Subject"/>
                <label className="text-s text-zinc-400 mt-6">Message</label>
                <textarea className="w-[25%] rounded" placeholder="Message"/>
                <button className="bg-[#eab308] text-white px-8 py-2 rounded mt-8">Send</button>
            </form>

        </div>
    )
}

export default Contact;