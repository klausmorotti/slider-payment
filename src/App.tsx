// Components
import { SliderPayment } from './components/SliderPayment';
import { SlideAddress } from './components/Slides/SlideAddress';
import { SlideMethodPayment } from './components/Slides/SlideMethodPayment';
import { SlideSucess } from './components/Slides/SlideSucess';
import { Buttons } from './components/Buttons/Buttons';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setStage } from './redux/reducer/useReducer';

import { useLayoutEffect, useState, useRef } from 'react';

const App = () => {
  const Dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const backStage = () => {
    if (user.stage >= 1) {
      Dispatch(setStage(user.stage - 1));
    } else if (user.stage <= 1) {
      Dispatch(setStage(2));
    }

  }
  const advancedStage = () => {
    if (user.stage == 0) {
      if (user.cep && user.street && user.numberHouse && user.complement && user.district && user.city && user.UfDistrict) {
        if (user.stage >= 0 && user.stage < 2) {
          Dispatch(setStage(user.stage + 1));
        } else {
          Dispatch(setStage(0));
        }
      } else {
        alert('Preencha todos os campos!!!');
      }
    } else if (user.stage == 1) {
      if (user.methodPayment) {
        if (user.stage >= 0 && user.stage < 2) {
          Dispatch(setStage(user.stage + 1));
        } else {
          Dispatch(setStage(0));
        }
      } else {
        alert('Selecione a forma de pagamento!!!')
      }
    } else if (user.stage == 2) {
      if (user.stage >= 0 && user.stage < 2) {
        Dispatch(setStage(user.stage + 1));
      } else {
        Dispatch(setStage(0));
        setTimeout(() => {
          location.reload();
        }, 1000)
      }
    }

  }

  return (
    <main className="h-screen p-4 bg-[#FAFAFA] flex flex-col justify-center items-center">

      <SliderPayment margin={user.stage}>

        <div className="slides">

          <SlideAddress />
          <SlideMethodPayment />
          <SlideSucess />

        </div>

      </SliderPayment>

      <Buttons stage={user.stage} fnBackSlide={backStage} fnNextSlide={advancedStage} />

    </main>
  )
}

export default App;