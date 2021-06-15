import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dapp.tapswap.finance/#/',
  },
  {
    label: 'Dex Routing',
    icon: 'TradeIcon',
    items: [
      {
        label: 'ApeSwap',
        href:
        'https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
      },
      {
        label: ' PancakeSwap   V1',
        href:
              'https://pancakeswapv1.tapswap.money/#/swap',
      },
      {
        label: ' PancakeSwap V2   ',
        href:
              'https://pancakeswapv2.tapswap.money/#/swap/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
      },
    ]
  },
  {
    label: 'Lake Farms',
    icon: 'FarmIcon',
    href: `https://dapp.tapswap.finance/#/farms`,
  },
  {
    label: 'Oasis Pools',
    icon: 'PoolIcon',
    href: 'https://dapp.tapswap.finance/#/pools',
  },
  {
    label: 'Smart Faucet',
    icon: 'BushIcon',
    href: 'https://dapp.tapswap.finance/#/bush',
  },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://dapp.tapswap.money/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/tapswap',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
        target: '_blank',
      },
      // {
      //   label: 'Token',
      //   href: 'https://doc.tapswap.money/tokennomics/taps-token',
      //   target: '_blank',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://doc.tapswap.money/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://doc.tapswap.money/transparency/transparency',
      //   target: '_blank',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/tapswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/tapswaptoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',

    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/tapswapdex/amm-pancakeswap-v1',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.tapswap.money/',
      //   target: '_blank',
      // },
      {
        label: 'Blog',
        href: 'https://tapswapmoneydex.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/tapswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/tapswapdex',
        target: '_blank',
      },
    ],
  },
]

export default config
