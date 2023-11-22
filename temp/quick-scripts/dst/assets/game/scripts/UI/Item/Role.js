
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
    Role.prototype.init = function (data) {
        this.duilieIndex = data;
        this.node.zIndex = data;
        this.node.setSiblingIndex(data);
        this.node.active = true;
    };
    Role.prototype.showMaozi = function () {
        var pipiDuilieIndex = EditorManager_1.EditorManager.editorData.jueseArr.indexOf(2);
        console.log("皮皮在第", pipiDuilieIndex);
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
    // public setDuilieIndex(index: number) {
    //     this.duilieIndex = index;
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVELHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXNGQztRQW5GVyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFvRXZDLENBQUM7SUFsRVUsbUJBQUksR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNJLElBQUksZUFBZSxHQUFHLDZCQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsZUFBZSxDQUFDLENBQUE7UUFDbkMsSUFBSSw2QkFBYSxDQUFDLFVBQVUs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LHlDQUF5QztJQUN6QyxnQ0FBZ0M7SUFDaEMsSUFBSTtJQUVHLDJCQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDdUI7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDc0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDZ0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt1Q0FDSztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNrQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNtQjtJQWZwQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBc0Z4QjtJQUFELFdBQUM7Q0F0RkQsQUFzRkMsQ0F0RmlDLEVBQUUsQ0FBQyxTQUFTLEdBc0Y3QztrQkF0Rm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZU1hb3ppIGZyb20gXCIuL0dhbWVNYW96aVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtYW96aV9ub2RlX2Zyb250OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtYW96aV9ub2RlX3NpZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBtYW96aV9pbWc6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBpbmRleDogTnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB4dXhpYW5fbWFvemk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGRpYWxvZ19sZWZ0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBkaWFsb2dfcmlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZHVpbGllSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG1hb3ppX25vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KGRhdGEpIHtcclxuICAgICAgICB0aGlzLmR1aWxpZUluZGV4ID0gZGF0YTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dNYW96aSgpIHtcclxuICAgICAgICBsZXQgcGlwaUR1aWxpZUluZGV4ID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmp1ZXNlQXJyLmluZGV4T2YoMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnmq7nmq7lnKjnrKxcIixwaXBpRHVpbGllSW5kZXgpXHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BhaWR1aSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFvemlfbm9kZV9zaWRlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGUgPSB0aGlzLm1hb3ppX25vZGVfc2lkZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGUgPSB0aGlzLm1hb3ppX25vZGVfZnJvbnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfZnJvbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX3NpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX2Zyb250LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfc2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy54dXhpYW5fbWFvemkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHVpbGllSW5kZXggPiBwaXBpRHVpbGllSW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5tYW96aV9ub2RlX2Zyb250LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1hb3ppX25vZGVfc2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy54dXhpYW5fbWFvemkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggIT0gMikge1xyXG4gICAgICAgICAgICAvL+WIm+W7uuS4gOS4quaWsOeahOWbvueJh1xyXG4gICAgICAgICAgICBsZXQgbWFvemkgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgbWFvemlfc3ByaXRlID0gbWFvemkuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIG1hb3ppX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMubWFvemlfaW1nW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5tYW96aUFyclt0aGlzLmR1aWxpZUluZGV4XV07XHJcbiAgICAgICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubWFvemlBcnJbdGhpcy5kdWlsaWVJbmRleF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWFvemkucGFyZW50ID0gdGhpcy5tYW96aV9ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1hb3ppXCIpLmdldENvbXBvbmVudChHYW1lTWFvemkpLnNldEVuYWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0RpYWxvZyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMuZGlhbG9nX2xlZnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZHVpbGllSW5kZXggPj0gMikge1xyXG4gICAgICAgICAgICBkaWFsb2cgPSB0aGlzLmRpYWxvZ19yaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5qdWVzZUZheWFuQXJyW3RoaXMuZHVpbGllSW5kZXhdICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZGlhbG9nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRpYWxvZy5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuanVlc2VGYXlhbkFyclt0aGlzLmR1aWxpZUluZGV4XTtcclxuICAgICAgICAgICAgZGlhbG9nLmdldENoaWxkQnlOYW1lKFwiaW5kZXhcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kZXgoKTogTnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc2V0RHVpbGllSW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgLy8gICAgIHRoaXMuZHVpbGllSW5kZXggPSBpbmRleDtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWFvemlOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hb3ppX25vZGU7XHJcbiAgICB9XHJcbn1cclxuIl19