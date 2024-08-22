import React from "react";
import { useLanguageContext } from "../context/LanguageContext";




const AboutSection = () => {
  const { t } = useLanguageContext();

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t("aboutSection.Header1")}</h2>
          <p className="mt-4 text-gray-600">
          {t("aboutSection.line1")}
          </p>
        </div>
        <div className="flex flex-wrap flex-col xl:flex-row mb-8 text-center text-pretty">
          <div className="w-full xl:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("aboutSection.Header2")}</h3>
              <p className="text-gray-600">
              {t("aboutSection.line2")}
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("aboutSection.Header3")}</h3>
              <p className="text-gray-600">
              {t("aboutSection.line3")}
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("aboutSection.Header4")}</h3>
              <p className="text-gray-600">
              {t("aboutSection.line4")}
              </p>
            </div>
          </div>
        </div>
        <div className="leading-tight text-center text-pretty">
<p className='font-semibold'> {t("aboutSection.line5")}</p>    
<br/>
<p className='font-normal'> {t("aboutSection.line6")}</p> 
<br/>
<p className='font-normal'> {t("aboutSection.line7")}</p>
     </div>
 </div>
    </section>
  );
};

export default AboutSection;
