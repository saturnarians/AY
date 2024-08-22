import React from "react";
import { useLanguageContext } from "../context/LanguageContext";


const OurServices = () => {

  const { t } = useLanguageContext();
  return (
    <section className="bg-gray-100 py-12 text-center text-pretty border-b-2">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t('serviceComp.line1')}</h2>
          <p className="mt-4 text-gray-600">
            {t('serviceComp.line2')}
          </p>
        </div>
        <div className="flex flex-wrap flex-col xl:flex-row 2xl-row mx-4 text-ellipsis tracking-tight leading-tight">
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('serviceComp.line3')}</h3>
              <p className="text-gray-600 ">
              {t('serviceComp.line4')}
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('serviceComp.line5')}</h3>
              <p className="text-gray-600">
              {t('serviceComp.line6')}
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('serviceComp.line7')}</h3>
              <p className="text-gray-600">
              {t('serviceComp.line8')}   
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 2xl:w-1/4 px-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('serviceComp.line9')}</h3>
              <p className="text-gray-600">
              {t('serviceComp.line10')}    
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;