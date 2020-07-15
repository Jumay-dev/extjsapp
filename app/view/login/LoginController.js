Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        const userName = Ext.ComponentQuery.query('textfield[name=username]')[0].getValue();
        const password = Ext.ComponentQuery.query('textfield[name=password]')[0].getValue();

        if (userName === 'admin' && password === 'padmin') {
            localStorage.setItem("LoggedIn", true)
            // Remove Login Window
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.create({
                xtype: 'app-main'
            });            
        }
        else {
            localStorage.setItem("LoggedIn", false)
        }
    }
});