
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
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.jueseArr.length; i++) {
            for (var j = 0; j < this.rolePanel.childrenCount; j++) {
                if (this.rolePanel.children[j].getComponent(Role_1.default).getIndex() == EditorManager_1.EditorManager.editorData.jueseArr[i]) {
                    this.rolePanel.children[j].setSiblingIndex(i);
                    this.rolePanel.children[j].getComponent(Role_1.default).setDuilieIndex(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRiwrREFBOEQ7QUFDOUQsaUVBQWdFO0FBQ2hFLGtEQUFpRDtBQUNqRCw2REFBNEQ7QUFHNUQsaURBQTRDO0FBQzVDLCtCQUEwQjtBQUMxQiw2Q0FBNEM7QUFHdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUE0UUM7UUF6UVcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUMxQix1QkFBaUIsR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxxQkFBZSxHQUFXLENBQUMsR0FBRyxDQUFDO1FBb0ovQixpQkFBVyxHQUFHLEtBQUssQ0FBQTs7SUF5Ry9CLENBQUM7SUEzUEcsdUJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGlD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QUMsS0FBSyxDQUFDO3lDQUNZO0lBWGQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTRRMUI7SUFBRCxhQUFDO0NBNVFELEFBNFFDLENBNVFtQyxFQUFFLENBQUMsU0FBUyxHQTRRL0M7a0JBNVFvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9Ub29sc1wiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyXCI7XHJcbmltcG9ydCBFZGl0TWFvWmlBcmVhIGZyb20gXCIuL0VkaXRNYW9aaUFyZWFcIjtcclxuaW1wb3J0IEdhbWVNYW96aSBmcm9tIFwiLi9HYW1lTWFvemlcIjtcclxuaW1wb3J0IEdhbWVNYW96aURyYWcgZnJvbSBcIi4vR2FtZU1hb3ppRHJhZ1wiO1xyXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9Sb2xlXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcm9sZVBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBvcHRpb25QYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgYnRuX2NoZWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdGlnYW46IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJvbGVTdGFydFg6IG51bWJlciA9IDE5MDA7XHJcbiAgICBwcml2YXRlIG9wdGlvblBhbmVsU3RhcnRZOiBudW1iZXIgPSAtNzM1O1xyXG4gICAgcHJpdmF0ZSBvcHRpb25QYW5lbEVuZFk6IG51bWJlciA9IC00MjA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMucmVzZXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9NQU9aSV9EUkFHX0VORCwgdGhpcy5oYW5kbGVEcmFnRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLnJlc2V0VUksIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfUkVQTEFZLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9NQU9aSV9EUkFHX0VORCwgdGhpcy5oYW5kbGVEcmFnRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVudGVyR2FtZSgpIHtcclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEFuaSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRVSSgpIHtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJvbGVQYW5lbCk7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMub3B0aW9uUGFuZWwpO1xyXG4gICAgICAgIHRoaXMucm9sZVBhbmVsLnggPSAwO1xyXG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQYWlkdWkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTaWRlSWRsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHVybigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dNYW96aSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZygpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uUGFuZWwueSA9IHRoaXMub3B0aW9uUGFuZWxFbmRZO1xyXG4gICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbaV0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFuc3dlcltpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFvemlOb2RlID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldE1hb3ppTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbal0ubmFtZSA9PSBhbnN3ZXJbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5vcHRpb25zW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hb3ppTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5wYXJlbnQgPSBtYW96aU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnBvc2l0aW9uID0gY2MudjMoMCwwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZURyYWdFbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLnRpZ2FuLnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbjtcclxuICAgICAgICB0aGlzLnRpZ2FuLm5vZGUucGFyZW50LmFjdGl2ZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbi5sZW5ndGggPiAwO1xyXG4gICAgICAgIHRoaXMucm9sZVBhbmVsLnggPSB0aGlzLnJvbGVTdGFydFg7XHJcbiAgICAgICAgdGhpcy5vcHRpb25QYW5lbC55ID0gdGhpcy5vcHRpb25QYW5lbFN0YXJ0WTtcclxuICAgICAgICB0aGlzLmJ0bl9jaGVjay5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnNldFJvbGVQb3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJvbGVQb3MoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltqXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnJbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltqXS5zZXRTaWJsaW5nSW5kZXgoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5bal0uZ2V0Q29tcG9uZW50KFJvbGUpLnNldER1aWxpZUluZGV4KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEFuaSgpIHtcclxuICAgICAgICB0aGlzLnNldFdhbGsoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnJvbGVQYW5lbCkudG8oNS41LCB7IHg6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQYWlkdWkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2lkZUlkbGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHVybigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01hb3ppKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEaWFsb2coKTtcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25QYW5lbCkudG8oMSwgeyB5OiB0aGlzLm9wdGlvblBhbmVsRW5kWSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFdhbGsoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcIndhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcIndhbGtfc2lkZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFR1cm4oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwidHVyblwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJpZGxlX2Zyb250XCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTaWRlSWRsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJpZGxlX3NpZGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd01hb3ppKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5zaG93TWFvemkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RGlhbG9nKCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlRmF5YW5BcnJbaV0gIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZGVsYXkrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5zaG93RGlhbG9nKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0sIDQgLSBkZWxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVDaGVjayA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGhhbmRsZURyYWdFbmQoKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlciA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm9sZU1hb3ppID0gdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldE1hb3ppTm9kZSgpO1xyXG4gICAgICAgICAgICBpZiAocm9sZU1hb3ppLmNoaWxkcmVuQ291bnQgPiAwICYmIHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykgJiYgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9jaGVjay5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyb2xlTWFvemkuY2hpbGRyZW5Db3VudCA+IDAgJiYgcm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKSkge1xyXG4gICAgICAgICAgICAgICAgYW5zd2VyW2ldID0gcm9sZU1hb3ppLmNoaWxkcmVuWzBdLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0NoZWNrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVDaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xyXG4gICAgICAgIGxldCBpc1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvbGVNYW96aSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRNYW96aU5vZGUoKTtcclxuICAgICAgICAgICAgaWYgKHJvbGVNYW96aS5jaGlsZHJlbkNvdW50ID4gMCAmJiByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLmdldEluZGV4KCkgPT0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MudHdlZW4ocm9sZU1hb3ppLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAudGhlbihjYy5iZXppZXJUbygwLjMsIFtjYy52MigwLDApLCBjYy52MigxMDAsIDEwMCksIGNjLnYyKDEwMCwtNjAwKV0pLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHJvbGVNYW96aS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hb3ppRHJhZykuZ2V0SW5kZXgoKSAhPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubWFvemlBcnJbaV0pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2MudHdlZW4ocm9sZU1hb3ppLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAudGhlbihjYy5iZXppZXJUbygwLjMsIFtjYy52MigwLDApLCBjYy52MigxMDAsIDEwMCksIGNjLnYyKDEwMCwtNjAwKV0pLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5nZXRJbmRleCgpICE9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihyb2xlTWFvemkuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYy5iZXppZXJUbygwLjMsIFtjYy52MigwLCAwKSwgY2MudjIoMTAwLCAxMDApLCBjYy52MigxMDAsIC02MDApXSkuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlTWFvemkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEdhbWVNYW96aURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5nZXRJbmRleCgpID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocm9sZU1hb3ppLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oY2MuYmV6aWVyVG8oMC4zLCBbY2MudjIoMCwgMCksIGNjLnYyKDEwMCwgMTAwKSwgY2MudjIoMTAwLCAtNjAwKV0pLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChHYW1lTWFvemlEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmlnaHQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVdyb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUmlnaHQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5q2j56Gu5Y+N6aaIMDFcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShyb2xlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaHVhbmh1XCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlV3JvbmcoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuX2NoZWNrLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCBmYWxzZSk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLplJnor6/lj43ppogwMVwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuZ2V0SW5kZXgoKSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFuaU5hbWUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQYWlkdWkgPyBcImlkbGVfc2lkZVwiIDogXCJpZGxlX2Zyb250XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHJvbGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgYW5pTmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZVBhbmVsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlUGFuZWwuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KFJvbGUpLmdldEluZGV4KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVQYW5lbC5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUocm9sZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcImN1b3d1XCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=