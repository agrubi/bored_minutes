Ext.define('BoredMinutes.controller.Email', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            emailPanel:'emailwrite',
            annotation:'annotationpanel textareafield'
        },
        control: {
            emailPanel:{
                sendEmail:'sendEmail'
            }
        }


    },





    sendEmail:function(emails,notes){
       // console.log('controller send email');
       // console.log(emails);
       // console.log(this.getAnnotation().getValue());
        Ext.Msg.alert('Note sent', "Meeting notes sent, your pay has been increased by 10%", Ext.emptyFn);
    }












});