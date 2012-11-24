Ext.define('CMONO.controller.UserController', {
    extend:'Ext.app.Controller',

    init:function(){
        this.control({
            'usergrid':{
                edit:function(editor, e, opts){
                   // e.record.commit();
                }
            },
            'usergrid button[id=btnFilter]':{
                click:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var store = grid.getStore();
                    store.filter('email', /\S*meizhuo\S*/);
                }
            },
            'usergrid button[id=btnLoadMask]':{
                click:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var myMask = new Ext.LoadMask(grid, {msg:"Please wait..."});
                    myMask.show();

                }
            },
            'usergrid button[id=btnRefresh]':{
                click:function(o){
                    var grid = o.ownerCt.ownerCt;
                    grid.getStore().clearFilter(false);
                }
            },
            'usergrid button[id=btnSave]':{
                click:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var data = grid.getStore().getModifiedRecords();
                    
                    if(data.length == 0){
                        Ext.Msg.alert('信息提示', '您没有修改任何记录');
                    }else{
                        
                        Ext.Msg.confirm('信息提示', '确定要修改吗',function(btn ,text){
                            if(btn == 'yes'){
                                var ids = [];
                                Ext.each(data, function(record){
                                    ids.push(record.get('name'));
                                });
        
                                Ext.Ajax.request({
                                    url:'aabbcc.jsp',
                                    params:{ids:ids.join(',')},
                                    success:function(response, options){
                                        var store = grid.getStore();
                                        store.remove(data);
                                    }
                                });
                            }else{
                                Ext.Msg.alert('信息提示', '您放弃了更改');
                                var grid = o.ownerCt.ownerCt;
                                grid.getStore().load();
                            }
                        });

                    }
                }
            },
            'usergrid button[id=btnSave2]':{
                click:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var store = grid.getStore();
                    store.sync();     //提交给获取数据的那个url                         
                    var records = store.getUpdatedRecords();
                    if(records.length == 0){
                        Ext.Msg.alert('信息提示', '您没有修改任何记录');
                    }else{
                        
                        Ext.Msg.confirm('信息提示', '确定要修改吗',function(btn ,text){
                            if(btn == 'yes'){

                                Ext.Array.each(records, function(model){
                                    model.commit();
                                });
                                
                            }else{
                                Ext.Msg.alert('信息提示', '您放弃了更改');
                                var grid = o.ownerCt.ownerCt;
                                grid.getStore().load();
                            }
                        });

                    }
                }
            }
        });
    },
    views:['UserGrid'],
    models:['User'],
    stores:['UserStore']
});