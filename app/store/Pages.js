Ext.define('TutorialApp.store.Pages', {
    extend: 'Ext.data.Store',

    alias: 'store.pages',

    // model: 'TutorialApp.model.Pages',

    data: { items: []},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
