import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="h-52 md:px-14 px-5 bg-[#1D232B] text-white md:flex justify-between items-center">
            <div>
                <h4 className="text-2xl">BK Uddin</h4>
                <h2 className="text-5xl text-sky-500">LET'S TALK</h2>

                <div className='flex space-x-5 text-2xl mt-3'>
                    <a href='https://www.facebook.com/bakhtiar.uddins/'><BsFacebook></BsFacebook></a>
                    <a href=''><BsTwitter></BsTwitter></a>
                    <a href='https://github.com/bkuddin'><BsGithub></BsGithub></a>
                </div>
            </div>

            <div className='w-96'>
                
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatum similique. Recusandae, unde nihil dicta distinctio ab quibusdam iusto modi tempore nesciunt nisi deserunt sapiente, ut eum doloribus pariatur in!</p>
               

            </div>
            
        </div>
    );
};

export default Footer;