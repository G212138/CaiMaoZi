
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/ConstValue":1,"./assets/frame/scripts/Data/FrameConstValue":3,"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Utils/BoundingBoxHelp":8,"./assets/frame/scripts/Manager/ListenerManager":13,"./assets/frame/scripts/SDK/GameMsg":14,"./assets/frame/scripts/UI/BindNode":17,"./assets/frame/scripts/UI/AdaptiveScreen":18,"./assets/frame/scripts/UI/Item/Tip":19,"./assets/frame/scripts/Utils/MathUtils":35,"./assets/frame/scripts/Data/FrameMsgType":37,"./assets/frame/scripts/Utils/HitTest":38,"./assets/frame/scripts/Utils/Tools":40,"./assets/frame/scripts/Data/FrameSyncData":41,"./assets/game/scripts/Data/EventType":42,"./assets/game/scripts/Manager/GameManager":44,"./assets/game/scripts/Manager/EditorManager":47,"./assets/game/scripts/Data/CustomSyncData":48,"./assets/game/scripts/UI/Item/SoundConfig":53,"./assets/frame/scripts/UI/Item/MaskGlobal":2,"./assets/frame/scripts/Manager/ReportManager":5,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/Manager/SyncDataManager":10,"./assets/frame/scripts/Manager/SoundManager":11,"./assets/frame/scripts/UI/BaseUI":12,"./assets/frame/scripts/UI/BaseFrameUI":15,"./assets/frame/scripts/Manager/UIManager":16,"./assets/frame/scripts/UI/GameMain":20,"./assets/frame/scripts/UI/Panel/SubmissionPanel":9,"./assets/frame/scripts/Utils/BoundingBoxDemo":27,"./assets/frame/scripts/Utils/AudioPlayExtension":36,"./assets/frame/scripts/Utils/UIHelp":39,"./assets/frame/scripts/UI/Item/TitleNode":21,"./assets/frame/scripts/UI/Item/replayBtn":22,"./assets/frame/scripts/UI/Item/MaskRecover":23,"./assets/frame/scripts/UI/Panel/StarCount":24,"./assets/frame/scripts/UI/Panel/OverTips":25,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":26,"./assets/frame/scripts/UI/Panel/ErrorPanel":28,"./assets/frame/scripts/UI/Panel/TipUI":30,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":29,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":31,"./assets/frame/scripts/UI/Panel/BaseGamePanel":32,"./assets/frame/scripts/UI/Panel/AffirmTips":33,"./assets/frame/scripts/UI/Panel/LoadingUI":34,"./assets/game/scripts/UI/Components/DragSync":43,"./assets/game/scripts/UI/Item/EditHeadArea":45,"./assets/game/scripts/UI/panel/GamePanel":46,"./assets/game/scripts/UI/Item/GameMaoziDrag":49,"./assets/game/scripts/UI/Item/DragMaozi":50,"./assets/game/scripts/UI/Item/EditMaoZiArea":51,"./assets/game/scripts/UI/Item/GameMaozi":52,"./assets/game/scripts/UI/Item/Role":54,"./assets/game/scripts/UI/Item/DragHead":55,"./assets/game/scripts/UI/Item/GameUI":56,"./assets/game/scripts/UI/panel/TeacherPanel":57,"./assets/game/scripts/UI/Components/ButtonSync":58},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../Data/FrameMsgType":37,"../../Manager/UIManager":16,"../../Manager/ListenerManager":13,"../../Utils/UIHelp":39,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../game/scripts/Data/ConstValue":1,"../../../game/scripts/Manager/EditorManager":47,"../SDK/GameMsg":14},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../../../game/scripts/Data/ConstValue":1,"../Manager/UIManager":16,"../SDK/GameMsg":14,"../Utils/UIHelp":39},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Data/FrameMsgType":37,"../Http/NetWork":6,"../Manager/ListenerManager":13,"../Manager/SyncDataManager":10,"../Utils/UIHelp":39,"./GameMsg":14},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../BaseFrameUI":15,"../../Utils/UIHelp":39,"../../Http/NetWork":6,"../../../../game/scripts/Data/ConstValue":1,"../../../../game/scripts/Manager/EditorManager":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":41,"../../../game/scripts/Data/CustomSyncData":48,"../../../frame/scripts/Manager/ReportManager":5},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Data/FrameConstValue":3,"../Http/NetWork":6,"../Data/FrameMsgType":37,"../SDK/GameMsg":14,"./ListenerManager":13,"./UIManager":16},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../Data/FrameConstValue":3,"../Manager/ListenerManager":13,"./BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../Data/FrameConstValue":3,"./BaseUI":12},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../UI/BaseUI":12},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":47,"../Http/NetWork":6,"../Data/FrameMsgType":37,"../Manager/ListenerManager":13,"../Manager/SoundManager":11,"../Manager/ReportManager":5,"../Manager/UIManager":16,"../Manager/SyncDataManager":10,"../SDK/GameMsg":14,"../Utils/UIHelp":39,"../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":13},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../Data/FrameMsgType":37,"../../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Manager/ListenerManager":13,"../../Data/FrameMsgType":37,"../BindNode":17,"../../Manager/UIManager":16},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"./../../Manager/SoundManager":11,"../../Utils/Tools":40,"../../../../game/scripts/Manager/EditorManager":47,"../BaseFrameUI":15,"../../Manager/ReportManager":5,"../../Utils/UIHelp":39,"../../../../game/scripts/Data/ConstValue":1},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../Utils/Tools":40,"./../../Manager/SoundManager":11,"../BaseFrameUI":15,"../../SDK/T2M":7,"../../Utils/UIHelp":39,"../../Manager/UIManager":16,"../../../../game/scripts/Data/ConstValue":1,"../../Data/FrameMsgType":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":13,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"./BoundingBoxHelp":8},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../../Utils/UIHelp":39,"./../BaseFrameUI":15,"./../../SDK/GameMsg":14,"./../../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"./../../Manager/ListenerManager":13,"../../Manager/ReportManager":5,"../../Data/FrameMsgType":37,"../BaseFrameUI":15,"../../SDK/T2M":7,"../../Manager/SoundManager":11,"../../Utils/UIHelp":39,"../../../../game/scripts/Manager/EditorManager":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../Item/Tip":19,"../BaseFrameUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../Http/NetWork":6,"../../../../game/scripts/Manager/EditorManager":47,"../BaseUI":12,"../../Utils/UIHelp":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../Http/NetWork":6,"../../../../game/scripts/Manager/EditorManager":47,"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":13,"../../Manager/ReportManager":5,"../../Manager/SoundManager":11,"../../Manager/SyncDataManager":10,"../../Manager/UIManager":16,"../../SDK/GameMsg":14,"../../Utils/UIHelp":39,"../../SDK/T2M":7,"../BaseUI":12},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../SDK/T2M":7,"../../Utils/UIHelp":39,"../../Data/FrameMsgType":37,"../BaseFrameUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../../../game/scripts/UI/panel/TeacherPanel":57,"../../Manager/SoundManager":11,"../../Http/NetWork":6,"../../Manager/UIManager":16,"../../SDK/GameMsg":14,"../../../../game/scripts/Data/ConstValue":1,"../BaseFrameUI":15,"../../../../game/scripts/UI/panel/GamePanel":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"./../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":46,"../../../game/scripts/UI/panel/TeacherPanel":57,"../Manager/UIManager":16,"../Data/FrameMsgType":37,"../UI/Panel/AffirmTips":33,"../UI/Panel/ErrorPanel":28,"../UI/Panel/OverTips":25,"../UI/Panel/StarCount":24,"../Manager/ListenerManager":13,"../UI/Panel/UploadAndReturnPanel":29,"../UI/Panel/TipUI":30,"../UI/Panel/SubmissionPanel":9},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":13,"../../../../frame/scripts/Utils/HitTest":38,"./DragHead":55,"../../Data/EventType":42},"path":"preview-scripts/assets/game/scripts/UI/Item/EditHeadArea.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":13,"../../Data/EventType":42,"../../../../frame/scripts/Manager/SyncDataManager":10,"../../../../frame/scripts/UI/Panel/BaseGamePanel":32},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":13,"./GameMaozi":52,"../../Data/EventType":42},"path":"preview-scripts/assets/game/scripts/UI/Item/GameMaoziDrag.js"},{"deps":{"./EditMaoZiArea":51,"../../Data/EventType":42,"../../../../frame/scripts/Manager/ListenerManager":13},"path":"preview-scripts/assets/game/scripts/UI/Item/DragMaozi.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":13,"./DragMaozi":50,"../../../../frame/scripts/Utils/HitTest":38,"../../Data/EventType":42},"path":"preview-scripts/assets/game/scripts/UI/Item/EditMaoZiArea.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":11,"../../Data/EventType":42,"../../../../frame/scripts/Manager/ListenerManager":13,"./GameMaoziDrag":49,"../../../../frame/scripts/Utils/HitTest":38,"./SoundConfig":53,"./Role":54},"path":"preview-scripts/assets/game/scripts/UI/Item/GameMaozi.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../Manager/EditorManager":47,"./GameMaozi":52},"path":"preview-scripts/assets/game/scripts/UI/Item/Role.js"},{"deps":{"../../Data/EventType":42,"../../../../frame/scripts/Manager/ListenerManager":13,"./EditHeadArea":45},"path":"preview-scripts/assets/game/scripts/UI/Item/DragHead.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":10,"../../../../frame/scripts/Manager/ListenerManager":13,"../../../../frame/scripts/Manager/SoundManager":11,"../../../../frame/scripts/Utils/UIHelp":39,"./Role":54,"../../Data/EventType":42,"../../Manager/EditorManager":47,"../../../../frame/scripts/Utils/Tools":40,"./SoundConfig":53,"./GameMaoziDrag":49},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../../../frame/scripts/Data/FrameMsgType":37,"../../../../frame/scripts/Manager/UIManager":16,"../../Manager/EditorManager":47,"../../../../frame/scripts/Manager/ReportManager":5,"../../../../frame/scripts/Manager/ListenerManager":13,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":31,"../../Data/EventType":42,"../Item/DragMaozi":50,"../../../../frame/scripts/Utils/UIHelp":39,"../Item/DragHead":55,"./GamePanel":46},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"}];
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
    