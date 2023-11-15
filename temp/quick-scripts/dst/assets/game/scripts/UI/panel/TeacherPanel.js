
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

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
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var ReportManager_1 = require("../../../../frame/scripts/Manager/ReportManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var DragHead_1 = require("../Item/DragHead");
var DragMaozi_1 = require("../Item/DragMaozi");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.tigan_edit = null;
        _this.maozi_area = null;
        _this.head_area = null;
        _this.fayan_edit_1 = null;
        _this.fayan_edit_2 = null;
        _this.fayan_edit_3 = null;
        _this.fayan_edit_4 = null;
        _this.toggle_paidui = null;
        _this._btn_save = null;
        _this._btn_view = null;
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_HEAD_END, this.onChangeHead, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_MAOZI_END, this.onChnageMaozi, this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        // this._btn_save.active = true;
    };
    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.tigan_edit.string = EditorManager_1.EditorManager.editorData.tigan ? EditorManager_1.EditorManager.editorData.tigan.toString() : '';
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.maoziArr.length; i++) {
            if (EditorManager_1.EditorManager.editorData.maoziArr[i] == null) {
                UIHelp_1.UIHelp.showTip("还有帽子没有设置哦！");
                return;
            }
        }
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.jueseArr.length; i++) {
            if (EditorManager_1.EditorManager.editorData.jueseArr[i] == null) {
                UIHelp_1.UIHelp.showTip("还有角色没有设置哦！");
                return;
            }
        }
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
        }
    };
    TeacherPanel.prototype.onHandleTiganChanged = function () {
        if (this.tigan_edit.string.length >= 30) {
            UIHelp_1.UIHelp.showTip("最多输入30个字哦！");
        }
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.onHanleTiganEnd = function () {
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.onHandleFayan1Changed = function () {
        if (this.fayan_edit_1.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[0] = this.fayan_edit_1.string;
    };
    TeacherPanel.prototype.onHanleFayan1End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[0] = this.fayan_edit_1.string;
    };
    TeacherPanel.prototype.onHandleFayan2Changed = function () {
        if (this.fayan_edit_2.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[1] = this.fayan_edit_2.string;
    };
    TeacherPanel.prototype.onHanleFayan2End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[1] = this.fayan_edit_2.string;
    };
    TeacherPanel.prototype.onHandleFayan3Changed = function () {
        if (this.fayan_edit_3.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[2] = this.fayan_edit_3.string;
    };
    TeacherPanel.prototype.onHanleFayan3End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[2] = this.fayan_edit_3.string;
    };
    TeacherPanel.prototype.onHandleFayan4Changed = function () {
        if (this.fayan_edit_4.string.length >= 20) {
            UIHelp_1.UIHelp.showTip("最多输入20个字哦！");
        }
        EditorManager_1.EditorManager.editorData.jueseFayanArr[3] = this.fayan_edit_4.string;
    };
    TeacherPanel.prototype.onHanleFayan4End = function () {
        EditorManager_1.EditorManager.editorData.jueseFayanArr[3] = this.fayan_edit_4.string;
    };
    TeacherPanel.prototype.onChnageMaozi = function () {
        for (var i = 0; i < this.maozi_area.childrenCount; i++) {
            var maozi = this.maozi_area.children[i];
            if (maozi.childrenCount > 0) {
                var index = maozi.children[0].getComponent(DragMaozi_1.default).getIndex();
                EditorManager_1.EditorManager.editorData.maoziArr[i] = index;
            }
            else {
                EditorManager_1.EditorManager.editorData.maoziArr[i] = null;
            }
        }
        // console.log("EditorManager.editorData.maoziArr", EditorManager.editorData.maoziArr);
    };
    TeacherPanel.prototype.onChangeHead = function () {
        for (var i = 0; i < this.head_area.childrenCount; i++) {
            var head = this.head_area.children[i];
            if (head.childrenCount > 0) {
                var index = head.children[0].getComponent(DragHead_1.default).getIndex();
                EditorManager_1.EditorManager.editorData.jueseArr[i] = index;
            }
            else {
                EditorManager_1.EditorManager.editorData.jueseArr[i] = null;
            }
        }
        // console.log("EditorManager.editorData.jueseArr", EditorManager.editorData.jueseArr);
    };
    TeacherPanel.prototype.onTogglePaidui = function (toggle) {
        var index = this.toggle_paidui.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPaidui = index == 0;
    };
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "tigan_edit", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "maozi_area", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "head_area", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_1", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_2", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_3", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "fayan_edit_4", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_paidui", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUNwRixpRkFBZ0Y7QUFDaEYseUVBQXdFO0FBQ3hFLHdGQUFtRjtBQUVuRixpRUFBZ0U7QUFFaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCw2Q0FBd0M7QUFDeEMsK0NBQTBDO0FBQzFDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUFxTUM7UUFqTVcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRTdDLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBdUIsSUFBSSxDQUFDO1FBRXpDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUEwS3RDLENBQUM7SUF4S0csNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEVBQUUsQ0FB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QUFDLE9BQU8sQ0FBQztvREFDaUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztzREFDbUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztzREFDbUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztzREFDbUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztzREFDbUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQzt1REFDb0I7SUF4QmhDLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FxTWhDO0lBQUQsbUJBQUM7Q0FyTUQsQUFxTUMsQ0FyTXlDLDBCQUFnQixHQXFNekQ7a0JBck1vQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBCYXNlVGVhY2hlclBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVUkvUGFuZWwvQmFzZVRlYWNoZXJQYW5lbCc7XG5pbXBvcnQgU3VibWlzc2lvblBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVUkvUGFuZWwvU3VibWlzc2lvblBhbmVsJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwJztcbmltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi9EYXRhL0NvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgRHJhZ0hlYWQgZnJvbSAnLi4vSXRlbS9EcmFnSGVhZCc7XG5pbXBvcnQgRHJhZ01hb3ppIGZyb20gJy4uL0l0ZW0vRHJhZ01hb3ppJztcbmltcG9ydCBHYW1lUGFuZWwgZnJvbSAnLi9HYW1lUGFuZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclBhbmVsIGV4dGVuZHMgQmFzZVRlYWNoZXJQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVGVhY2hlclBhbmVsJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfc3RhcnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9yZXBsYXk6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV90aXRsZUF1ZGlvOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIHByaXZhdGUgdGlnYW5fZWRpdDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtYW96aV9hcmVhOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGhlYWRfYXJlYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBmYXlhbl9lZGl0XzE6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIHByaXZhdGUgZmF5YW5fZWRpdF8yOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGZheWFuX2VkaXRfMzogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSBmYXlhbl9lZGl0XzQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfcGFpZHVpOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYnRuX3NhdmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2J0bl92aWV3OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRFJBR19IRUFEX0VORCwgdGhpcy5vbkNoYW5nZUhlYWQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkRSQUdfTUFPWklfRU5ELCB0aGlzLm9uQ2huYWdlTWFvemksIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIC8vIOWPr+e8lui+keeahOa4uOaIj++8jOS4jeWxleekuuS/neWtmOaMiemSrlxuICAgICAgICBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bl9zYXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSAhaXNFZGl0O1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuX2J0bl9zYXZlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u55WM6Z2i77yI6L+Z6YeM5bey57uP5ou/5Yiw5LqG572R57uc6K+35rGC5pWw5o2u77yJXG4gICAgICovXG4gICAgc2V0UGFuZWwoKSB7XG4gICAgICAgIHN1cGVyLnNldFBhbmVsKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlX3N0YXJzLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV9yZXBsYXkudG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUmVwbGF5ID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX3RpdGxlQXVkaW8udG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGxheVRpdGxlID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50aWdhbl9lZGl0LnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbiA/IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbi50b1N0cmluZygpIDogJyc7XG4gICAgfVxuXG4gICAgLy8g5pif57qn6K+E5Yik5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlU3Rhcih0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOmHjeeOqeW8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVJlcGxheSh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9yZXBsYXkudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDoh6rliqjmkq3mlL7popjlubLor63pn7PlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVUaXRsZUF1ZGlvKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3RpdGxlQXVkaW8udG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQbGF5VGl0bGUgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDkv53lrZjor77ku7bmjInpkq5cbiAgICBwdWJsaWMgb25CdG5TYXZlQ2xpY2tlZCgpIHtcbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOWujOaIkOS4gOmBjemimOebricpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOmihOiniOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blZpZXdDbGlja2VkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLov5jmnInluL3lrZDmsqHmnInorr7nva7lk6bvvIFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyW2ldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd1RpcChcIui/mOacieinkuiJsuayoeacieiuvue9ruWTpu+8gVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgLTEgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKCkgfHxcbiAgICAgICAgICAgIG51bGwgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKCkgfHxcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKCfor7flhYjorr7nva5jb3Vyc2V3YXJlTGV2ZWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuVEVBQ0hFUl9QQU5FTF9MT0FESU5HLCB0cnVlKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5zaG93VUkoR2FtZVBhbmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGFuZGxlVGlnYW5DaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy50aWdhbl9lZGl0LnN0cmluZy5sZW5ndGggPj0gMzApIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKFwi5pyA5aSa6L6T5YWlMzDkuKrlrZflk6bvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuID0gdGhpcy50aWdhbl9lZGl0LnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmxlVGlnYW5FbmQoKSB7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbiA9IHRoaXMudGlnYW5fZWRpdC5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5kbGVGYXlhbjFDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5mYXlhbl9lZGl0XzEuc3RyaW5nLmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLmnIDlpJrovpPlhaUyMOS4quWtl+WTpu+8gVwiKTtcbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclswXSA9IHRoaXMuZmF5YW5fZWRpdF8xLnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmxlRmF5YW4xRW5kKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclswXSA9IHRoaXMuZmF5YW5fZWRpdF8xLnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmRsZUZheWFuMkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZheWFuX2VkaXRfMi5zdHJpbmcubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcChcIuacgOWkmui+k+WFpTIw5Liq5a2X5ZOm77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyWzFdID0gdGhpcy5mYXlhbl9lZGl0XzIuc3RyaW5nO1xuICAgIH1cblxuICAgIG9uSGFubGVGYXlhbjJFbmQoKSB7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyWzFdID0gdGhpcy5mYXlhbl9lZGl0XzIuc3RyaW5nO1xuICAgIH1cblxuICAgIG9uSGFuZGxlRmF5YW4zQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmF5YW5fZWRpdF8zLnN0cmluZy5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKFwi5pyA5aSa6L6T5YWlMjDkuKrlrZflk6bvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlRmF5YW5BcnJbMl0gPSB0aGlzLmZheWFuX2VkaXRfMy5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5sZUZheWFuM0VuZCgpIHtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlRmF5YW5BcnJbMl0gPSB0aGlzLmZheWFuX2VkaXRfMy5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5kbGVGYXlhbjRDaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy5mYXlhbl9lZGl0XzQuc3RyaW5nLmxlbmd0aCA+PSAyMCkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLmnIDlpJrovpPlhaUyMOS4quWtl+WTpu+8gVwiKTtcbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclszXSA9IHRoaXMuZmF5YW5fZWRpdF80LnN0cmluZztcbiAgICB9XG5cbiAgICBvbkhhbmxlRmF5YW40RW5kKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclszXSA9IHRoaXMuZmF5YW5fZWRpdF80LnN0cmluZztcbiAgICB9XG5cbiAgICBvbkNobmFnZU1hb3ppKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFvemlfYXJlYS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtYW96aSA9IHRoaXMubWFvemlfYXJlYS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChtYW96aS5jaGlsZHJlbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG1hb3ppLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChEcmFnTWFvemkpLmdldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyW2ldID0gaW5kZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFycltpXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubWFvemlBcnJcIiwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUhlYWQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oZWFkX2FyZWEuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IHRoaXMuaGVhZF9hcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGhlYWQuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBoZWFkLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChEcmFnSGVhZCkuZ2V0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnJbaV0gPSBpbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyW2ldID0gbnVsbDtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUFyclwiLCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnIpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlUGFpZHVpKHRvZ2dsZTogY2MuVG9nZ2xlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3BhaWR1aS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BhaWR1aSA9IGluZGV4ID09IDA7XG4gICAgfVxuXG59XG4iXX0=