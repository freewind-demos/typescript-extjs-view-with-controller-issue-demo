Ext.define('MyViewModel', {
    alias: 'viewmodel.main',
    extend: 'Ext.app.ViewModel',
    data: {
        username: 'username from viewModel'
    }
})

Ext.define('MyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onClick: () => {
        alert('### MyController.onClick');
    }
})

Ext.define('component2', {
    extend: 'Ext.panel.Panel',
    xtype: 'component2',
    height: 100,
    width: 200,
    title: 'Hello world',
    bind: {
        html: 'Hello, {username}'
    },
    viewModel: 'main',
    controller: 'main',
    // NOTE will be ignored
    onClick: () => alert('### view.onClick'),
    listeners: {
        click: {
            element: 'el',
            // NOTE view中的fn指向的是view自己定义的method
            fn: 'onClick'
        }
    },
    items: [{
        xtype: 'button',
        listeners: {
            // NOTE 嵌入的'fn'会先指向controller中的method，然后是view自己的method
            click: 'onClick',
        }
    }]
})
