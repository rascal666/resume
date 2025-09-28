import React from 'react';
import Title from "../components/Title";
import '../styles/section/desing.scss'

const Design = () => {
    return (
        <div className='design'>
            <Title children='Design'/>

            <div>
                <a href="https://www.figma.com/proto/qRgGZicspVpZX0DwChXmOY/lidera?node-id=914-9842&p=f&t=Z2NEnOU93djqt6eD-0&scaling=min-zoom&content-scaling=fixed&page-id=569%3A5707&starting-point-node-id=914%3A9842">внутренний портал</a>
            </div>

            <div>
                <a href="https://www.figma.com/proto/ZW6YSatSSYnMNiByjjPJRh/Untitled?node-id=2-2&t=lnWWUV3NkUuDIhDq-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">ладинг по ремонту телевизоров</a>
            </div>
        </div>
    );
};
export default Design;