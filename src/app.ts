Ext.onReady(() => {
    new Ext.app.Application({
        name: 'hello',
        mainView: new Ext.panel.Panel({
            renderTo: 'main',
            height: 100,
            width: 200,
            title: 'Hello world',
            html: 'Hello Ext!',
        } ),
        launch: () => {
            console.log("### launch")
            return true;
        }
    } );
})
