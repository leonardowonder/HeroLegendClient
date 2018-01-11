// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        nameBox: {
            default: null,
            type: cc.EditBox,
        },
        passBox: {
            default: null,
            type: cc.EditBox,
        },
        changeNameButton: {
            default: null,
            type: cc.Button
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.changeNameButton.node.active = false;
    },

    start() {
        this.initEvents();
    },

    update(dt) {

    },
    onDestroy() {

    },
    /* -----------------------------------------------------------------------/
    							UI 相关
    /------------------------------------------------------------------------ */
    onLogin() {
        let name = this.nameBox.string;
        let pass = this.passBox.string;
        console.log('on login ' + name + ' ' + pass);
        KBEngine.Event.fire('login', name, pass, 'HeroLegend');
    },
    onChangeAccountName() {
        KBEngine.app.player().onChangeName(this.nameBox.string);
    },
    /* -----------------------------------------------------------------------/
    							KBEngine 事件响应
    /------------------------------------------------------------------------ */
    initEvents() {
        // common

        // login
        KBEngine.Event.register("onLoginSuccessfully", this, "onLoginComplete");

        // selavatars(register by scripts)
    },

    onLoginComplete(rndUUID, eid, accountEntity) {
        console.log('Login onLoginComplete');
        this.changeNameButton.node.active = true;
        KBEngine.app.player().reqAccountName();
    }
});
