// Ext.define('TutorialApp.view.main.EditSelected', {
//     extend: 'Ext.window.Window',
//     xtype: 'editselected',
//     alias: 'widget.editselected',

//     title: 'Приложение',
//     bodyPadding: 10,
//     closable: false,
//     title: 'Карточка товара: ' + record.data.name,
//     items:[
//         {
//             xtype: 'displayfield',
//             fieldLabel: 'ID',
//             name: 'id',
//             value: record.data.id
//         },
//         {
//             xtype: 'displayfield',
//             fieldLabel: 'Наименование',
//             name: 'name',
//             value: record.data.name
//         },
//         {
//             xtype: 'numberfield',
//             value: record.data.quantity,
//             fieldLabel: 'Количество'
//         },
//         {
//             xtype: 'numberfield',
//             value: record.data.cost,
//             fieldLabel: 'Цена'
//         },
//         {
//             xtype: 'button',
//             text: 'Сохранить',
//             // style:'margin-left:100px; margin-top:70px;',
//         },
//         {
//             xtype: 'button',
//             text: 'Отмена',
//             style: 'margin-left: 40px;'
//         },
// ]
// })