import letter_img from '../assests/images/contact.png';

const Contact = () => {
    return (
        <div className='mt-40 flex justify-between items-center px-44 py-2 '>
            <h1 className='text-6xl text-black font-bold leading-[5rem]'>Have questions ? Shoot us an <span className='text-green-700'>Email</span>.</h1>
            <img src={letter_img} className="w-1/2" alt="letter-img" />
        </div>
    );
};

export default Contact;