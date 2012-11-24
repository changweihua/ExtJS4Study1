Ext.define('CMONO.view.MainLayout', {
    extend:'Ext.panel.Panel',
    alias:'widget.mainlayout',
    layout:'border',
    bodyStyle:'padding:5px',
    items:[
        {
            xtype:'panel',
            title:'部门树形',
            region:'west',
            layout:'fit',
            collapsible:true,
            width:200,
            height:500,
            margins:'5',
            items:[
                {
                    id:'dept-tree'
                }
            ]
        },
        {
            
            xtype:'panel',
            title:'部门表格',
            region:'center',
            layout:'fit',
            width:500,
            collapsible:true,
            items:[
                {
                    id:'dept-grid'
                }
            ]
        }
    ]
});