// Images
import SucessSimbol from '../../assets/sucesso.png';
import LocationSimbol from '../../assets/map.png';
import DolaresSimbol from '../../assets/dolares.png';
import AlarmClockSimbol from '../../assets/despertador.png';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const SlideSucess = () => {
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className="flex-1 h-auto p-8">

            <div className="flex items-center">
                <img src={SucessSimbol} alt="" width={30} />
                <h1 className="ml-3 sm:text-2xl font-semibold">Yeeah! Deu tudo certo.</h1>
            </div>

            <p className="mt-2">Agora é aguardar seu pedido chegar..</p>

            <div className="w-full h-full flex flex-col justify-around py-6">

                <div className="flex">
                    <div className="w-12 h-12 bg-[#E5E6E6] flex justify-center items-center rounded-3xl"><img src={LocationSimbol} alt="Icone Localização" width={20} /></div>
                    <div className="ml-4">
                        <h3 className="text-xl capitalize">Entrega em <span className="font-semibold">{user.street}, {user.numberHouse}</span></h3>
                        <p className="capitalize">{user.cep}, {user.city}, <span className="uppercase">{user.UfDistrict}</span></p>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-12 h-12 bg-[#E5E6E6] flex justify-center items-center rounded-3xl"><img src={AlarmClockSimbol} alt="Icone Relógio" width={20} /></div>
                    <div className="ml-4">
                        <h3 className="text-xl capitalize">Previsão de Entrega</h3>
                        <p className="font-semibold capitalize">20min - 30min</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-12 h-12 bg-[#E5E6E6] flex justify-center items-center rounded-3xl"><img src={DolaresSimbol} alt="Icone Dolares" width={20} /></div>
                    <div className="ml-4">
                        <h3 className="text-xl capitalize">Pagamento na Entrega</h3>
                        <p className="font-semibold capitalize">{user.methodPayment}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

