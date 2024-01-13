import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav className="py-2 md:py-4">
                <div className="container mx-auto flex items-center">
                    <Image src="/images/logo.png" width={100} height={50} alt="LOGO" priority className='w-auto'/>
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
            <hr />
        </header>
    );
}
