import React from 'react';
import '../styles/components/job.scss'
import Accordion from "../ux-ui/accordion/accordion";

const Job = () => {

    const jsonWork = [
        {
            title: 'Сентябрь 2019 — июнь 2022 - Абак-Пресс, медиахолдинг',
            Responsibilities: [
                'Верстка посадочных страниц (с добавление библиотек и какой либо динамики)',
                'Дизайн макетов',
            ]
        },
        {
            title: 'Июль 2022 — сентябрь 2022г - Сайтсофт',
            Responsibilities: [
                'Работа с асинхронными запросами, взаимодействие с бекендом',
                'поддержание кода на jqery',
                'разработка на vue',
            ]
        },
        {
            title: 'Июль 2024 — сентябрь 2024г - Lidera',
            Responsibilities: [
                'редактрование посадочных страниц',
                'дизайн внутреннего сайта',
            ]
        },
        {
            title: 'Сентябрь 2025 — Декабрь 2024г - Айкон (шины) - проектная',
            Responsibilities: [
                'разработка компонентов',
            ]
        }
    ]

    return (
       <div className='job'>
           {
               jsonWork.map((item, index) => (
                   <Accordion key={index} text={item.title}>
                       <div className='job__item'>
                           <div className='job__subtitle'>Обязанности:</div>
                           {
                               item.Responsibilities.map((Responsibilities, index) => (
                                   <div key={index} className='job__subtitle'>- {Responsibilities}</div>
                               ))
                           }
                       </div>
                   </Accordion>
               ))
           }


       </div>
    );
};

export default Job;