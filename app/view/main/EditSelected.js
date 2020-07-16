Ext.define('TutorialApp.view.main.EditSelected', {
    extend: 'Ext.window.Window',
    
    title: 'Приложение',

    bodyPadding: 10,
    closable: false,
    items:[
        {
            xtype: 'displayfield',
            fieldLabel: 'ID',
            name: 'id',
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Наименование',
            name: 'name',
        },
        {
            xtype: 'numberfield',
            name: 'quantity',
            fieldLabel: 'Количество'
        },
        {
            xtype: 'numberfield',
            name: 'cost',
            fieldLabel: 'Цена'
        },
        {
            xtype: 'button',
            text: 'Сохранить',
            // disabled: isChanged,
            handler: function() {
                //для масштабируемости достаточно просто дополнить массивы
                const quantity = Ext.ComponentQuery.query('numberfield[name=quantity]')[0].getValue();
                const cost = Ext.ComponentQuery.query('numberfield[name=cost]')[0].getValue();
                let currentValues = [quantity, cost]
                let storeValues = [record.data.quantity, record.data.cost]
                if (currentValues.every((value, index) => value == storeValues[index])) {
                    console.log('no changes')
                }
                else {
                    var title = 'Подтвердите изменения'
                    var msg = 'Вы изменили параметры товара. Сохранить?'
                    var box = Ext.Msg.confirm(title, msg, function(buttonId, value) {
                        if (buttonId === 'no'){
                            console.log('no')
                        } else {
                            grid = this.up('app-main').down('mainlist'),
                            store = grid.getStore(),
                            console.log('store')
                            window.close()
                            return false;
                        }
                        }, this );
                }
            }
        },
        {
            xtype: 'button',
            text: 'Отмена',
            style: 'margin-left: 40px;',
            handler: function() {
                window.close()
            }
        },
    ]
});