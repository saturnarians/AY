
import React from 'react';
import Custom from '../assets/custom.jpg';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'David Hahn',
    title: 'CEO',
    image: 'path_to_david_hahn_image.jpg', // Replace with actual image path
    description: `The company, set up by managing director David Hahn, has been in the media business for more than four decades. David himself has invaluable experience in both the TV and music industries, having worked for Sky TV and as a recording engineer for the likes of CBS, DJM, and the infamous Beatle-owned Apple.`,
  },
  {
    name: 'Sue Hahn',
    title: 'Agent & Bookings Manager',
    image: 'path_to_sue_hahn_image.jpg', // Replace with actual image path
    description: `Sue heads up the TV and Corporate team and is no stranger to the music industry and TV industries. She started her working life at Chappell’s Music Publishing and worked in A & R for many years with artists including Barry Manilow and The Communards.`,
  },
  {
    name: 'Martin Astley',
    title: 'Head of IT',
    image: 'path_to_martin_astley_image.jpg', // Replace with actual image path
    description: `Martin is a highly experienced IT security & infrastructure expert with a demonstrated history working for celebrities and some very high-profile organisations. He manages social media accounts, websites, online shops, marketing campaigns, and more.`,
  },
  {
    name: 'Georgia Sinclair',
    title: 'Manager Assistant',
    image: 'path_to_georgia_sinclair_image.jpg', // Replace with actual image path
    description: `Georgia brings a vibrant fusion of creativity and efficiency to our team. With roots deeply embedded in fashion, she transitions her expertise into the corporate realm, infusing fresh perspectives and innovative solutions into every task she undertakes.`,
  },
  {
    name: 'Julia England',
    title: 'Head of Theatre & Live',
    image: 'path_to_julia_england_image.jpg', // Replace with actual image path
    description: `Julia embarked on her journey in the entertainment industry at 18, honing her skills at the Birmingham School of Speech Training and Dramatic Art. She has worked with high-profile clients and has a dynamic career in theatre and tour bookings.`,
  },
  {
    name: 'Sally King',
    title: 'Artist Relations Manager',
    image: 'path_to_sally_king_image.jpg', // Replace with actual image path
    description: `Sally King’s journey in entertainment began with dance training, leading to a dynamic career as a dancer with the Young Generation dance group. She is now responsible for artist relations and casting at Active agents.`,
  },
  {
    name: 'Ruth',
    title: 'Advertising & Social Media Manager',
    image: 'path_to_ruth_image.jpg', // Replace with actual image path
    description: `Ruth leverages her extensive knowledge of digital advertising to create and execute campaigns that drive results. She excels in crafting targeted ad strategies, ensuring maximum reach and engagement.`,
  },
  {
    name: 'Corey',
    title: 'Graphic Design Lead',
    image: 'path_to_corey_image.jpg', // Replace with actual image path
    description: `Corey is the creative visionary, serving as our Graphic Design Lead. He oversees all graphic design projects, ensuring each aligns with our marketing goals and resonates with our audience.`,
  },
  {
    name: 'Connor',
    title: 'Graphic Designer',
    image: 'path_to_connor_image.jpg', // Replace with actual image path
    description: `Connor is a talented Graphic Designer with a strong background in visual arts. He plays a crucial role in developing our brand's visual identity, ensuring that our visual content is both aesthetically pleasing and functional.`,
  },
  {
    name: 'Anro',
    title: 'Graphic Designer',
    image: 'path_to_anro_image.jpg', // Replace with actual image path
    description: `Anro is a skilled Graphic Designer known for his innovative designs. He collaborates with the marketing and content teams to create compelling graphics, ensuring consistency with our brand identity.`,
  },
  {
    name: 'Shannon',
    title: 'Marketing Executive',
    image: 'path_to_shannon_image.jpg', // Replace with actual image path
    description: `Shannon is a dynamic Marketing Executive with a background in digital marketing. She develops and implements marketing strategies that drive engagement and growth, ensuring our marketing efforts are impactful and relevant.`,
  },
  {
    name: 'Michaela',
    title: 'Marketing Administrator',
    image: 'path_to_michaela_image.jpg', // Replace with actual image path
    description: `Michaela ensures the smooth operation of our marketing activities. Her support is crucial in maintaining efficient workflows, enabling our team to focus on creative and strategic initiatives.`,
  },
  {
    name: 'Peter',
    title: 'SEO Lead',
    image: 'path_to_peter_image.jpg', // Replace with actual image path
    description: `Peter is the driving force behind our SEO efforts. With extensive experience in SEO strategy, he enhances our online visibility and drives organic traffic, ensuring our website ranks highly on search engines.`,
  },
  {
    name: 'Bradley',
    title: 'Graphic Designer',
    image: 'path_to_bradley_image.jpg', // Replace with actual image path
    description: `Bradley is recognized for his creative excellence and innovative design solutions. He contributes significantly to our visual content, ensuring that our designs are visually appealing and effectively communicate our brand message.`,
  },
];

const AboutUs = () => {
  return (
    <div className="">
      <Header/>
      <Navbar />
    <div className="relative">
    <img src={Custom} alt="About Us" className='bg-cover w-full h-[600px]' />
    <div className=" absolute xl:top-[20px] top-[20px] mx-2 xl:mx-6 text-white leading-tight tracking-tighter 2xl:leading-normal 2xl:tracking-normal ">
    <h1 className="text-[50px] font-bold mt-6">About Us</h1>
    <p className="2xl:py-4 p-1 text-left text-[13px] xl:text-[16px]"><span className="font-semibold">Motto:</span> Bringing the best out of our clients.</p>
    <p className="2xl:py-4 p-1 text-left text-[13px] xl:text-[16px]"><span className="font-semibold">Goals:</span> To provide top-notch management services.</p>
    <p className="2xl:py-4 p-1 text-left text-[13px] xl:text-[16px]"><span className="font-semibold">Achievements:</span> Successfully managed over 100 celebrities.</p>
<p className="py-2 text-[13px] xl:text-[16px]">Welcome to our distinguished celebrity agency! We take immense pride in delivering outstanding results while maintaining the utmost confidentiality and discretion for our clients. Our team of professional yet approachable celebrity agents is committed to providing a seamless management experience, making it a pleasure to secure a celebrity for your project.</p>    
<p className="py-2 text-[13px] xl:text-[16px]">Our company, established by the esteemed managing director David Hahn, brings over forty years of experience in the media industry. David has an impressive background in television and music, with credentials that include Sky Television and roles as a sound engineer for iconic names like CBS, DJM, and The Beatles' Apple label. At Active agents, we are dedicated to advising and guiding our clients through the diverse pathways of the entertainment world. Our Celebrity Booking Agency’s divisions work together to enhance each client’s skills and strengths on an individualized basis.</p> 
<p className="py-2 xl:block hidden text-[13px] xl:text-[16px]">Our Celebrity Management Agency is deeply involved in the media industry, featuring a talented group of professionals with extensive experience and expertise in Celebrity Management, PR, Celebrity Endorsements, Media, Events, Brand Awareness Marketing, and Theatre Tour Bookings. We warmly invite you to join our family of satisfied clients and look forward to providing you with a top-notch experience tailored to your needs.</p>
  </div>
  </div>
      <h1 className="xl:text-[50px] text-[30px] my-8 text-center font-bold text-gray-800 ">Meet The Team</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 mx-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-sm text-gray-700 mb-4">{member.title}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
