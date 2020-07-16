Ext.define('Ext.form.IDFilterField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.idfilterfield',

    inputType: 'number',
    minValue: 1,

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

        store.clearFilter()


        var value = this.getValue();

        if (e.getKey() === e.ENTER && (value)) {
            if (Number.isInteger(Number(value)) && value > 0) {
                this.titleFilter = filters.push({
                    id: 'titleFilter',
                    property: 'id',
                    value
                });
                console.log(filters)
                
                store.setFilters(filters)
            }
            else {
                Ext.Msg.alert("Ошибка!", "ID должен быть целым положительным числом");
            }
        }
    }
});