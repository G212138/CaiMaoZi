
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/ConstValue":47,"./assets/game/scripts/Manager/GameManager":43,"./assets/game/scripts/Manager/EditorManager":51,"./assets/game/scripts/SkeletonExt":4,"./assets/game/scripts/Data/CustomSyncData":49,"./assets/game/scripts/UI/Components/ButtonSync":44,"./assets/game/scripts/UI/Item/EditHeadArea":41,"./assets/game/scripts/UI/Item/DragHead":55,"./assets/game/scripts/UI/Item/EditMaoZiArea":50,"./assets/game/scripts/UI/Item/GameMaozi":53,"./assets/game/scripts/UI/Item/GameMaoziDrag":52,"./assets/game/scripts/UI/Item/GameUI":48,"./assets/game/scripts/UI/Item/SoundConfig":54,"./assets/game/scripts/UI/Item/Role":56,"./assets/game/scripts/UI/Item/DragMaozi":46,"./assets/game/scripts/UI/panel/TeacherPanel":45,"./assets/game/scripts/UI/panel/GamePanel":58,"./assets/game/scripts/UI/Components/DragSync":57,"./assets/frame/scripts/Data/FrameSyncData":40,"./assets/frame/scripts/Data/FrameMsgType":38,"./assets/frame/scripts/Manager/SyncDataManager":11,"./assets/frame/scripts/Manager/ListenerManager":15,"./assets/frame/scripts/Manager/SoundManager":12,"./assets/frame/scripts/Manager/UIManager":10,"./assets/frame/scripts/Manager/ReportManager":5,"./assets/frame/scripts/SDK/T2M":6,"./assets/frame/scripts/SDK/GameMsg":16,"./assets/frame/scripts/UI/BaseFrameUI":20,"./assets/frame/scripts/UI/BindNode":25,"./assets/frame/scripts/UI/BaseUI":13,"./assets/frame/scripts/UI/GameMain":19,"./assets/frame/scripts/UI/AdaptiveScreen":17,"./assets/frame/scripts/UI/Item/MaskRecover":14,"./assets/frame/scripts/UI/Item/Tip":21,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":18,"./assets/frame/scripts/UI/Item/TitleNode":22,"./assets/frame/scripts/UI/Item/replayBtn":24,"./assets/frame/scripts/UI/Item/MaskGlobal":1,"./assets/frame/scripts/UI/Panel/BaseGamePanel":31,"./assets/frame/scripts/UI/Panel/ErrorPanel":27,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":8,"./assets/frame/scripts/UI/Panel/LoadingUI":23,"./assets/frame/scripts/UI/Panel/OverTips":29,"./assets/frame/scripts/UI/Panel/StarCount":28,"./assets/frame/scripts/UI/Panel/SubmissionPanel":26,"./assets/frame/scripts/UI/Panel/TipUI":32,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":33,"./assets/frame/scripts/UI/Panel/AffirmTips":36,"./assets/frame/scripts/Utils/BoundingBoxDemo":9,"./assets/frame/scripts/Utils/BoundingBoxHelp":35,"./assets/frame/scripts/Utils/MathUtils":37,"./assets/frame/scripts/Utils/HitTest":42,"./assets/frame/scripts/Utils/Tools":34,"./assets/frame/scripts/Utils/UIHelp":39,"./assets/frame/scripts/Utils/AudioPlayExtension":30,"./assets/frame/scripts/Http/NetWork":7,"./assets/frame/scripts/Data/FrameConstValue":3,"./assets/game/scripts/Data/EventType":2},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15,"../../Manager/UIManager":10,"../../Utils/UIHelp":39,"../BindNode":25},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":51,"../../../game/scripts/Data/ConstValue":47,"../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../Data/FrameMsgType":38,"../Manager/ListenerManager":15,"../Http/NetWork":7,"../Manager/SyncDataManager":11,"../Utils/UIHelp":39,"./GameMsg":16},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../Manager/UIManager":10,"../SDK/GameMsg":16,"../Utils/UIHelp":39,"../../../game/scripts/Data/ConstValue":47},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":47,"../../../../game/scripts/Manager/EditorManager":51,"../BaseUI":13,"../../Http/NetWork":7,"../../Utils/UIHelp":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"./BoundingBoxHelp":35},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../UI/BaseUI":13},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../../../frame/scripts/Manager/ReportManager":5,"../../../game/scripts/Data/CustomSyncData":49,"../../../frame/scripts/Data/FrameSyncData":40},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Data/FrameConstValue":3,"../SDK/GameMsg":16,"./ListenerManager":15,"../Http/NetWork":7,"../Data/FrameMsgType":38,"./UIManager":10},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../Manager/ListenerManager":15,"../Data/FrameConstValue":3,"./BindNode":25},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15,"../BindNode":25,"../../Manager/UIManager":10},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../Manager/ListenerManager":15,"../../Data/FrameMsgType":38,"../BindNode":25},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":51,"../Data/FrameMsgType":38,"../Http/NetWork":7,"../Manager/ReportManager":5,"../Manager/ListenerManager":15,"../SDK/T2M":6,"../Manager/UIManager":10,"../Manager/SoundManager":12,"../Manager/SyncDataManager":11,"../SDK/GameMsg":16,"../Utils/UIHelp":39},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"./BaseUI":13,"../Data/FrameConstValue":3},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Data/FrameMsgType":38,"../../Manager/ListenerManager":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../../../game/scripts/UI/panel/GamePanel":58,"../../../../game/scripts/Data/ConstValue":47,"../../../../game/scripts/UI/panel/TeacherPanel":45,"../../Http/NetWork":7,"../../Manager/SoundManager":12,"../BaseFrameUI":20,"../../Manager/UIManager":10,"../../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Data/FrameMsgType":38,"../../SDK/T2M":6},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Http/NetWork":7,"../../Utils/UIHelp":39,"../../../../game/scripts/Data/ConstValue":47,"../BaseFrameUI":20,"../../../../game/scripts/Manager/EditorManager":51},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"./../../SDK/GameMsg":16,"../../Utils/UIHelp":39,"./../../Manager/SoundManager":12,"./../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../Utils/Tools":34,"./../../Manager/SoundManager":12,"../../Utils/UIHelp":39,"../../../../game/scripts/Data/ConstValue":47,"../BaseFrameUI":20,"../../../../game/scripts/Manager/EditorManager":51,"../../Manager/ReportManager":5},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"./../../Manager/SoundManager":12,"../../Utils/Tools":34,"../../SDK/T2M":6,"../../Utils/UIHelp":39,"../../Manager/UIManager":10,"../BaseFrameUI":20,"../../Data/FrameMsgType":38,"../../../../game/scripts/Data/ConstValue":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"./../Manager/SoundManager":12},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":47,"../../../../game/scripts/Manager/EditorManager":51,"../../Http/NetWork":7,"../../Manager/SoundManager":12,"../../Data/FrameMsgType":38,"../../Manager/ReportManager":5,"../../Manager/ListenerManager":15,"../../Manager/SyncDataManager":11,"../../SDK/T2M":6,"../../SDK/GameMsg":16,"../../Manager/UIManager":10,"../../Utils/UIHelp":39,"../BaseUI":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../Item/Tip":21,"../BaseFrameUI":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../Data/FrameMsgType":38,"../BaseFrameUI":20,"./../../Manager/ListenerManager":15,"../../Utils/UIHelp":39,"../../Manager/ReportManager":5,"../../SDK/T2M":6,"../../../../game/scripts/Manager/EditorManager":51,"../../Manager/SoundManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../Data/FrameMsgType":38,"../BaseFrameUI":20,"../../Utils/UIHelp":39,"../../SDK/T2M":6},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":58,"../UI/Panel/AffirmTips":36,"../Manager/UIManager":10,"../../../game/scripts/UI/panel/TeacherPanel":45,"../Data/FrameMsgType":38,"../Manager/ListenerManager":15,"../UI/Panel/OverTips":29,"../UI/Panel/ErrorPanel":27,"../UI/Panel/UploadAndReturnPanel":33,"../UI/Panel/TipUI":32,"../UI/Panel/StarCount":28,"../UI/Panel/SubmissionPanel":26},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/Utils/HitTest":42,"../../Data/EventType":2,"./DragHead":55},"path":"preview-scripts/assets/game/scripts/UI/Item/EditHeadArea.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":6},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"./GamePanel":58,"../../Data/EventType":2,"../Item/DragHead":55,"../Item/DragMaozi":46,"../../Manager/EditorManager":51,"../../../../frame/scripts/Manager/ReportManager":5,"../../../../frame/scripts/Data/FrameMsgType":38,"../../../../frame/scripts/Utils/UIHelp":39,"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":8,"../../../../frame/scripts/Manager/UIManager":10},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"./EditMaoZiArea":50,"../../Data/EventType":2},"path":"preview-scripts/assets/game/scripts/UI/Item/DragMaozi.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"./GameMaoziDrag":52,"./SoundConfig":54,"./Role":56,"../../Data/EventType":2,"../../Manager/EditorManager":51,"../../../../frame/scripts/Manager/SoundManager":12,"../../../../frame/scripts/Utils/UIHelp":39,"../../../../frame/scripts/Utils/Tools":34,"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/Manager/SyncDataManager":11},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"./DragMaozi":46,"../../../../frame/scripts/Utils/HitTest":42,"../../Data/EventType":2},"path":"preview-scripts/assets/game/scripts/UI/Item/EditMaoZiArea.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../Data/EventType":2,"../../../../frame/scripts/Manager/ListenerManager":15,"./GameMaozi":53},"path":"preview-scripts/assets/game/scripts/UI/Item/GameMaoziDrag.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"./Role":56,"../../../../frame/scripts/Manager/SoundManager":12,"../../../../frame/scripts/Utils/HitTest":42,"../../Data/EventType":2,"./SoundConfig":54,"./GameMaoziDrag":52},"path":"preview-scripts/assets/game/scripts/UI/Item/GameMaozi.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"./EditHeadArea":41,"../../../../frame/scripts/Manager/ListenerManager":15,"../../Data/EventType":2},"path":"preview-scripts/assets/game/scripts/UI/Item/DragHead.js"},{"deps":{"./GameMaozi":53,"../../Manager/EditorManager":51},"path":"preview-scripts/assets/game/scripts/UI/Item/Role.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":6},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":15,"../../../../frame/scripts/Manager/SyncDataManager":11,"../../../../frame/scripts/UI/Panel/BaseGamePanel":31,"../../Data/EventType":2},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    