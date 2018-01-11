KBEngine.Account = KBEngine.Entity.extend(
    {
        __init__: function () {
            this._super();
            KBEngine.Event.fire("onLoginSuccessfully", KBEngine.app.entity_uuid, this.id, this);
            console.log('Account __init__ : ' + KBEngine.app.entity_uuid + ' this.id ' + this.id);
        },
        onChangeName: function (name) {
            console.log('onChangeName: ' + name);
            this.baseCall("onChangeName", name);
        },
        onChangeNameResult: function (name) {
            this.name = name;
            console.log('onChangeNameResult: ' + name);
            KBEngine.Event.fire("onChangeAccountName", name);
        },
        reqAccountName: function () {
            console.log('reqAccountName');
            this.baseCall("reqAccountName");
        },
        onReqAccountNameResult: function (name) {
            this.name = name;
            console.log('onReqAccountNameResult: ' + name);
            KBEngine.Event.fire("onReqAccountNameResult", name);
        }
    }
);