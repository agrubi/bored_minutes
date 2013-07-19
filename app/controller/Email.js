Ext.define('BoredMinutes.controller.Email', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            emailPanel:'emailwrite'
        },
        control: {
            emailPanel:{
                sendEmail:'sendEmail'
            }
        }


    },





    sendEmail:function(emails){
        console.log('controller send email');
        console.log(emails);
    }












});