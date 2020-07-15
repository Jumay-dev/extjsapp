Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var window = Ext.create('Ext.window.Window', {
            title: 'Приложение',
            reference: 'editselected',
            xtype: 'editselected',
            // width: 600,
            // height: 600,
            bodyPadding: 10,
            closable: false,
            title: 'Карточка товара: ' + record.data.name,
            items:[
                {
                    xtype: 'displayfield',
                    fieldLabel: 'ID',
                    name: 'id',
                    value: record.data.id
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Наименование',
                    name: 'name',
                    value: record.data.name
                },
                {
                    xtype: 'numberfield',
                    name: 'quantity',
                    value: record.data.quantity,
                    fieldLabel: 'Количество'
                },
                {
                    xtype: 'numberfield',
                    name: 'cost',
                    value: record.data.cost,
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
        window.show();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onLogout: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    
    newGoodsWindow: function() {
        var currentView = this.getView()
        var addIndex = currentView.tabBar.tabPanel.length -1;
        currentView.tabBar.tabPanel.insert(addIndex, 
            {
                title:'Товары',
                items: [
                    {
                        xtype: 'filterfield',
                        label: 'ID',
                        name: 'id',
                        fieldLabel: 'ID'
                    },
                    {
                        xtype: 'filterfield',
                        label: 'Описание',
                        fieldLabel: 'Описание',
                        name: 'name'
                    },
                    {
                        xtype: 'mainlist',
                    }
                ],
                collapsible: true,
            }
        )

    }
});