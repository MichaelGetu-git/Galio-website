import type { ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {
    DocumentIcon,
    PaintBrushIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline';

type FeatureItem = {
    title: string;
    description: ReactNode;
    icon: ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string; // tailwind color classes
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Twitter',
        description: (
            <>
                Follow us on Twitter and be the first to recieve news and updates. We are open for your feedback and questions.
            </>
        ),
        icon: DocumentIcon,
        color: 'bg-blue-500',
    },
    {
        title: 'Contribute on Github',
        description: (
            <>
                You want to take part in the development? Fork Galio on GitHub and send us a pull request. To report a bug, file a new isue.
            </>
        ),
        icon: PaintBrushIcon,
        color: 'bg-pink-500',
    },
    {
        title: 'Galio Community',
        description: (
            <>
                If you're interested in discussing, participating and helping each other, the Galio community is the place to be.
            </>
        ),
        icon: RocketLaunchIcon,
        color: 'bg-red-500',
    },
];

function Feature({ title, description, icon: Icon, color }: FeatureItem) {
    return (
        <div className={clsx('col col-3')}>
            <div className="text-center flex items-center justify-center p-4">
                <div
                    className={clsx(
                        'flex items-center justify-center rounded-full text-white h-16 w-16 shadow-md',
                        color
                    )}
                >
                    <Icon className="h-6 w-6 text-white" />
                </div>
            </div>
            <div className="text-center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function CommunityGalio(): ReactNode {
    return (
        <section>
            <div className="container">
                <div className='flex justify-center p-10 text-gray-700 text-5xl font-semibold'>
                    Become a part of the Galio community
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pt-5'>
                <h1 className='text-3xl text-gray-700 font-semibold pb-8'>This project exists thanks to all the people who contribute.</h1>
                <a href="https://github.com/galio-org/galio/contributors">
                        <img src="https://opencollective.com/galio/contributors.svg?width=890&amp;button=false" />
                    </a>
            </div>
        </section>
    );
}
