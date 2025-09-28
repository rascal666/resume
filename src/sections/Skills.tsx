import React from 'react';


import Title from "../components/Title";
import Skill from "../components/skill";

import '../styles/section/skills.scss'

const skillParams = [
    {
        title: 'javaScript',
        percent: 50,
    },
    {
        title: 'html',
        percent: 80,
    },
    {
        title: 'css',
        percent: 90,
    },
    {
        title: 'scss',
        percent: 90,
    },
    {
        title: 'react',
        percent: 60,
    },
    {
        title: 'redux',
        percent: 50,
    },
    {
        title: 'typeScript',
        percent: 45,
    },
    {
        title: 'pug',
        percent: 60,
    },
    {
        title: 'git',
        percent: 50,
    },
    {
        title: 'tailwind',
        percent: 50,
    }
]
const Skills = () => {


    return (
        <div id='skills' className='skills'>
            <Title children='Skills'/>

            <div className='skills__block'>
                {skillParams.map((item, index) => (
                    <Skill key={index} title={item.title} percent={item.percent}/>
                ))}
            </div>
        </div>
    );
};

export default Skills;