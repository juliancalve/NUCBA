import { useState } from "react"
import { useTranslation } from "react-i18next";

const Balance = () => {

    const { t } = useTranslation();

    const [asset, setAsset] = useState('ARS');
    const [amount, setAmount] = useState(0);

    const onChangeAsset = e => {
        setAsset(e.target.value);
    }


    const onChangeAmount = e =>{
        setAmount(e.target.value);
    }

    return (
        <div>
            <h1>{t('balance.title')}</h1>
            <select defaultValue={asset} onChange={onChangeAsset}>
                <option value='ARS'>{t('balance.assets.ars')}</option>
                <option value='USD'>{t('balance.assets.usd')}</option>
                <option value='MXS'>{t('balance.assets.mxs')}</option>
            </select>

            <input placeholder="amount" value={amount} onChange={onChangeAmount}/>

            <h6>{t('balance.resultText', { asset, amount })}</h6>
            
        </div>
    )
}

export default Balance
