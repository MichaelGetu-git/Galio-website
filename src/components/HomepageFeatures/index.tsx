import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useTranslations } from '../../hooks/useTranslations';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

export default function HomepageFeatures(): ReactNode {
  const { t } = useTranslations();

  const FeatureList: FeatureItem[] = [
    {
      title: t('homepageFeatures.easyToUse.title'),
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <div className="text-red-200">
          {t('homepageFeatures.easyToUse.description')}
        </div>
      ),
    },
    {
      title: t('homepageFeatures.focusOnWhatMatters.title'),
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          {t('homepageFeatures.focusOnWhatMatters.description')}
        </>
      ),
    },
    {
      title: t('homepageFeatures.poweredByReact.title'),
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          {t('homepageFeatures.poweredByReact.description')}
        </>
      ),
    },
  ];

  function Feature({title, Svg, description}: FeatureItem) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.features}>
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
