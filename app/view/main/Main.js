Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    alias: 'widget.mainapp',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.form.Panel',,
        'Ext.form.filterField',

        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.main.List',
        // 'TutorialApp.view.main.EditSelected'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Выйти',
            margin: '10 0',
            handler: 'onLogout'
        },
        {
            xtype: 'button',
            text: 'Товары',
            margin: '10 0',
            handler: 'newGoodsWindow'
        }
    ]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }

    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    listeners:{},
    items:[],
});
