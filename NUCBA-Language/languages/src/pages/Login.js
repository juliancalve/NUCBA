import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

const Login = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('login.title')}</h1>
            <Link to='/register'>{t('login.noAccount')}</Link>
        </div>
    )
}

export default Login
