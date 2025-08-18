import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'components',
    {
      type: 'category',
      label: 'Get Started',
      link: {
        type: 'generated-index',
        description: 'Learn how to install and set up Galio Framework',
      },
      items: [
        'get-started/install',
        'get-started/galio-theme',
        'get-started/modern-usage',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'generated-index',
        description: 'Explore all available Galio components',
      },
      items: [
        'components/button',
        'components/text',
        'components/input',
        'components/card',
        'components/block',
        'components/accordion',
        'components/checkbox',
        'components/radio',
        'components/switch',
        'components/slider',
        'components/navbar',
        'components/icon',
        'components/toastnotification',
        'components/deckswiper',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Basics',
      link: {
        type: 'generated-index',
        description: '5 minutes to learn the most important Docusaurus concepts.',
      },
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      link: {
        type: 'generated-index',
      },
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

export default sidebars;
