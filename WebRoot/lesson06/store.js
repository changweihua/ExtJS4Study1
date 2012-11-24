(function(){
    Ext.onReady(function(){
//        Ext.define('Person', {
//            extend:'Ext.data.Model',
//            fields:['name', {name:'age', type:'int'}, 'email'],
//            proxy:{
//                type:'memory'
//            }
//        });
//        
//        var store = Ext.create('Ext.data.Store', {
//            model:'Person',
//            data:[
//                {name:'changweihua', age:'23', email:'changweihua@outlook.com'},
//                {name:'tanmeizhuo', age:'23', email:'tanmeizhuo@outlook.com'}
//            ],
//            autoLoad:true
//        });
//        
//        store.each(function(model){
//            alert(model.get('email'));
//        });
        
//        Ext.define('Person', {
//            extend:'Ext.data.Model',
//            fields:['name', {name:'age', type:'int'}, 'email']
//        });
//        
//        var store = Ext.create('Ext.data.Store', {
//            model:'Person',
//            data:[
//                {name:'changweihua', age:'23', email:'changweihua@outlook.com'},
//                {name:'tanmeizhuo', age:'23', email:'tanmeizhuo@outlook.com'}
//            ],
//            autoLoad:true
//        });
//        
//        store.each(function(model){
//            alert(model.get('email'));
//        });

//        Ext.define('Person', {
//            extend:'Ext.data.Model',
//            fields:['name', {name:'age', type:'int'}, 'email']
//        });
//        
//        var store = Ext.create('Ext.data.Store', {
//            model:'Person',
//            data:[
//                {name:'changweihua', age:'23', email:'changweihua@outlook.com'},
//                {name:'tanmeizhuo', age:'23', email:'tanmeizhuo@outlook.com'}
//            ],
//            proxy:{
//                type:'ajax',
//                url:'getPerson.jsp'
//            }//proxy的优先级高于data
//        });
//        
//        store.load({
//            scope: this,
//            callback: function(records, operation, success) {
//                
//                Ext.each(records, function(record){
//                    alert(record.get('name'));
//                });
//                
//            }
//        });
        
//        var store = Ext.create('Ext.data.Store', {
//            fields:[
//                'name', {name:'age', type:'int'}, 'email'
//            ],//自动生成Model类
//            proxy:{
//                type:'ajax',
//                url:'getPerson.jsp'
//            }//proxy的优先级高于data
//        });
//        
//        store.load({
//            scope: this,
//            callback: function(records, operation, success) {
//                
//                Ext.each(records, function(record){
//                    alert(record.get('name'));
//                });
//            }
//        });


        var store = Ext.create('Ext.data.Store', {
            fields:[
                'name', {name:'age', type:'int'}, 'email'
            ],//自动生成Model类
            proxy:{
                type:'ajax',
                url:'getPerson.jsp'
            }//proxy的优先级高于data
        });
        
        store.load({
            scope: this,
            callback: function(records, operation, success) {
//                store.filter('name', 'chang');
//                store.each(function(record){
//                    alert(record.get('name'));
//                });
                
//                store.filter('name', /\Sn+\S/);
//                 store.each(function(record){
//                    alert(record.get('name'));
//                });

//                var index = store.find('email', 'Outlook', 0, true, false, true); 
//                alert(index);
//
//                var index = store.find('email', 'Outlook', 0, true, true, true); 
//                alert(index);

                var index = store.find('email', /\Soutlook\S/, 0, true, false, true); 
                alert(index);

            }
        });
        
       
    });
})();