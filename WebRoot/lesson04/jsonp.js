Ext.onReady(function(){
    Ext.define('Person', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto'},
            {name:'email', type:'auto'}
        ],
        proxy:{
            type:'jsonp',
            url:'http://cmono.net/about/person.php'
        }
    });
    
    var person = Ext.ModelManager.getModel('Person');
    person.load(1, {
        scope:this,
        success:function(model){
            alert(model.get('email'));
        }
    });
    
});