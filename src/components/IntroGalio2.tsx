import type { ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import  CopyIcon  from '../../static/img/copy.svg';
import RocketIcon from '../../static/img/rocket.svg'
import Palette from '../../static/img/palette.svg'

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free & Open Source',
    description: (
      <>
        The Galio Framework is a 100% free, open-source project, licensed under MIT. It will always remain free to use, powered by a huge international community.
      </>
    ),
    icon: <CopyIcon className="h-8 w-8 text-white" />,
    color: 'bg-blue-500',
  },
  {
    title: 'Beautifully designed',
    description: (
      <>
        Carefully crafted. Ready-made components, typography, and a gorgeous base theme that adapts to each project. You'll be building in style.
      </>
    ),
    icon: <Palette className="h-8 w-8 text-white" />,
    color: 'bg-pink-500',
  },
  {
    title: 'First-class Documentation',
    description: (
      <>
        Built with real app examples, component demos, guides, and how-to’s to get you up and running with mobile apps faster than ever before.
      </>
    ),
    icon: <RocketIcon className="h-8 w-8 text-white" />,
    color: 'bg-red-500',
  },
];

function Feature({ title, description, icon, color }: FeatureItem) {
  return (
    <div className={clsx('col col-3')}>
      <div className="text-center flex items-center justify-center p-4">
        <div
          className={clsx(
            'flex items-center justify-center rounded-full text-white h-16 w-16 shadow-md',
            color
          )}
        >
          {icon}
        </div>
      </div>
      <div className="text-center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function GalioFeatures(): ReactNode {
  return (
    <section>
      <div className="container">
        <div className='flex justify-center p-10 text-3xl md:text-5xl font-semibold'>
            What is Galio Framework?
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
