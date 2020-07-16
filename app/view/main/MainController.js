Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    store: {
        type: 'goods'
    },

    onItemSelected: function (sender, record) {
        var window = Ext.create('Ext.window.Window', {
        // var window = Ext.create('TutorialApp.view.main.EditSelected', {
            title: 'Приложение',
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
                    fieldLabel: 'Количество',
                    validator: function() {
                        if(Number(this.getValue() < 0)) {
                            Ext.WindowManager.bringToFront(Ext.Msg.alert('Ошибка!', 'Количество должно быть неотрицательным'))
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'cost',
                    value: record.data.cost,
                    fieldLabel: 'Цена',
                    validator: function() {
                        function isNumber(num) {
                            return typeof num === 'number' && !isNaN(num);
                        }
                        if (!(isNumber(Number(this.getValue()))) || Number(this.getValue() <= 0)) {
                            Ext.Msg.alert('Ошибка!', 'Цена должна быть положительным числом')
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Сохранить',
                    handler: function() {
                        //для масштабируемости достаточно просто дополнить массивы
                        const quantity = Ext.ComponentQuery.query('numberfield[name=quantity]')[0].getValue();
                        const cost = Ext.ComponentQuery.query('textfield[name=cost]')[0].getValue();
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
                                    window.close()
                                } else {
                                    grid = Ext.ComponentQuery.query('app-main')[0].down('mainlist')
                                    store = grid.getStore(),
                                    console.log(record)
                                    store.insert(record.data.id, {id: record.data.id, name: record.data.name, description: record.data.description, cost, quantity})
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
                        xtype: 'idfilterfield',
                        minValue: 1,
                        name: 'id',
                        fieldLabel: 'ID',
                        emptyText: 'Введите ID...',
                        
                    },
                    {
                        xtype: 'filterfield',
                        fieldLabel: 'Описание',
                        name: 'name',
                        emptyText: 'Введите имя...'
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