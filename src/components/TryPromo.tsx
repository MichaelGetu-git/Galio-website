import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Ratings from './Ratings';
import { CodeBracketIcon, StarIcon } from '@heroicons/react/16/solid';
import { useTranslations } from '../hooks/useTranslations';

type FeatureItem = {
    title: string;
    pic: string;
    description: string;
    link: string;
    linkText: string;
};

export default function TryPromo(): ReactNode {
    const { t } = useTranslations();

    const FeatureList: FeatureItem[] = [
        {
            title: t('tryPromo.forDevelopers.title'),
            pic: '/img/for-developers.png',
            description: t('tryPromo.forDevelopers.description'),
            link: "https://github.com/galio-org/galio",
            linkText: t('tryPromo.forDevelopers.linkText')
        },
        {
            title: t('tryPromo.usage.title'),
            pic: '/img/for-designers.png',
            description: t('tryPromo.usage.description'),
            link: "https://github.com/galio-org/galio/archive/design.zip",
            linkText: t('tryPromo.usage.linkText')
        },
    ];

    function Feature({ title, pic, description, link, linkText }: FeatureItem) {
        return (
            <div className={'col cols-2 max-w-130 gap-3 pt-7'}>
                <div className="padding-horiz--md border-gray-500 h-90">
                    <div className='flex flex-col flex-none'>
                        <div className='flex flex-col gap-2 mb-4'>
                            <div>
                                <img src={pic} alt="" />
                            </div>
                            <Heading as="h3">{title}</Heading>
                        </div>
                        <p className='min-h-[60px]'>{description}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <a href={link}
                        className='!no-underline py-2 px-3 border border-pink-500 text-pink-500 font-semibold rounded-3xl'
                    >
                        {linkText}
                    </a>
                </div>
            </div>
        );
    }

    return (
        <section className='relative -top-20 md:-top-50 flex flex-col h-250 md:h-250 lg:h-120'>
            <div className='pb-10 md:pb-6 pl-10 md:pl-20 '>
                <div className='w-full md:w-[90%] lg:w-[50%]'>
                   <h1 className='text-5xl font-light'>{t('tryPromo.title')}</h1>
                   <p className='text-lg md:text-2xl text-gray-600 dark:text-pink-200 font-light'>{t('tryPromo.description')}</p>
                </div>
                <div className='grid grid-cols-2 gap-4 w-60'>
                    <Ratings
                        icon={StarIcon}
                        iconProps={{ className: "w-5 h-5 text-yellow-400" }}
                        rating={3200}
                        ratingType={t('tryPromo.stars')}
                        link="https://github.com/galio-org/galio"
                    />
                    <Ratings
                        icon={CodeBracketIcon}
                        iconProps={{ className: "w-5 h-5 text-yellow-400" }}
                        rating={325}
                        ratingType={t('tryPromo.fork')}
                        link="https://github.com/galio-org/galio"
                    />
                </div>
            </div>
            <div className="container">
                <div className=" row justify-center">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}