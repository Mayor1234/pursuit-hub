import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const data = [
  {
    title: 'About',
    url: 'about',
  },
  {
    title: 'Contact',
    url: 'contact',
  },
  {
    title: 'Terms of Use',
    url: 'terms-of-use',
  },
  {
    title: 'Privacy Policy',
    url: 'privacy-policy',
  },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto my-10 md:my-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="font-medium pb-4 md:pb-0">
            <Link href="/">
              <h1 className="text-3xl">
                Pursuit{' '}
                <span className="text-pry font-bold tracking-wider">Hub</span>
              </h1>
            </Link>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col justify-between items-center text-gray-500">
          <ul className="flex flex-wrap justify-center items-center  gap-4 pb-4">
            {data.map((item, index) => (
              <Link key={index} href={`${item.url}`}>
                <li className="cursor-pointer text-sm transition-all delay-150 duration-300 ease-in-out hover:text-pry">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div>
            <p className="text-sm">
              &copy; {year} Pursuit Hub Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;