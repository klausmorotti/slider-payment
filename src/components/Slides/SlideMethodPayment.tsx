// Images
import DolaresSimbol from '../../assets/dolares.png';
import CreditCardSimbol from '../../assets/credit-card.png';
import DolarSimbol from '../../assets/dollar-bill.png';
import BankSimbol from '../../assets/bank.png';

// Styles
import styles from '../../styles.module.css';

// Redux
import { useDispatch } from 'react-redux';
import { setMethodPayment } from '../../redux/reducer/useReducer';
import { useState } from 'react';
import React from 'react';

export const SlideMethodPayment = () => {

    const [slide, setSlide] = useState(0);

    const Dispatch = useDispatch();

    const setMoney = () => {
        Dispatch( setMethodPayment('Dinheiro') );
        setSlide(1);
    }
    const setCard = () => {
        Dispatch( setMethodPayment('Cartão') );
        setSlide(2);
    }
    const setPix = () => {
        Dispatch( setMethodPayment('Pix') );
        setSlide(3);
    }

    return (
        <div className="flex-1 h-full p-8">
            <div className="flex items-center">
                <img src={DolaresSimbol} alt="" width={30} />
                <h1 className="ml-3 text-1xl sm:text-2xl font-semibold">Método de Pagamento</h1>
            </div>

            <div className="w-full h-full py-12 flex flex-col justify-between sm:flex-row items-center">
                <div className={`w-full h-auto py-4 transition ease duration-500 transform hover:scale-105 hover:bg-cyan-100 flex-col flex-1  ${ slide == 1 ? 'bg-cyan-100' : 'bg-[#E6E5E5]' } flex justify-center items-center rounded-md cursor-pointer active:bg-cyan-100`} onClick={setMoney}>
                    <img src={DolarSimbol} alt="Icone Dolar" className="w-12" />
                    <h3 className="mt-1 text-2xl font-semibold">Dinheiro</h3>
                </div>
                <div className={`w-full h-auto py-4 transition ease duration-500 transform hover:scale-105 hover:bg-cyan-100 flex-col flex-1 ${ slide == 2 ? 'bg-cyan-100' : 'bg-[#E6E5E5]' } flex justify-center items-center my-4 sm:mx-4 rounded-md cursor-pointer active:bg-cyan-100`} onClick={setCard}>
                    <img src={CreditCardSimbol} alt="Icone Pix" className="w-12" />
                    <h3 className="mt-1 text-2xl font-semibold">Cartão</h3>
                </div>
                <div className={`w-full h-auto py-4 transition ease duration-500 transform hover:scale-105 hover:bg-cyan-100 flex-col flex-1 ${ slide == 3 ? 'bg-cyan-100' : 'bg-[#E6E5E5]' } flex justify-center items-center rounded-md cursor-pointer`} onClick={setPix}>
                    <img src={BankSimbol} alt="Icone Cartão de crédito" className="w-12" />
                    <h3 className="mt-1 text-2xl font-semibold">Pix</h3>
                </div>
            </div>
        </div>
    )
}