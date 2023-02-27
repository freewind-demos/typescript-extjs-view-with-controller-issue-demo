export const createComponent1 = () => new Ext.panel.Panel({
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
        onClick: () => {
            alert('### controller.onClick');
        }
    }),
    onClick: () => {
        alert('### view.onClick')
    },
    listeners: {
        click: {
            element: 'el',
            // NOTE view中的fn指向的是view自己定义的method
            fn: 'onClick'
        }
    },
    items: [
        new Ext.button.Button({
            text: 'button',
            listeners: {
                // NOTE 嵌入的'fn'会先指向controller中的method，然后是view自己的method
                click: 'onClick',
            }
        })
    ]
})