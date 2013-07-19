Ext.define("BoredMinutes.util.ContactsHelper", {
    filter : "",
    multiple : true,
    fields :  ["displayName", "name"],

    onSuccess : function (contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    },

    onError : function(contactError) {
        alert('onError!');
    },

    setFilter : function(searchName) {
        this.filter = searchName;
    },

    getContacts : function () {

        //SET OPTIONS
        var options;
        options.filter = this.filter;
        options.multiple = this.multiple;

        var contacts = navigator.contacts.find(this.fields, this.onSuccess, this.onError, options);
        return contacts;
    }

});