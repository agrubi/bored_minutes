Ext.define('BoredMinutes.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'BoredMinutes.view.picture.PictureEdit',
        'BoredMinutes.view.email.EmailWrite',
        'BoredMinutes.view.annotation.Annotation'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xclass:'BoredMinutes.view.picture.PictureEdit'
            },
            {
                xclass:'BoredMinutes.view.annotation.Annotation'
            },

            {
                xclass:'BoredMinutes.view.email.EmailWrite'
            }

        ]
    }
});
