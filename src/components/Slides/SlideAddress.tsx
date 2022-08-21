// Images
import LocationSimbol from '../../assets/map.png';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setCep, setStreet, setnumberHouse, setComplement, setDistrict, setCity, setUfDistrict } from '../../redux/reducer/useReducer';

// Components
import { useRef, ChangeEvent, useEffect, useState } from 'react';

export const SlideAddress = () => {
    const Dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const getCep = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setCep(e.target.value))
    }
    const getStreet = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setStreet(e.target.value))
    }
    const getNumberHouse = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setnumberHouse(parseInt(e.target.value)))
    }
    const getComplement = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setComplement(e.target.value));
    }
    const getDistrict = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setDistrict(e.target.value));
    }
    const getCity = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setCity(e.target.value));
    }
    const getUfDistrict = (e: ChangeEvent<HTMLInputElement>) => {
        Dispatch(setUfDistrict(e.target.value));
    }

    return (
        <div className="flex-1 p-8">
            <div className="flex-1 flex items-center">
                <img src={LocationSimbol} alt="" width={30} />
                <h1 className="ml-3 text-1xl sm:text-2xl font-semibold">Endereço de Entrega</h1>
            </div>
            <form action="" className="flex-1 flex flex-col mt-8">
                <input type="text" placeholder="CEP" className="flex-1 sm:w-1/2 bg-[#EDEDED] my-2 p-3 rounded-md outline-cyan-200 sm:"
                    maxLength={10}
                    value={user.cep}
                    onChange={getCep}
                />

                <input type="text" placeholder="Rua" className="flex-1 sm:w-3/4 sm:flex-1 bg-[#EDEDED] my-2 p-3 rounded-md outline-cyan-200 capitalize"
                    value={user.street}
                    onChange={getStreet}
                />

                <div className="flex-1 flex flex-col sm:flex-row">
                    <input type="number" placeholder="Número" className="sm:flex-1 bg-[#EDEDED] my-2 sm:mr-2 p-3 rounded-md outline-cyan-200"
                        value={user.numberHouse > 0 ? user.numberHouse : ''}
                        onChange={getNumberHouse}
                    />
                    <input type="text" placeholder="Complemento" className="sm:flex-1 bg-[#EDEDED] my-2 sm:ml-2 p-3 rounded-md outline-cyan-200 capitalize"
                        value={user.complement}
                        onChange={getComplement}
                    />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row">
                    <input type="text" placeholder="Bairro" className="flex-1 bg-[#EDEDED] my-2 sm:mr-2 p-3 rounded-md outline-cyan-200 capitalize"
                        value={user.district}
                        onChange={getDistrict}
                    />
                    <input type="text" placeholder="Cidade" className="flex-1 bg-[#EDEDED] my-2 sm:m-2 p-3 rounded-md outline-cyan-200 capitalize"
                        value={user.city}
                        onChange={getCity}
                    />
                    <input type="text" placeholder="UF" className="w-20 bg-[#EDEDED] my-2 sm:ml-1 p-3 rounded-md outline-cyan-200 uppercase"
                        maxLength={2}
                        value={user.UfDistrict}
                        onChange={getUfDistrict}
                    />
                </div>
            </form>
        </div>
    )
}