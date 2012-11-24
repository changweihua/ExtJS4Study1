Ext.define('CMONO.controller.deptController', {
    extend:'Ext.app.Controller',

    init:function(){
        this.control({
            'depttree button[id=btnExpandAll]':{
                click:function(btn, e){
                    var tree = btn.ownerCt.ownerCt;
                    tree.expandAll();
                }
            },
            'depttree button[id=btnCollapseAll]':{
                click:function(btn, e){
                    var tree = btn.ownerCt.ownerCt;
                    tree.collapseAll();
                }
            },
            'depttree button[id=btnAdd]':{
                click:function(btn, e){
                    var tree = btn.ownerCt.ownerCt;
                    var nodes = tree.getChecked();
//                    Ext.Msg.show({
//                       title: '信息',
//                       msg: 'Please enter your address:',
//                       width: 300,
//                       buttons: Ext.MessageBox.YESNO,
//                       fn: function(){
//                        alert('aaa');
//                       },
//                       animEl: 'btnAdd',
//                       icon: Ext.MessageBox.INFO
//                    });

                }
            }
        });
    },
    views:['deptTree'],
    models:[],
    stores:['deptStore']
});