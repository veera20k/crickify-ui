import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/cricket-ball.png';

export default function Header() {
    return (
        <header className='sticky top-0 z-1'>
            <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
                <nav className="py-2 md:py-4 relative h-16">
                    <div className="container mx-auto flex items-center absolute">
                        <Image src={logo} width={30} height={30} alt="LOGO" priority className='w-auto'/> <span className='font-bold ml-2 text-xl'>Crickify</span>
                        <div className="flex-grow text-center">
                            <Link href='/' className="p-2 lg:px-4 rounded">
                                Live Score
                            </Link>
                            <Link href='/news' className="p-2 lg:px-4 rounded">
                                News
                            </Link>
                        </div>
                    </div>
                </nav>
                <hr className="border-t border-gray-300" />
            </div>
        </header>
    );
}
