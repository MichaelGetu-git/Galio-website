import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import LandingHero from '../components/LandingHero';
import IntroGalio from '../components/IntroGalio';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    >
      <main
        className='flex flex-col justify-center gap-16 px-4 sm:px-6 lg:px-10 mx-auto max-w-7xl'
      >
        <LandingHero/>
        <div className='flex justify-center'>
          <div className='w-[90%]'>
            <IntroGalio/>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
