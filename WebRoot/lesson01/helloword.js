(function(){
    Ext.onReady(function(){
        Ext.Msg.alert('Hello', 'Hello word !');
        
//        Object.prototype.get = function(key, defV){
//            if(this[key]){
//                return this[key];
//            }else{
//                if(this[defV]){
//                    return this[defV];
//                }
//            }
//        };
//        
//        var person = {
//            name:'Changweihua',
//            age:22
//        };
//        
//        Ext.Msg.alert("信息提示", person["name"]);
        //Ext.Msg.alert("信息提示", person.get("name"));
    });
})();