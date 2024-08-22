import { useLanguageContext } from "../context/LanguageContext";
const LanguageSelector = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <select
    //   style={{
    //     width: 200,
    //     position: "absolute",
    //     top: 10,
    //     left: 10,
    //     height: "40px",
    //   }}
    className="bg-transparent rounded-md cursor-pointer"
      onChange={onClickLanguageChange}
    >
      {Object.keys(languages).map((lng) => (
        <option key={languages[lng].nativeName} value={lng} className="bg-gray-800 rounded-md">
          {languages[lng].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;