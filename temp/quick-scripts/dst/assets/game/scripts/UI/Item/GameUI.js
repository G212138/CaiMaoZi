
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83e13b/WW5Aur+PVLmDn/PY', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GameMaoziDrag_1 = require("./GameMaoziDrag");
var Role_1 = require("./Role");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rolePanel = null;
        _this.optionPanel = null;
        _this.btn_check = null;
        _this.options = [];
        _this.tigan = null;
        _this.roleStartX = 1900;
        _this.optionPanelStartY = -735;
        _this.optionPanelEndY = -420;
        _this.enableCheck = false;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_MAOZI_DRAG_END, this.handleDragEnd, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_MAOZI_DRAG_END, this.handleDragEnd, this);
    };
    GameUI.prototype.handleEnterGame = function () {
        UIHelp_1.UIHelp.showMask();
        this.initUI();
        this.initAni();
    };
    GameUI.prototype.resetUI = function () {
        this.initUI();
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.rolePanel);
        cc.Tween.stopAllByTarget(this.optionPanel);
        this.rolePanel.x = 0;
        if (EditorManager_1.EditorManager.editorData.isPaidui) {
            this.setSideIdle();
        }
        else {
            this.setTurn();
        }
        this.showMaozi();
        this.showDialog();
        this.optionPanel.y = this.optionPanelEndY;
        UIHelp_1.UIHelp.closeMask();
        for (var i = 0; i < this.options.length; i++) {
            this.options[i].getComponent(GameMaoziDrag_1.default).reset();
        }
        var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answer;
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] != null) {
                var maoziNode = this.rolePanel.children[i].getComponent(Role_1.default).getMaoziNode();
                var option = null;
                for (var j = 0; j < this.options.length; j++) {
                    if (this.options[j].name == answer[i]) {
                        option = this.options[j];
                    }
                }
                if (option != null) {
                    maoziNode.active = true;
                    option.parent = maoziNode;
                    option.position = cc.v3(0, 0);
                }
            }
        }
        this.handleDragEnd();
    };
    GameUI.prototype.initUI = function () {
        this.tigan.string = EditorManager_1.EditorManager.editorData.tigan;
        this.tigan.node.parent.active = EditorManager_1.EditorManager.editorData.tigan.length > 0;
        this.rolePanel.x = this.roleStartX;
        this.optionPanel.y = this.optionPanelStartY;
        this.btn_check.opacity = 0;
        this.setRolePos();
    };
    GameUI.prototype.setRolePos = function () {
        for (var j = 0; j < this.rolePanel.childrenCount; j++) {
            this.rolePanel.children[j].active = false;
        }
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.jueseArr.length; i++) {
            var roleIndex = EditorManager_1.EditorManager.editorData.jueseArr[i];
            for (var j = 0; j < this.rolePanel.childrenCount; j++) {
                if (this.rolePanel.children[j].getComponent(Role_1.default).getIndex() == roleIndex) {
                    this.rolePanel.children[j].getComponent(Role_1.default).init(i);
                }
            }
        }
    };
    GameUI.prototype.initAni = function () {
        var _this = this;
        this.setWalk();
        cc.tween(this.rolePanel).to(5.5, { x: 0 }).call(function () {
            if (EditorManager_1.EditorManager.editorData.isPaidui) {
                _this.setSideIdle();
            }
            else {
                _this.setTurn();
            }
            _this.scheduleOnce(function () {
                _this.showMaozi();
                _this.showDialog();
            }, 1);
            cc.tween(_this.optionPanel).to(1, { y: _this.optionPanelEndY }).call(function () {
                UIHelp_1.UIHelp.closeMask();
            }).start();
        }).start();
    };
    GameUI.prototype.setWalk = function () {
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            var role = this.rolePanel.children[i].getChildByName("role");
            if (this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "walk", true);
            }
            else {
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "walk_side", true);
            }
        }
    };
    GameUI.prototype.setTurn = function () {
        var _loop_1 = function (i) {
            var role = this_1.rolePanel.children[i].getChildByName("role");
            Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "turn", false, function () {
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "idle_front", true);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            _loop_1(i);
        }
    };
    GameUI.prototype.setSideIdle = function () {
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            var role = this.rolePanel.children[i].getChildByName("role");
            Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "idle_side", true);
        }
    };
    GameUI.prototype.showMaozi = function () {
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            this.rolePanel.children[i].getComponent(Role_1.default).showMaozi();
        }
    };
    GameUI.prototype.showDialog = function () {
        var _this = this;
        var index = 0;
        var delay = 0;
        var _loop_2 = function (i) {
            if (EditorManager_1.EditorManager.editorData.jueseFayanArr[i] != "") {
                delay++;
                this_2.scheduleOnce(function () {
                    index++;
                    _this.rolePanel.children[i].getComponent(Role_1.default).showDialog(index);
                }, 4 - delay);
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            _loop_2(i);
        }
    };
    GameUI.prototype.handleDragEnd = function () {
        var answer = [null, null, null, null];
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            var roleMaozi = this.rolePanel.children[i].getComponent(Role_1.default).getMaoziNode();
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag_1.default) && this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                this.enableCheck = true;
                this.btn_check.opacity = 255;
            }
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag_1.default)) {
                answer[i] = roleMaozi.children[0].name;
            }
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answer = answer;
    };
    GameUI.prototype.onClickCheck = function () {
        if (!this.enableCheck) {
            return;
        }
        UIHelp_1.UIHelp.showMask();
        var isRight = false;
        var _loop_3 = function (i) {
            var roleMaozi = this_3.rolePanel.children[i].getComponent(Role_1.default).getMaoziNode();
            if (roleMaozi.childrenCount > 0 && roleMaozi.children[0].getComponent(GameMaoziDrag_1.default)) {
                if (this_3.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                    if (roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).getIndex() == EditorManager_1.EditorManager.editorData.maoziArr[i]) {
                        isRight = true;
                    }
                    // else {
                    //     cc.tween(roleMaozi.children[0])
                    //     .then(cc.bezierTo(0.3, [cc.v2(0,0), cc.v2(100, 100), cc.v2(100,-600)]).easing(cc.easeSineOut())).call(() => {
                    //         roleMaozi.children[0].getComponent(GameMaoziDrag).reset();
                    //     }).start();
                    // }
                }
                // else {
                //     if (roleMaozi.children[0].getComponent(GameMaoziDrag).getIndex() != EditorManager.editorData.maoziArr[i]) {
                //         cc.tween(roleMaozi.children[0])
                //         .then(cc.bezierTo(0.3, [cc.v2(0,0), cc.v2(100, 100), cc.v2(100,-600)]).easing(cc.easeSineOut())).call(() => {
                //             roleMaozi.children[0].getComponent(GameMaoziDrag).reset();
                //         }).start();
                //     }
                // }
                if (isRight) {
                    if (roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).getIndex() != EditorManager_1.EditorManager.editorData.maoziArr[i]) {
                        cc.tween(roleMaozi.children[0])
                            .then(cc.bezierTo(0.3, [cc.v2(0, 0), cc.v2(100, 100), cc.v2(100, -600)]).easing(cc.easeSineOut())).call(function () {
                            roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).reset();
                        }).start();
                    }
                }
                else {
                    if (this_3.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                        cc.tween(roleMaozi.children[0])
                            .then(cc.bezierTo(0.3, [cc.v2(0, 0), cc.v2(100, 100), cc.v2(100, -600)]).easing(cc.easeSineOut())).call(function () {
                            roleMaozi.children[0].getComponent(GameMaoziDrag_1.default).reset();
                        }).start();
                    }
                }
            }
        };
        var this_3 = this;
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            _loop_3(i);
        }
        if (isRight) {
            this.handleRight();
        }
        else {
            this.handleWrong();
        }
    };
    GameUI.prototype.handleRight = function () {
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确反馈01"], false, false, false);
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            if (this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                var role = this.rolePanel.children[i].getChildByName("role");
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "huanhu", true);
            }
        }
        this.scheduleOnce(function () {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
        }, 2);
    };
    GameUI.prototype.handleWrong = function () {
        var _this = this;
        this.enableCheck = false;
        this.btn_check.opacity = 0;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误反馈01"], false, false, false, (function () {
            for (var i = 0; i < _this.rolePanel.childrenCount; i++) {
                if (_this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                    var role = _this.rolePanel.children[i].getChildByName("role");
                    var aniName = EditorManager_1.EditorManager.editorData.isPaidui ? "idle_side" : "idle_front";
                    Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), aniName, true);
                }
            }
            UIHelp_1.UIHelp.closeMask();
        }));
        for (var i = 0; i < this.rolePanel.childrenCount; i++) {
            if (this.rolePanel.children[i].getComponent(Role_1.default).getIndex() == 2) {
                var role = this.rolePanel.children[i].getChildByName("role");
                Tools_1.Tools.playSpine(role.getComponent(sp.Skeleton), "cuowu", true);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "rolePanel", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "optionPanel", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_check", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "options", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "tigan", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRiwrREFBOEQ7QUFDOUQsaUVBQWdFO0FBQ2hFLGtEQUFpRDtBQUNqRCw2REFBNEQ7QUFHNUQsaURBQTRDO0FBQzVDLCtCQUEwQjtBQUMxQiw2Q0FBNEM7QUFHdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUErUUM7UUE1UVcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUMxQix1QkFBaUIsR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxxQkFBZSxHQUFXLENBQUMsR0FBRyxDQUFDO1FBdUovQixpQkFBVyxHQUFHLEtBQUssQ0FBQTs7SUF5Ry9CLENBQUM7SUE5UEcsdUJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGlD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RXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDWTtJQVhkLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0ErUTFCO0lBQUQsYUFBQztDQS9RRCxBQStRQyxDQS9RbUMsRUFBRSxDQUFDLFNBQVMsR0ErUS9DO2tCQS9Rb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlclwiO1xyXG5pbXBvcnQgRWRpdE1hb1ppQXJlYSBmcm9tIFwiLi9FZGl0TWFvWmlBcmVhXCI7XHJcbmltcG9ydCBHYW1lTWFvemkgZnJvbSBcIi4vR2FtZU1hb3ppXCI7XHJcbmltcG9ydCBHYW1lTWFvemlEcmFnIGZyb20gXCIuL0dhbWVNYW96aURyYWdcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vUm9sZVwiO1xyXG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHJvbGVQYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgb3B0aW9uUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9jaGVjazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgb3B0aW9uczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRpZ2FuOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByb2xlU3RhcnRYOiBudW1iZXIgPSAxOTAwO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25QYW5lbFN0YXJ0WTogbnVtYmVyID0gLTczNTtcclxuICAgIHByaXZhdGUgb3B0aW9uUGFuZWxFbmRZOiBudW1iZXIgPSAtNDIwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLnJlc2V0VUksIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9SRVBMQVksIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfTUFPWklfRFJBR19FTkQsIHRoaXMuaGFuZGxlRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5yZXNldFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfTUFPWklfRFJBR19FTkQsIHRoaXMuaGFuZGxlRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlckdhbWUoKSB7XHJcbiAgICAgICAgVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgICAgICB0aGlzLmluaXRBbmkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5yb2xlUGFuZWwpO1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm9wdGlvblBhbmVsKTtcclxuICAgICAgICB0aGlzLnJvbGVQYW5lbC54ID0gMDtcclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGFpZHVpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2lkZUlkbGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFR1cm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93TWFvemkoKTtcclxuICAgICAgICB0aGlzLnNob3dEaWFsb2coKTtcclxuICAgICAgICB0aGlzLm9wdGlvblBhbmVsLnkgPSB0aGlzLm9wdGlvblBhbmVsRW5kWTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2ldLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYW5zd2VyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2VyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXJbaV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hb3ppTm9kZSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRNYW96aU5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zW2pdLm5hbWUgPT0gYW5zd2VyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMub3B0aW9uc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtYW96aU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ucGFyZW50ID0gbWFvemlOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5wb3NpdGlvbiA9IGNjLnYzKDAsMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnRW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VUkoKSB7XHJcbiAgICAgICAgdGhpcy50aWdhbi5zdHJpbmcgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW47XHJcbiAgICAgICAgdGhpcy50aWdhbi5ub2RlLnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW4ubGVuZ3RoID4gMDtcclxuICAgICAgICB0aGlzLnJvbGVQYW5lbC54ID0gdGhpcy5yb2xlU3RhcnRYO1xyXG4gICAgICAgIHRoaXMub3B0aW9uUGFuZWwueSA9IHRoaXMub3B0aW9uUGFuZWxTdGFydFk7XHJcbiAgICAgICAgdGhpcy5idG5fY2hlY2sub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRSb2xlUG9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRSb2xlUG9zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2pdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm9sZUluZGV4ID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2pdLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IHJvbGVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2pdLmdldENvbXBvbmVudChSb2xlKS5pbml0KGkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRBbmkoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRXYWxrKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5yb2xlUGFuZWwpLnRvKDUuNSwgeyB4OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGFpZHVpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpZGVJZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFR1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNYW96aSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uUGFuZWwpLnRvKDEsIHsgeTogdGhpcy5vcHRpb25QYW5lbEVuZFkgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRXYWxrKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ3YWxrXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ3YWxrX3NpZGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUdXJuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcInR1cm5cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRsZV9mcm9udFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2lkZUlkbGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRsZV9zaWRlXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dNYW96aSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuc2hvd01hb3ppKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0RpYWxvZygpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyW2ldICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuc2hvd0RpYWxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9LCA0IC0gZGVsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlQ2hlY2sgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVEcmFnRW5kKCkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGVNYW96aSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRNYW96aU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHJvbGVNYW96aS5jaGlsZHJlbkNvdW50ID4gMCAmJiByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpICYmIHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fY2hlY2sub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocm9sZU1hb3ppLmNoaWxkcmVuQ291bnQgPiAwICYmIHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykpIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcltpXSA9IHJvbGVNYW96aS5jaGlsZHJlblswXS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlciA9IGFuc3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDaGVjaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlQ2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICBsZXQgaXNSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlTWFvemkgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0TWFvemlOb2RlKCk7XHJcbiAgICAgICAgICAgIGlmIChyb2xlTWFvemkuY2hpbGRyZW5Db3VudCA+IDAgJiYgcm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5nZXRJbmRleCgpID09IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLnR3ZWVuKHJvbGVNYW96aS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4oY2MuYmV6aWVyVG8oMC4zLCBbY2MudjIoMCwwKSwgY2MudjIoMTAwLCAxMDApLCBjYy52MigxMDAsLTYwMCldKS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChyb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLmdldEluZGV4KCkgIT0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHJvbGVNYW96aS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oY2MuYmV6aWVyVG8oMC4zLCBbY2MudjIoMCwwKSwgY2MudjIoMTAwLCAxMDApLCBjYy52MigxMDAsLTYwMCldKS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykuZ2V0SW5kZXgoKSAhPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubWFvemlBcnJbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocm9sZU1hb3ppLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oY2MuYmV6aWVyVG8oMC4zLCBbY2MudjIoMCwgMCksIGNjLnYyKDEwMCwgMTAwKSwgY2MudjIoMTAwLCAtNjAwKV0pLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHJvbGVNYW96aS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGNjLmJlemllclRvKDAuMywgW2NjLnYyKDAsIDApLCBjYy52MigxMDAsIDEwMCksIGNjLnYyKDEwMCwgLTYwMCldKS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSkpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJpZ2h0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVXcm9uZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJpZ2h0KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCB0cnVlKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuato+ehruWPjemmiDAxXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcImh1YW5odVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9PVkVSKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVdyb25nKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ0bl9jaGVjay5vcGFjaXR5ID0gMDtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgZmFsc2UpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi6ZSZ6K+v5Y+N6aaIMDFcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UsICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmlOYW1lID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGFpZHVpID8gXCJpZGxlX3NpZGVcIiA6IFwiaWRsZV9mcm9udFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIGFuaU5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJjdW93dVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19