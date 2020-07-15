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
        var value = this.getValue();
        if (e.getKey() === e.ENTER && !Ext.isEmpty(value)) {
            var searchString = this.getValue(),
            grid = this.up('app-main').down('mainlist'),
            store = grid.getStore(),
            filters = [];

            store.clearFilter()
            if (searchString) {
                this.titleFilter = filters.push({
                    id: 'titleFilter',
                    property: 'name',
                    value: searchString,
                    anyMatch: true,
                    caseSensitive: false
                });
            } 
            store.setFilters(filters);            
        }
    }
});