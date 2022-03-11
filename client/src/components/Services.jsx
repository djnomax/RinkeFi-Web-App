import { GiMoebiusTriangle } from 'react-icons/gi';
import { IoIosCube } from 'react-icons/io';
import { CgShapeHexagon } from 'react-icons/cg'

const ServiceCard = ({ color, title, icon, subtitle, link }) => (
    <div className='flex flex-row justify-start items-center p-3 m-2 cursor-pointer hover:shadow-2xl' onClick={() => window.open(`${link}`, "_blank")}>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='mt-2 text-white text-lg'>{title}</h1>
            <p className='mt-2 text-white text-sm md:w-full'>{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>Additional Web3.0
                        <br />
                        experience:
                    </h1>
                </div>
                <div className='flex-1 flex flex-col justify-start'>
                    <ServiceCard
                        color="bg-[#2952e3]"
                        title="Chainlink"
                        icon={<CgShapeHexagon fontSize={21} className="text-white" />}
                        subtitle="Decentralized oracle network to connect smart contracts with off-chain data and services"
                        link="https://chain.link"
                    />
                    <ServiceCard
                        color="bg-[#8945f8]"
                        title="Alchemy"
                        icon={<GiMoebiusTriangle fontSize={21} className="text-white" />}
                        subtitle="Powerful blockchain development platform providing a suite of useful node tools and APIs"
                        link="https://www.alchemy.com"
                    />
                    <ServiceCard
                        color="bg-[#5e464d]"
                        title="Ganache"
                        icon={<IoIosCube fontSize={21} className="text-white" />}
                        subtitle="A locally ran blockchain devleopment network used to quickly deploy contracts and run tests"
                        link="https://trufflesuite.com/ganache/"
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;