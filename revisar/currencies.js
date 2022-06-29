const by_symbol = {
'BRL': {
    symbol : {
    iso4217:'BRL',
    prefix: 'R$'
    },
    decimals: 2,
    category: 'fiat',
    id: 1
    },
'BTC': {
    symbol: {
    iso4217: 'XBT',
    prefix: '/u20BF'
    },
    decimals: 8,
    category: 'crypto',
    id: 2
    },
'USD':{
    symbol : {
    iso4217:'USD',
    prefix: '$'
    },
    decimals: 2,
    category: 'fiat',
    id: 3
    },
'EUR' :{
    symbol : {
    iso4217:'EUR',
    prefix: '/u20AC'
    },
    decimals: 2,
    category: 'fiat',
    id: 4
    },
'ETH' :{
    symbol : {
    iso4217: null,
    prefix: '/u039E'
    },
    decimals: 18,
    category: 'crypto',
    id: 4
    },
};

const by_id = [];
for( c in by_symbol) {
    const id = by_symbol[c].id
    by_id[id] = by_symbol[c]
    by_id[id].symbol.customary = c
}

module.exports = { by_symbol, by_id}