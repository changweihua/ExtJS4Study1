Ext.define('CMONO.controller.deptController', {
    extend:'Ext.app.Controller',

    init:function(){
        this.control({
            'depttree':{
                checkchange:function(node, checked, options){
                    if(!node.data.leaf){
                        if(checked){
                            //展开节点
                            node.expand();
                            //遍历孩子节点
                            node.eachChild(function(item){
                                item.data.checked = true;
                                item.updateInfo(true);
                            });
                        }else{
                            //展开节点
                            node.expand();
                            //遍历孩子节点
                            node.eachChild(function(item){
                                item.data.checked = false;
                                item.updateInfo(true);
                            });
                        }
                    }else{
                        if(!checked){
                            node.parentNode.data.checked = false;
                            node.parentNode.updateInfo(true);
                        }
                    }
                }
            },
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
            'depttree button[id=btnCopy]':{
                click:function(btn, e){
                    var tree = btn.ownerCt.ownerCt;
                    var nodes = tree.getChecked();
                    if(nodes.length > 0){
                        tree.setCopyNodes(Ext.clone(nodes));
                        var msgText = [];
                        for(i = 0; i < nodes.length;i++){
                            msgText.push(nodes[i].get('text'))
                            nodes[i].data.checked = false;
                            nodes[i].updateInfo(true);
                            //nodes[i].updateInfo({checked:true});
                        }
                         Ext.Msg.alert('信息', '你拷贝了<br />' + msgText.join('<br />'));
                    }
                }
            },
            'depttree button[id=btnPaste]':{
                click:function(btn, e){
                    var tree = btn.ownerCt.ownerCt;
                    
                    var sources = tree.getCopyNodes();
                    if(sources.length < 1){
                        Ext.Msg.alert('信息提示', '剪贴板中没有任何数据');
                    }else{
                        var targets = tree.getChecked();
                        
                        if(targets.length == 1){
                            var target = targets[0];
                            target.appendChild(sources);
                        }else{
                            Ext.Msg.alert('信息提示', '你必须选择一个且只能选取一个节点');
                        }
                    }
                }
            },
            'depttree button[id=btnDelete]':{
                click:function(btn, e){
                    var tree = btn.ownerCt.ownerCt;
                    
                    var nodes = tree.getChecked();
                    
                    if(nodes.length > 0){
                        for(i = 0; i < nodes.length;i++){
                            nodes[i].remove(true);
                        }
                    }else{
                        Ext.Msg.alert('信息提示', '你至少选取一个节点');
                    }
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
    models:['deptModel'],
    stores:['deptStore']
});