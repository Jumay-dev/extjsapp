Ext.define('Ext.form.filterField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.filterfield',

    inputType: 'search',

    // Add specialkey listener
    initComponent: function() {
        this.callParent();
        this.on('specialkey', this.checkEnterKey, this);
    },

    // Handle enter key presses, execute the search if the field has a value
    checkEnterKey: function(field, e) {
        console.log('checkEnterKey')
        console.log(field)
        let grid = this.up().down('mainlist'),
            store = grid.getStore(),
            filters = [];

        console.log(grid)

        store.clearFilter()

        var value = this.getValue();
        if (e.getKey() === e.ENTER && !Ext.isEmpty(value)) {
            this.titleFilter = filters.push({
                id: 'titleFilter',
                property: 'name',
                value,
                anyMatch: true,
                caseSensitive: false
            });
            store.setFilters(filters);            
        }
    }
});