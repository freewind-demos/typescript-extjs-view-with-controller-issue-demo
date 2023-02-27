import {createComponent1} from "./createComponent1";
import './component2';

Ext.onReady(() => {
    new Ext.app.Application({
        name: 'hello',
        mainView: new Ext.panel.Panel({
            renderTo: 'main',
            items: [
                createComponent1(),
                {xtype: 'component2'}
            ]
        }),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
