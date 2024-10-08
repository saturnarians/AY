import React from 'react';
import Custom from '../assets/custom.jpg';
import David from '../assets/members/phast5b53.png';
import Sue from '../assets/members/phast53a1.png';
import Martin from '../assets/members/phastb986.png';
import Gorgia from '../assets/members/phastfb10.png';
// import Julia from '../assets/members/phast5b53.png';
import Sally from '../assets/members/phast2669.png';
import Ruth from '../assets/members/phast35ed.png';
import Corey from '../assets/members/phastc282.png';
import Connor from '../assets/members/phast2a54.png';
import Anro from '../assets/members/phast629a.png';
import Michaela from '../assets/members/phast9473.png';
import Shannon from '../assets/members/phastfbd9.png';
import Peter from '../assets/members/phastf166.png';
import Bradley from '../assets/members/phast790f.png';
import Julia from '../assets/members/phast.png';
import { useLanguageContext } from "../context/LanguageContext";
import TeamMember from "../components/TeamMember";

const teamMembers = [
  {
    id:'davidHarry',
    name: 'David Harry',
    title: 'CEO',
    image: David,
    description: `The company, set up by managing director David Hahn, has been in the media business for more than four decades. David himself has invaluable experience in both the TV and music industries, having worked for Sky TV and as a recording engineer for the likes of CBS, DJM, and the infamous Beatle-owned Apple.`,
  },
  {
    id: 'sueHarry',
    name: 'Sue Harry',
    title: 'Agent & Bookings Manager',
    image: Sue, 
    description: `Sue heads up the TV and Corporate team and is no stranger to the music industry and TV industries. She started her working life at Chappell’s Music Publishing and worked in A & R for many years with artists including Barry Manilow and The Communards.`,
  },
  {
    id: 'martinAstley',
    name: 'Martin Astley',
    title: 'Head of IT',
    image: Martin, 
    description: `Martin is a highly experienced IT security & infrastructure expert with a demonstrated history working for celebrities and some very high-profile organisations. He manages social media accounts, websites, online shops, marketing campaigns, and more.`,
  },
  {
    id: 'georgiaWade',
    name: 'Georgia Wade',
    title: 'Manager Assistant',
    image: Gorgia, 
    description: `Georgia brings a vibrant fusion of creativity and efficiency to our team. With roots deeply embedded in fashion, she transitions her expertise into the corporate realm, infusing fresh perspectives and innovative solutions into every task she undertakes.`,
  },
  {
    id: 'maliaEngland',
    name: 'Malia England',
    title: 'Head of Theatre & Live',
    image: Julia, 
    description: `Julia embarked on her journey in the entertainment industry at 18, honing her skills at the Birmingham School of Speech Training and Dramatic Art. She has worked with high-profile clients and has a dynamic career in theatre and tour bookings.`,
  },
  {
    id: 'sallyBerkins',
    name: 'Sally Berkins',
    title: 'Artist Relations Manager',
    image: Sally, 
    description: `Sally King’s journey in entertainment began with dance training, leading to a dynamic career as a dancer with the Young Generation dance group. She is now responsible for artist relations and casting at Active agents.`,
  },
  {
    id:'ruth',
    name: 'Ruth',
    title: 'Advertising & Social Media Manager',
    image: Ruth, 
    description: `Ruth leverages her extensive knowledge of digital advertising to create and execute campaigns that drive results. She excels in crafting targeted ad strategies, ensuring maximum reach and engagement.`,
  },
  {
    id:'corey',
    name: 'Corey',
    title: 'Graphic Design Lead',
    image: Corey, 
    description: `Corey is the creative visionary, serving as our Graphic Design Lead. He oversees all graphic design projects, ensuring each aligns with our marketing goals and resonates with our audience.`,
  },
  {
    id:'connor',
    name: 'Connor',
    title: 'Graphic Designer',
    image: Connor, 
    description: `Connor is a talented Graphic Designer with a strong background in visual arts. He plays a crucial role in developing our brand's visual identity, ensuring that our visual content is both aesthetically pleasing and functional.`,
  },
  {
    id:'anro',
    name: 'Anro',
    title: 'Graphic Designer',
    image: Anro, 
    description: `Anro is a skilled Graphic Designer known for his innovative designs. He collaborates with the marketing and content teams to create compelling graphics, ensuring consistency with our brand identity.`,
  },
  {
    id:"shannon",
    name: 'Shannon',
    title: 'Marketing Executive',
    image: Shannon, 
    description: `Shannon is a dynamic Marketing Executive with a background in digital marketing. She develops and implements marketing strategies that drive engagement and growth, ensuring our marketing efforts are impactful and relevant.`,
  },
  {
    id:"michaela",
    name: 'Michaela',
    title: 'Marketing Administrator',
    image: Michaela, 
    description: `Michaela ensures the smooth operation of our marketing activities. Her support is crucial in maintaining efficient workflows, enabling our team to focus on creative and strategic initiatives.`,
  },
  {
    id:"peter",
    name: 'Peter',
    title: 'SEO Lead',
    image: Peter, 
    description: `Peter is the driving force behind our SEO efforts. With extensive experience in SEO strategy, he enhances our online visibility and drives organic traffic, ensuring our website ranks highly on search engines.`,
  },
  {
    id:'bradley',
    name: 'Bradley',
    title: 'Graphic Designer',
    image: Bradley, 
    description: `Bradley is recognized for his creative excellence and innovative design solutions. He contributes significantly to our visual content, ensuring that our designs are visually appealing and effectively communicate our brand message.`,
  },
];

const AboutUs = () => {

const { t } = useLanguageContext();

  return (
    <div>
      <div className="relative">
        <img src={Custom} alt="About Us" className='bg-cover w-full h-[600px]' />
        <div className="absolute xl:top-[20px] top-[20px] mx-2 xl:mx-6 text-white leading-tight tracking-tighter 2xl:leading-normal 2xl:tracking-normal">
          <h1 className="text-[50px] font-bold mt-6">  {t('aboutPage.line1')}</h1>
          <p className="2xl:py-4 p-1 text-left text-[13px] xl:text-[16px]">
            <span className="font-semibold">{t('aboutPage.line2')}:</span>{t('aboutPage.line3')}
          </p>
          <p className="2xl:py-4 p-1 text-left text-[13px] xl:text-[16px]">
            <span className="font-semibold">{t('aboutPage.line4')}:</span> {t('aboutPage.line5')}
          </p>
          <p className="2xl:py-4 p-1 text-left text-[13px] xl:text-[16px]">
            <span className="font-semibold">{t('aboutPage.line6')}:</span> {t('aboutPage.line7')}
          </p>
          <p className="py-2 text-[13px] xl:text-[16px]">
          {t('aboutPage.line8')}
          </p>
          <p className="py-2 text-[13px] xl:text-[16px]">
          {t('aboutPage.line9')}
          </p>
          <p className="py-2 xl:block hidden text-[13px] xl:text-[16px]">
          {t('aboutPage.line10')}
          </p>
        </div>
      </div>
      <h1 className="xl:text-[50px] text-[30px] my-8 text-center font-bold text-gray-800">{t('aboutPage.line11')}</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 mx-4">
        {/* {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-56 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-sm text-gray-700 mb-4">{member.title}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))} */}
            {teamMembers.map(member => (
      <TeamMember key={member.id} {...member} />
    ))}
      </div>
    </div>
  );
};

export default AboutUs;
