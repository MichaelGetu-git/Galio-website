import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Ratings from './Ratings';
import { CodeBracketIcon, StarIcon } from '@heroicons/react/16/solid';

type FeatureItem = {
    title: string;
    pic: string;
    description: ReactNode;
    linkText1: string;
    linkText2: string;
    linkText3: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Material Kit React Native',
        pic: '/img/material-kit.jpg',
        description: (
            <div>
                Material Kit React Native is a fully coded app template built over <a href="https://galio.io/">Galio.io</a>,<a href="https://facebook.github.io/react-native/">React Native</a> and <a href="https://expo.io/">Expo</a> to allow you to create powerful and beautiful mobile applications.
            </div>
        ),
        linkText1: "https://github.com/creativetimofficial/material-kit-react-native",
        linkText2: 'https://www.creative-tim.com/product/material-kit-react-native?ref=galioapppage',
        linkText3: 'https://github.com/creativetimofficial/material-kit-react-native',
    },
    {
        title: 'Galio Examples React Native',
        pic: '/img/galio.jpg',
        description: (
            <div>
                Galio's application for showcasing our components and different contexts in which it can be used.
            </div>
        ),
        linkText1: "https://github.com/galio-org/galio-starter-kit",
        linkText2: '',
        linkText3: 'https://github.com/galio-org/galio/tree/examples',
    },
    {
        title: 'Social App React Native',
        pic: '/img/profile.jpg',
        description: (
            <div>
                Basic template app for a social platform.
            </div>
        ),
        linkText1: "https://github.com/SintionVlad/social-App",
        linkText2: '',
        linkText3: 'https://github.com/SintionVlad/social-App'
    },
    {
        title: 'Argon React Native',
        pic: '/img/argon.jpg',
        description: (
            <div>
                Argon React Native is a fully coded app template built over <a href="https://galio.io/">Galio.io</a>,<a href="https://facebook.github.io/react-native/">React Native</a> and <a href="https://expo.io/">Expo</a> to allow you to create powerful and beautiful mobile applications.
            </div>
        ),
        linkText1: "https://github.com/SintionVlad/social-App",
        linkText2: 'https://www.creative-tim.com/product/argon-react-native?ref=galioapppage',
        linkText3: 'https://github.com/creativetimofficial/argon-react-native'
    },
];

function Feature({ title, pic, description, linkText1, linkText2, linkText3 }: FeatureItem) {
    return (
        <div className={clsx('col col--6 w-full my-5')}>
            <a href={linkText3} className="border-gray-200 rounded-md shadow-2xl dark:bg-gray-800 overflow-hidden block h-full flex flex-col !no-underline text-gray-700 dark:text-white font-light">
                <div className="w-full h-75 md:h-84 lg:h-80 flex-shrink-0">
                    <img
                        src={pic}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 padding-horiz--md py-4 flex flex-col">
                    <Heading as="h3">{title}</Heading>
                    <p className="flex-1 mb-4">{description}</p>
                    <div className="flex gap-2 mt-auto">
                        <a href={linkText1} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                            Github
                        </a>
                        {linkText2 && (
                            <a href={linkText2} className="!no-underline py-2 px-3 bg-indigo-500 text-white font-semibold rounded-3xl">
                                View App
                            </a>
                        )}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default function GalioExamples(): ReactNode {
    return (
        <section className='sm:md-5 md:15 lg:mx-30'>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className='p-10 flex items-center justify-center'>
                <a href={"hello@galio.io"} className="!no-underline py-3 px-6 text-indigo-500 border border-indigo-600 font-semibold rounded-xl">
                    Send Project
                </a>
            </div>
        </section>
    );
}