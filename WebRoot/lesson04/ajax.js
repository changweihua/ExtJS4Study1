Ext.onReady(function(){
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto'},
            {name:'age', type:'int'},
            {name:'email', type:'auto'}
        ]
    });
    
    var ajaxProxy = Ext.create('Ext.data.proxy.Ajax', {
        url:'getPerson.jsp',
        model:'User',
        reader:'json'
    });
    
    ajaxProxy.doRequest(new Ext.data.Operation({
        action:'read',
        limit:10,
        start:1,
        sorters:[
            {property:'name', direction:'ASC'}
        ]
    }), function(result){
        var text = result.response.responseText;
        alert(Ext.decode(text));
    });
    
});