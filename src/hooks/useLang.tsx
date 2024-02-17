import { useEffect, useState, useRef } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

type LangType = "id" | "en";

const useLang = () => {
    const [lang, setLang] = useState<LangType>("en");
    const { i18n: i18nInstance } = useTranslation();
    const i18nRef = useRef(i18nInstance);

    const changeLang = (lang: LangType) => {
        setLang(lang);
        localStorage.setItem("lang", lang);
        i18nRef.current.changeLanguage(lang);
    };

    useEffect(() => {
        const lang = localStorage.getItem("lang") as LangType;
        // i18nRef.current.changeLanguage(lang);
        setLang(lang || "en");
    }, []);

    return {
        lang,
        changeLang,
    };
};

export default useLang;
