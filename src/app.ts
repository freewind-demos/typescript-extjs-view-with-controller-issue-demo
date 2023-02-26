Ext.onReady(() => {
    new Ext.app.Application({
        name: 'hello',
        mainView: new Ext.panel.Panel({
            renderTo: 'main',
            height: 100,
            width: 200,
            title: 'Hello world',
            bind: {
                html: 'Hello, {username}'
            },
            viewModel: new Ext.app.ViewModel({
                data: {
                    username: 'username from viewModel'
                }
            }),
            controller: new Ext.app.ViewController({
                onClickUsername: () => {
                    alert('### controller.onClickUsername');
                }
            }),
            fnOfTheView: () => {
                alert('### fnOfTheView')
            },
            listeners: {
                click: {
                    element: 'el',
                    // NOTE view中的fn指向的是view自己定义的method
                    fn: 'fnOfTheView'
                }
            },
            items: [
                new Ext.button.Button({
                    text: 'button',
                    listeners: {
                        // NOTE 嵌入的'fn'会先指向controller中的method，然后是view自己的method
                        click: 'onClickUsername',
                    }
                })
            ]
        }),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
