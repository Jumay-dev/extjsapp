Ext.define('TutorialApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'TutorialApp.store.Goods',
    ],

    title: 'Товары',
    selType: 'cellmodel',

    store: {
        type: 'goods'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', type: 'int'},
        { 
            text: 'Имя', 
            dataIndex: 'name', 
            flex: 1, 
            type: 'string', 
        },
        { text: 'Описание', dataIndex: 'description', flex: 1, type: 'string' },
        { text: 'Цена', dataIndex: 'cost', flex: 1, type: 'boolean' },
        { 
            text: 'Кол-во', 
            dataIndex: 'quantity', 
            flex: 1, 
            type: 'int',
            renderer: function(value) {
                if (value == 0) {
                    value = '<div style="background-color:#ff0000;">' + value + '</div>';
                    return value;
                }
                else {
                    return value
                }
        }
        },
    ],

    // bbar: Ext.create('Ext.PagingToolbar', {
    //     store: store
    // }), 
    
    listeners: {
        select: 'onItemSelected'
    }
});
