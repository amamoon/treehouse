import Image from 'next/image';
import StyledButton from '@/components/StyledButton/StyleButton';

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Image src="/treehouse_logo.png" alt="Treehouse Logo" width={128} height={111} className="items-center"></Image>
            <h1 className="text-[32px] text-[#5A6900] font-bold mb-10">Create Pod</h1>
            <div className="flex flex-col items-center gap-6">
                <input type="text" name="pod_name" id="pod_name" placeholder="Pod Name" required className="border-[#7EA756] text-[#7EA756] border-b-2 bg-[#FDEEB8] placeholder-[#4C6700] placeholder-opacity-75" />
                <input type="text" name="description" id="description" placeholder="Description (Optional)" className="border-[#7EA756] text-[#7EA756] border-b-2 bg-[#FDEEB8] placeholder-[#4C6700] placeholder-opacity-75" />
                <input type="text" name="location" id="location" placeholder="Location (Optional)" className="border-[#7EA756] text-[#7EA756] border-b-2 bg-[#FDEEB8] placeholder-[#4C6700] placeholder-opacity-75" />
            </div>
            <StyledButton text={"Continue ->"} className="w-50 justify-end"/>
        </div>
    );
}