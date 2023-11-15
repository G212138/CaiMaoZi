
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a8f9MTdQhOnIwIo/VSXIl3', 'Role');
// game/scripts/UI/Item/Role.ts

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
var EditorManager_1 = require("../../Manager/EditorManager");
var GameMaozi_1 = require("./GameMaozi");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maozi_node_front = null;
        _this.maozi_node_side = null;
        _this.maozi_img = [];
        _this.index = 0;
        _this.xuxian_maozi = null;
        _this.dialog_left = null;
        _this.dialog_right = null;
        _this.duilieIndex = 0;
        _this.maozi_node = null;
        return _this;
    }
    Role.prototype.showMaozi = function () {
        var pipiDuilieIndex = EditorManager_1.EditorManager.editorData.jueseArr.indexOf(2);
        if (EditorManager_1.EditorManager.editorData.isPaidui) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = true;
            this.maozi_node = this.maozi_node_side;
        }
        else {
            this.maozi_node = this.maozi_node_front;
            this.maozi_node_front.active = true;
            this.maozi_node_side.active = false;
        }
        if (this.index == 2) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = false;
            this.xuxian_maozi.active = true;
        }
        if (this.duilieIndex > pipiDuilieIndex) {
            this.maozi_node_front.active = false;
            this.maozi_node_side.active = false;
            this.xuxian_maozi.active = true;
        }
        else if (this.index != 2) {
            //创建一个新的图片
            var maozi = new cc.Node();
            var maozi_sprite = maozi.addComponent(cc.Sprite);
            maozi_sprite.spriteFrame = this.maozi_img[EditorManager_1.EditorManager.editorData.maoziArr[this.duilieIndex]];
            if (EditorManager_1.EditorManager.editorData.maoziArr[this.duilieIndex] != null) {
                maozi.parent = this.maozi_node;
            }
            this.node.getChildByName("maozi").getComponent(GameMaozi_1.default).setEnable(false);
        }
    };
    Role.prototype.showDialog = function (index) {
        var dialog = this.dialog_left;
        if (this.duilieIndex >= 2) {
            dialog = this.dialog_right;
        }
        if (EditorManager_1.EditorManager.editorData.jueseFayanArr[this.duilieIndex] != "") {
            dialog.active = true;
            dialog.getChildByName("text").getComponent(cc.Label).string = EditorManager_1.EditorManager.editorData.jueseFayanArr[this.duilieIndex];
            dialog.getChildByName("index").getComponent(cc.Label).string = index.toString();
        }
    };
    Role.prototype.getIndex = function () {
        return this.index;
    };
    Role.prototype.setDuilieIndex = function (index) {
        this.duilieIndex = index;
    };
    Role.prototype.getMaoziNode = function () {
        return this.maozi_node;
    };
    __decorate([
        property(cc.Node)
    ], Role.prototype, "maozi_node_front", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "maozi_node_side", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Role.prototype, "maozi_img", void 0);
    __decorate([
        property(cc.Integer)
    ], Role.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "xuxian_maozi", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "dialog_left", void 0);
    __decorate([
        property(cc.Node)
    ], Role.prototype, "dialog_right", void 0);
    Role = __decorate([
        ccclass
    ], Role);
    return Role;
}(cc.Component));
exports.default = Role;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVELHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQThFQztRQTNFVyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUE0RHZDLENBQUM7SUExRFUsd0JBQVMsR0FBaEI7UUFDSSxJQUFJLGVBQWUsR0FBRyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDMUM7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRXhDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3BD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MkNBQ2dCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dUNBQ0s7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDbUI7SUFmcEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThFeEI7SUFBRCxXQUFDO0NBOUVELEFBOEVDLENBOUVpQyxFQUFFLENBQUMsU0FBUyxHQThFN0M7a0JBOUVvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVNYW96aSBmcm9tIFwiLi9HYW1lTWFvemlcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWFvemlfbm9kZV9mcm9udDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWFvemlfbm9kZV9zaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgbWFvemlfaW1nOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHByaXZhdGUgaW5kZXg6IE51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgeHV4aWFuX21hb3ppOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBkaWFsb2dfbGVmdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZGlhbG9nX3JpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGR1aWxpZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBtYW96aV9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc2hvd01hb3ppKCkge1xyXG4gICAgICAgIGxldCBwaXBpRHVpbGllSW5kZXggPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VBcnIuaW5kZXhPZigyKTtcclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUGFpZHVpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZV9mcm9udC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX3NpZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZSA9IHRoaXMubWFvemlfbm9kZV9zaWRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZSA9IHRoaXMubWFvemlfbm9kZV9mcm9udDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZV9mcm9udC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfc2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZV9zaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnh1eGlhbl9tYW96aS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kdWlsaWVJbmRleCA+IHBpcGlEdWlsaWVJbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZV9zaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnh1eGlhbl9tYW96aS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCAhPSAyKSB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq5paw55qE5Zu+54mHXHJcbiAgICAgICAgICAgIGxldCBtYW96aSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGxldCBtYW96aV9zcHJpdGUgPSBtYW96aS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgbWFvemlfc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5tYW96aV9pbWdbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm1hb3ppQXJyW3RoaXMuZHVpbGllSW5kZXhdXTtcclxuICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFyclt0aGlzLmR1aWxpZUluZGV4XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtYW96aS5wYXJlbnQgPSB0aGlzLm1hb3ppX25vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFvemlcIikuZ2V0Q29tcG9uZW50KEdhbWVNYW96aSkuc2V0RW5hYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGlhbG9nKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5kaWFsb2dfbGVmdDtcclxuICAgICAgICBpZiAodGhpcy5kdWlsaWVJbmRleCA+PSAyKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZyA9IHRoaXMuZGlhbG9nX3JpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlRmF5YW5BcnJbdGhpcy5kdWlsaWVJbmRleF0gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBkaWFsb2cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGlhbG9nLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyW3RoaXMuZHVpbGllSW5kZXhdO1xyXG4gICAgICAgICAgICBkaWFsb2cuZ2V0Q2hpbGRCeU5hbWUoXCJpbmRleFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbmRleCgpOiBOdW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREdWlsaWVJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kdWlsaWVJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYW96aU5vZGUoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFvemlfbm9kZTtcclxuICAgIH1cclxufVxyXG4iXX0=