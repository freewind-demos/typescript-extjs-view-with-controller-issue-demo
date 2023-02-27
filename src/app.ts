// import "./createComponent2";

Ext.onReady(() => {

    const myViewModel = new Ext.app.ViewModel({
        data: {
            message: 'click on me directly'
        }
    });

    const myController = new Ext.app.ViewController({
        onClick: () => {
            alert('### MyController.onClick');
        }
    })

    Ext.define('MyView2', {
        extend: 'Ext.panel.Panel',
        height: 100,
        width: 200,
        title: 'Hello world - correct',
        bind: {
            html: 'Hello, {message}'
        },
        viewModel: myViewModel,
        controller: myController,
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


    new Ext.app.Application({
        name: 'hello',
        mainView: new Ext.panel.Panel({
            renderTo: 'main',
            items: [
                // 正常行为
                Ext.create('MyView2'),
                // 直接基于Panel产生的对象，click行为不同
                // NOTE 不能在两个item间复用下面的对象，因为可能会被修改而导致行为不同
                Ext.create('Ext.panel.Panel', {
                    height: 100,
                    width: 200,
                    title: 'Hello world - strange click',
                    bind: {
                        html: 'Hello, {message}'
                    },
                    viewModel: myViewModel,
                    controller: myController,
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
            ]
        }),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
