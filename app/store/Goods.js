Ext.define('TutorialApp.store.Goods', {
    extend: 'Ext.data.Store',
    
    alias: 'store.goods',

    data: {
        items: [
            {
                id: 1,
                name: 'Notebook Lenovo',
                description: 'Описание товара',
                cost: '100',
                quantity: '8'
            },
            {
                id: 2,
                name: 'Notebook Acer',
                description: 'Описание товара',
                cost: '120',
                quantity: '3'
            },
            {
                id: 3,
                name: 'Notebook MSI',
                description: 'Описание товара',
                cost: '130',
                quantity: '2'
            },
            {
                id: 4,
                name: 'Notebook DNS',
                description: 'Описание товара',
                cost: '90',
                quantity: '4'
            },
            {
                id: 5,
                name: 'Apple Ihone 6s 64GB',
                description: 'Описание товара',
                cost: '180',
                quantity: '10'
            },
            {
                id: 6,
                name: 'Apple Iphone 4',
                description: 'Описание товара',
                cost: '75',
                quantity: '0'
            },
            {
                id: 7,
                name: 'Samsung Galaxy S',
                description: 'Описание товара',
                cost: '43',
                quantity: '15'
            },
            {
                id: 8,
                name: 'Xiaomi Honor',
                description: 'Описание товара',
                cost: '75',
                quantity: '6'
            },

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    autoLoad: true,
    remoteFilter: true
});