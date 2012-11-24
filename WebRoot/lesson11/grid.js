Ext.onReady(function(){
    Ext.create('Ext.grid.Panel', {
        title:'用户列表',
        titleAlign:'center',
        renderTo:Ext.get('abc'),
        width:750,
        height:300,
        forceFit:true,
        frame:true,
        
        columns:[ 
            {header:'序号', xtype: 'rownumberer'},
            {header:'姓名', dataIndex:'name', field:{xtype:'textfield'}},
            {header:'年龄', dataIndex:'age', field:{xtype:'numberfield'}},
            {header:'电子邮件', dataIndex:'email'}
        ],
        store:Ext.data.StoreManager.get('userStore'),
        
        selType: 'checkboxmodel',
        multiSelect:true,
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 2
            })
        ],
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: Ext.data.StoreManager.get('userStore'),   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }],
        
        tbar:[
            {
                text:'刷新',
                handler:function(o){
                    var grid = o.ownerCt.ownerCt;
                    grid.getStore().clearFilter(false);
                }
            }, '-',
            {text:'添加'}, '-',
            {
                text:'删除',
                handler:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var data = grid.getSelectionModel().getSelection();
                    
                    if(data.length == 0){
                        Ext.Msg.alert('信息提示', '您至少得选择一条记录');
                    }else{
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
                        
                    }
                    
                }
            }, '-',
            {
                text:'保存',
                handler:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var data = grid.getStore().getModifiedRecords();
                    
                    if(data.length == 0){
                        Ext.Msg.alert('信息提示', '您没有修改任何记录');
                    }else{
                        
                        Ext.Msg.confirm('信息提示', '确定要修改吗',function(btn ,text){
                            if(btn == 'ok'){
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
            }, '-',
            {text:'查找'}, {xtype:'textfield'}, '-',
            {
                text:'筛选',
                handler:function(o){
                    var grid = o.ownerCt.ownerCt;
                    var store = grid.getStore();
                    store.filter('email', /\S*meizhuo\S*/);
                }
            }, {xtype:'textfield'}
        ]
    });
});