import { MenuEntry } from '@pancakeswap-libs/uikit'

const getDexEchangeName = () => {
  if (window.location.hostname.includes('swape')) {
    return '[apeswap]'
  }

  if (window.location.hostname.includes('v1')) {
    return '[pcsV1]'
  }

  if (window.location.hostname.includes('v2')) {
    return '[pcsV2]'
  }
  return ''
}

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dapp.tapswap.finance/#/',
  },
  {
    label: `Dex Routing ${getDexEchangeName()}`,
    icon: 'TradeIcon',
    items: [
      {
        label: 'ApeSwap',
        href:
          'https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
      },
      {
        label: ' PancakeSwap   V1',
        href: 'https://pancakeswapv1.tapswap.money/#/swap',
      },
      {
        label: ' PancakeSwap V2   ',
        href:
          'https://pancakeswapv2.tapswap.money/#/swap/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
      },
    ],
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
    label: 'Chart',
    icon: 'InfoIcon',
    items: [
      {
        label: 'ApeSwap',
        href: 'https://info.apeswap.finance/token/0x56eab07247e3e6404ac90140f20bba61375d5c3c',
        target: '_blank',
      },
      {
        label: 'Dex Guro ',
        href: 'https://dex.guru/token/0x56eab07247e3e6404ac90140f20bba61375d5c3c-bsc',
        target: '_blank',
      },
      {
        label: 'Bogged Chart',
        href: 'https://charts.bogged.finance/?token=0x56eab07247e3e6404ac90140f20bba61375d5c3c',
        target: '_blank',
      },

      {
        label: 'PooCoin Chart',
        href: 'https://poocoin.app/tokens/0x56eab07247e3e6404ac90140f20bba61375d5c3c',
        target: '_blank',
      },
      // {
      //   label: 'Contracts',
      //   href: 'https://tapswap.gitbook.io/tapswap/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://tapswap.gitbook.io/tapswap/transparency/transparency',
      //   target: '_blank',
      // },
      // {
      //   label: 'PancakeSwap',
      //   href: 'https://pancakeswap.info/token/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
      //   target: '_blank',
      // },
      // {
      //   label: 'Dapp.com',
      //   href: 'https://www.dapp.com/app/tapswap-exchange',
      //   target: '_blank',
      // },
      {
        label: 'Dappradar.com',
        href: 'https://www.dapp.com/app/tapswap-exchange',
        target: '_blank',
      },
      {
        label: 'Bsc Projects',
        href: 'https://bscproject.org/#/project/767',
        target: '_blank',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/tapswaptoken',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/tapswaptoken/',
      },
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
