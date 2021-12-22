import { useState } from "react"
import { updateLang } from "../../languages";

const LanguageSelector = () => {

    const [lang, setLang] = useState(localStorage.getItem('lang') || 'es');

    const onChangeLang = (e) => {
        const newLang = e.target.value;
        setLang(newLang);
        updateLang(newLang);
    }


    return (
        <div>
            <select defaultValue={lang} onChange={onChangeLang}>
                <option value='es'>español</option>
                <option value='en'>english</option>
                <option value='pt'>portugues</option>
            </select>
        </div>
    )
}

export default LanguageSelector
