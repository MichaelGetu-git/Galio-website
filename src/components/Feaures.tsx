import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: string;
  codeSection: ReactNode;
  link: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Installation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff1270]">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    description: 'Just add it as an npm/yarn dependency:',
    codeSection: (
      <div>
        <p>
        <pre className="text-sm leading-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md overflow-x-auto">
        <code>
            <span className="text-pink-500">{`npm install galio-framework\n`}</span>
            {`or\n`}
            <span className="text-pink-500">{`yarn add galio-framework\n`}</span>
        </code>
        </pre>
      </p>
      </div>
    ),
    link: "",
    linkText: 'Read Installation'
  },
  {
    title: 'Usage',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff1270]">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Import the component you want in your application:',
    codeSection: (
      <p>
        <pre className="text-sm leading-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-4 rounded-md overflow-x-auto">
        <code>
            <span className="text-pink-500">{`import { Text } from 'galio-framework'`}</span>
            {`\nrender() {\n`}
            {`  <View>\n`}
            {`    <Text p muted>\n`}
            {`      Hi, I'm a Galio component\n`}
            {`    </Text>\n`}
            {`  </View>\n`}
            {`}`}
        </code>
        </pre>
      </p>
    ),
    link: "",
    linkText: 'Explore Documentation'
  },
  {
    title: 'Built with Galio',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ff1270]">
        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Explore examples built with Galio.',
    codeSection: <img src="/img/build.png" alt="Galio examples" />,
    link: "",
    linkText: "See Examples"
  },
];

function Feature({ icon, title, description, codeSection, link, linkText }: FeatureItem) {
  return (
    <div className={clsx('col col-3 w-full my-5')}>
      <div className="padding-horiz--md border-gray-500 border-b h-90">
        <div className='flex flex-col flex-none'>
            <div className='flex gap-2 mb-4'>
            <div>{icon}</div>
            <Heading as="h3">{title}</Heading>
            </div>
            <p className='min-h-[60px]'>{description}</p>
        </div>
        <div className="mb-4">
          {codeSection}
        </div>
      </div>
      <div className="mt-4">
        <a href={link}
          className='!no-underline py-2 px-3 bg-indigo-500 text-white rounded-md'
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default function Features(): ReactNode {
  return (
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}