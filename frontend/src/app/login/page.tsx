import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import StyledButton from '@/components/StyledButton/StyleButton';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4 h-screen">
            <h2 className="text-2xl font-bold mb-6 text-[#7EA756]">Log in</h2>

            <div className="flex flex-col space-y-4 mb-6">
                <input
                className="px-4 py-2 w-64 bg-[#FDEEB8] rounded-full border-2 border-[#8D9956] focus:border-[#7EA756]"
                type="email"
                placeholder="Email"
                />
                <input
                className="px-4 py-2 w-64 bg-[#FDEEB8] rounded-full border-2 border-[#8D9956] focus:border-[#7EA756]"
                type="password"
                placeholder="Password"
                />
            </div>

            <StyledButton text={"Continue"} className="w-64"/>

            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> 
                <span className="absolute px-3 font-medium text-black -translate-x-1/2 bg-[#FDEEB8] left-1/2">
                    or
                </span>
            </div>

            <div className="text-sm mb-2">Continue with:</div>

            <div className="flex gap-4">
                <button type="button" className="text-black w-full  bg-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                    <FcGoogle className="w-5 h-5"/> 
                    Sign up with Google
                    <div></div>
                </button>
                <button type="button" className="text-black w-full  bg-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                    <FaFacebook className="w-5 h-5 text-blue" />
                    <span>Sign up with Facebook</span>
                </button>
            </div>
        </div>
    );
}