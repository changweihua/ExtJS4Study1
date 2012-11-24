Ext.define('CMONO.view.UserGrid', {
        extend:'Ext.grid.Panel',
        title:'用户列表',
        titleAlign:'center',
        alias:'widget.usergrid',
        width:1200,
        height:500,
        frame:true,
        forceFit:true,
        columns:[ 
            {header:'序号', xtype: 'rownumberer'},
            {header:'姓名', dataIndex:'name', width:35, field:{xtype:'textfield'}},
            {header:'性别', dataIndex:'sex',renderer:function(val){
                var sex = val || '男';
                if(sex == '男'){
                    return '<img src="images/male.gif" />'
                }else if(sex == '女'){
                    return '<img src="images/female.gif" />'
                }
            }},
            {header:'存款', dataIndex:'deposit', xtype:'numbercolumn', format:'0.00',renderer:function(val){
                var deposit = val || 10000;
                if(deposit < 10000){
                    return '<font color="red">' + deposit + '</font>';
                }else if(deposit > 10000){
                    return '<font color="green">' + deposit + '</font>';
                }else{
                    return deposit;
                }
            }},
            {header:'出生年月日', xtype:'datecolumn', format:'Y年m月d日', dataIndex:'birthday'},
            {header:'年龄', dataIndex:'age', width:50, field:{xtype:'numberfield'},
                summaryType:'average',
                summaryRenderer:function(value, summaryData, dataIndex){
                    //return Ext.String.format(':' + value);//会自动缩略
                    return Ext.util.Format.number(value, '00.0');
                }
            },
            {header:'电子邮件', dataIndex:'email'},
            {xtype:'templatecolumn',tpl:'{name}的电子邮件是{email}',text:'描述'},
            {xtype:'actioncolumn', tooltip:'删除', text:'操作', id:'delete', icon:'images/delete.gif'}
        ],
        
        features:[
            Ext.create('Ext.grid.feature.RowBody', {
                getAdditionalData:function(data, index, record, options){
                    var headerCt = this.view.headerCt;
                    colspan = headerCt.getColumnCount();
                    
                    return {
                        rowBody:'<img src="images/Office.ico" alt="描述" />' + record.get('name') + '的电子邮件是' + record.get('email'),
                        rowBodyCls:this.rowBodyCls,
                        rowBodyColspan:colspan
                    };
                }
            }) , {ftype:'summary'},
            Ext.create('Ext.grid.feature.Grouping', {
                groupByText:'本字段分组',
                groupHeaderTpl:'{name} 一共{rows.length}人',
                showGroupsText:'展示分组',
                startCollapsed:true
            })
        ],
        
//        store:Ext.data.StoreManager.lookup('UserStore'),
        store:'UserStore',
        
        selType: 'checkboxmodel',
        multiSelect:true,
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 2
            })
        ],
        dockedItems: [{
            xtype: 'pagingtoolbar',
//            store: Ext.data.StoreManager.lookup('UserStore'),   // same store GridPanel is using
            store:'UserStore',
            dock: 'bottom',
            displayInfo: true
        }],
        
        tbar:[
            {text:'刷新', id:'btnRefresh'}, '-',
            {text:'添加'}, '-',
            {text:'删除'}, '-',
            {text:'保存', id:'btnSave'}, '-',
            {text:'查找'}, {xtype:'textfield'}, '-',
            {text:'筛选', id:'btnFilter'}, {xtype:'textfield'}, '-',
            {text:'Selection', id:'selection'}
        ],
        initComponent:function(){
            this.callParent(arguments);
        }
});