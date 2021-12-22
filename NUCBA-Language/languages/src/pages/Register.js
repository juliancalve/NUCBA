import { useState } from "react";
import { useTranslation } from "react-i18next"

const Register = () => {

    const [email, setEmail] = useState('');

    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('register.title')}</h1>
            <form>
                <div>
                    <label>{t('register.form.emailInput.label')}</label>
                    <input type='email' placeholder="" />
                    {!email && <p></p>}
                </div>
                <button type="button">{t('register.form.button')}</button>
            </form>
        </div>
    )
}

export default Register
