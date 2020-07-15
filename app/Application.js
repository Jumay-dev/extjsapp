Ext.define('TutorialApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TutorialApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {

        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("LoggedIn");

        Ext.create({
            xtype: loggedIn === true ? 'app-main' : 'login'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});