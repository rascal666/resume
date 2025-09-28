import React from 'react';
import Title from "../components/Title";
import '../styles/section/work.scss'
import imgWork1 from '../img/work/work1.png'
import imgWork2 from '../img/work/work2.png'
import imgWork3 from '../img/work/work3.png'
import imgWork4 from '../img/work/work4.png'
import imgWork5 from '../img/work/work5.png'
import imgWork6 from '../img/work/work6.png'
import imgWork7 from '../img/work/work7.png'
import imgWork8 from '../img/work/work8.png'
import imgWork9 from '../img/work/work9.png'
import noImg from '../img/noImg.png'

import WorkMocKup from "../components/WorkMocKup";

const Work = () => {


    return (
        <div id='work' className='work'>
            <Title children='Work' />

            <div className='work__mookAp'>
                <WorkMocKup git='https://github.com/rascal666/lidera-dev'  target='тестовое в компанию' img={imgWork6} link="https://rascal666.github.io/lidera-dev/"/>
                <WorkMocKup git='https://github.com/rascal666/kinoSvidanie'  target='в учебных целях' description='Описание - поиск рандомных фильмов / сериалов / мультиков по фильтрам' img={imgWork7} link="https://rascal666.github.io/kinoSvidanie/"/>
                <WorkMocKup  target='по работе' img={imgWork1} link='https://www.pulscen.ru/about/promo/Tarif_Biznes_luchshiy_drug_vashego_biznesa?utm_rascal=pay'/>
                <WorkMocKup  target='по работе' img={imgWork2} link="https://www.pulscen.ru/about/promo/schastlivyy_vtornik?utm_rascal=free"/>
                <WorkMocKup  target='по работе' img={imgWork3} link='https://www.pulscen.ru/about/promo/Darim_bonusy_na_15000_rubley'/>
                <WorkMocKup  target='по работе' img={imgWork4} link='https://www.pulscen.ru/about/promo/Chernaya_pyatnitsa_na_Pulse_tsen?utm_rascal=pay'/>
                <WorkMocKup  target='по работе' img={imgWork5} link="https://www.pulscen.ru/about/promo/Ideal'naya_reklama_v_Yandekse"/>
                <WorkMocKup git='https://github.com/rascal666/ceilings'  target='проектная' img={imgWork8} link="https://rascal666.github.io/ceilings/"/>
                <WorkMocKup git='https://github.com/rascal666/remote'  target='проектная' img={imgWork9} link="https://rascal666.github.io/remote/"/>
                <WorkMocKup git='https://github.com/rascal666/testovoe-only' description='работа с запросами'  target='тестовое' img={noImg} link="https://github.com/rascal666/testovoe-only"/>

            </div>

        </div>
    );
};

export default Work;