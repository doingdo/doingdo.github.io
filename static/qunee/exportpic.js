import "./qunee-min";
var template = '<div class="graph-export-panel modal fade">\
  <div class="modal-dialog">\
  <div class="modal-content">\
  <div class="modal-body">\
  <h3 style="text-align: center;">' + '导出图片预览' + '</h3>\
  <div>\
  <label>' + '画布大小' + '</label>\
  <span class ="graph-export-panel__canvas_size"></span>\
  </div>\
  <div style="text-align: center;" title="' + 'Double click  to select the whole canvas range' + '">\
  <div class ="graph-export-panel__export_canvas" style="position: relative; display: inline-block;">\
  </div>\
  </div>\
  <div>\
  <label>' + '导出范围' + '</label>\
  <span class ="graph-export-panel__export_bounds"></span>\
  </div>\
  <div>\
  <label>' + '缩放比例' + ': <input class ="graph-export-panel__export_scale" type="range" value="1" step="0.2" min="0.2" max="3"><span class ="graph-export-panel__export_scale_label">1</span></label>\
  </div>\
  <div>\
  <label>' + '输出大小' + ': </label><span class ="graph-export-panel__export_size"></span>\
  </div>\
  <div style="text-align: right">\
  <button type="submit" class="btn btn-primary graph-export-panel__export_submit">' + '图片导出' + '</button>\
  </div>\
  </div>\
  </div>\
  </div>\
  </div>';

///ExportPanel
function ResizeBox(parent, onBoundsChange) {
    this.onBoundsChange = onBoundsChange;
    this.parent = parent;
    this.handleSize = Q.isTouchSupport ? 20 : 8;

    this.boundsDiv = this._createDiv(this.parent);
    this.boundsDiv.type = "border";
    this.boundsDiv.style.position = "absolute";
    this.boundsDiv.style.border = "dashed 1px #888";
    var handles = "lt,t,rt,l,r,lb,b,rb";
    handles = handles.split(",");
    for (var i = 0, l = handles.length; i < l; i++) {
        var name = handles[i];
        var handle = this._createDiv(this.parent);
        handle.type = "handle";
        handle.name = name;
        handle.style.position = "absolute";
        handle.style.backgroundColor = "#FFF";
        handle.style.border = "solid 1px #555";
        handle.style.width = handle.style.height = this.handleSize + "px";
        var cursor;
        if (name == 'lt' || name == 'rb') {
            cursor = "nwse-resize";
        } else if (name == 'rt' || name == 'lb') {
            cursor = "nesw-resize";
        } else if (name == 't' || name == 'b') {
            cursor = "ns-resize";
        } else {
            cursor = "ew-resize";
        }
        handle.style.cursor = cursor;
        this[handles[i]] = handle;
    }
    this.interaction = new Q.DragSupport(this.parent, this);
}

ResizeBox.prototype = {
    destroy: function () {
        this.interaction.destroy();
    },
    update: function (width, height) {
        this.wholeBounds = new Q.Rect(0, 0, width, height);
        this._setBounds(this.wholeBounds.clone());
    },
    ondblclick: function (evt) {
        if (this._bounds.equals(this.wholeBounds)) {
            if (!this.oldBounds) {
                this.oldBounds = this.wholeBounds.clone().grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
            }
            this._setBounds(this.oldBounds, true);
            return;
        }
        this._setBounds(this.wholeBounds.clone(), true);
    },
    startdrag: function (evt) {
        if (evt.target.type) {
            this.dragItem = evt.target;
        }
    },
    ondrag: function (evt) {
        if (!this.dragItem) {
            return;
        }
        Q.stopEvent(evt);
        var dx = evt.dx;
        var dy = evt.dy;
        if (this.dragItem.type == "border") {
            this._bounds.offset(dx, dy);
            this._setBounds(this._bounds, true);
        } else if (this.dragItem.type == "handle") {
            var name = this.dragItem.name;
            if (name[0] == 'l') {
                this._bounds.x += dx;
                this._bounds.width -= dx;
            } else if (name[0] == 'r') {
                this._bounds.width += dx;
            }
            if (name[name.length - 1] == 't') {
                this._bounds.y += dy;
                this._bounds.height -= dy;
            } else if (name[name.length - 1] == 'b') {
                this._bounds.height += dy;
            }
            this._setBounds(this._bounds, true);
        }

    },
    enddrag: function (evt) {
        if (!this.dragItem) {
            return;
        }
        this.dragItem = false;
        if (this._bounds.width < 0) {
            this._bounds.x += this._bounds.width;
            this._bounds.width = -this._bounds.width;
        } else if (this._bounds.width == 0) {
            this._bounds.width = 1;
        }
        if (this._bounds.height < 0) {
            this._bounds.y += this._bounds.height;
            this._bounds.height = -this._bounds.height;
        } else if (this._bounds.height == 0) {
            this._bounds.height = 1;
        }
        if (this._bounds.width > this.wholeBounds.width) {
            this._bounds.width = this.wholeBounds.width;
        }
        if (this._bounds.height > this.wholeBounds.height) {
            this._bounds.height = this.wholeBounds.height;
        }
        if (this._bounds.x < 0) {
            this._bounds.x = 0;
        }
        if (this._bounds.y < 0) {
            this._bounds.y = 0;
        }
        if (this._bounds.right > this.wholeBounds.width) {
            this._bounds.x -= this._bounds.right - this.wholeBounds.width;
        }
        if (this._bounds.bottom > this.wholeBounds.height) {
            this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
        }

        this._setBounds(this._bounds, true);
    },
    _createDiv: function (parent) {
        var div = document.createElement("div");
        parent.appendChild(div);
        return div;
    },
    _setHandleLocation: function (handle, x, y) {
        handle.style.left = (x - this.handleSize / 2) + "px";
        handle.style.top = (y - this.handleSize / 2) + "px";
    },
    _setBounds: function (bounds) {
        if (!bounds.equals(this.wholeBounds)) {
            this.oldBounds = bounds;
        }
        this._bounds = bounds;
        bounds = bounds.clone();
        bounds.width += 1;
        bounds.height += 1;
        this.boundsDiv.style.left = bounds.x + "px";
        this.boundsDiv.style.top = bounds.y + "px";
        this.boundsDiv.style.width = bounds.width + "px";
        this.boundsDiv.style.height = bounds.height + "px";

        this._setHandleLocation(this.lt, bounds.x, bounds.y);
        this._setHandleLocation(this.t, bounds.cx, bounds.y);
        this._setHandleLocation(this.rt, bounds.right, bounds.y);
        this._setHandleLocation(this.l, bounds.x, bounds.cy);
        this._setHandleLocation(this.r, bounds.right, bounds.cy);
        this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
        this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
        this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
        if (this.onBoundsChange) {
            this.onBoundsChange(this._bounds);
        }
    }
}
Object.defineProperties(ResizeBox.prototype, {
    bounds: {
        get: function () {
            return this._bounds;
        },
        set: function (v) {
            this._setBounds(v);
        }
    }
});

function ExportPanel() {
    var export_panel = $('<div/>').html(template).contents();
    this.html = export_panel = export_panel[0];
    document.body.appendChild(this.html);
    export_panel.addEventListener("mousedown", function (evt) {
        if (evt.target == export_panel) {
            this.destroy();
        }
    }.bind(this), false);
    var export_scale = this._getChild(".graph-export-panel__export_scale");
    var export_scale_label = this._getChild(".graph-export-panel__export_scale_label");
    export_scale.onchange = function (evt) {
        export_scale_label.textContent = this.scale = export_scale.value;
        this.updateOutputSize();
    }.bind(this);
    this.export_scale = export_scale;
    var saveImage = function (saveAs) {
        //var blob = new Blob([json], {type: "text/plain;charset=utf-8"});
        //saveAs(blob, "data.json");
        var imageInfo = this.exportImageInfo();
        if (!imageInfo) {
            return;
        }
        var canvas = imageInfo.canvas;
        var name = this.graph.name || 'graph';
        canvas.toBlob(function (blob) {
            saveAs(blob, name + ".png");
        }, "image/png");
    }
    var exportImage = function (print) {
        var imageInfo = this.exportImageInfo();
        if (!imageInfo) {
            return;
        }
        var clipBounds = this.clipBounds;

        var win = window.open();
        var doc = win.document;
        doc.title = this.graph.name || "";
        doc.body.style.textAlign = "center";
        doc.body.style.margin = "0px";
        var img = doc.createElement("img");
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        if (print === true) {
            img.onload = function () {
                win.print();
                win.close();
            }
            var style = doc.createElement("style");
            style.setAttribute("type", "text/css");
            style.setAttribute("media", "print");
            var printCSS = "img {max-width: 100%; max-height: 100%;}";
            if (clipBounds.width / clipBounds.height > 1.2) {
                printCSS += "\n @page { size: landscape; }";
            }
            style.appendChild(doc.createTextNode(printCSS));
            doc.head.appendChild(style);
        }
        img.src = imageInfo.data;
        doc.body.appendChild(img);
    }
    var export_submit = this._getChild(".graph-export-panel__export_submit");
    if (window.saveAs && HTMLCanvasElement.prototype.toBlob) {
        export_submit.onclick = saveImage.bind(this, window.saveAs);
    } else {
        export_submit.onclick = exportImage.bind(this);
    }
}

ExportPanel.prototype = {
    canvas: null,
    html: null,
    exportImageInfo: function (graph) {
        var graph = this.graph;
        if (!graph) {
            return;
        }
        var scale = this.export_scale.value;
        var s = this.imageInfo.scale;
        var clipBounds = new Q.Rect(this.clipBounds.x / s, this.clipBounds.y / s, this.clipBounds.width / s, this.clipBounds.height / s);
        clipBounds.offset(this.bounds.x, this.bounds.y);
        var imageInfo = graph.exportImage(scale, clipBounds);
        if (!imageInfo || !imageInfo.data) {
            return;
        }
        return imageInfo;
    },
    _getChild: function (selector) {
        return $(this.html).find(selector)[0];
    },
    initCanvas: function () {
        var export_canvas = this._getChild('.graph-export-panel__export_canvas');
        export_canvas.innerHTML = "";

        var canvas = Q.createCanvas(true);
        export_canvas.appendChild(canvas);
        this.canvas = canvas;

        var export_bounds = this._getChild(".graph-export-panel__export_bounds");
        var export_size = this._getChild(".graph-export-panel__export_size");
        var clipBounds;
        var drawPreview = function () {
            var canvas = this.canvas;
            var g = canvas.g;
            var ratio = canvas.ratio || 1;
            g.save();
            //g.scale(1/g.ratio, 1/g.ratio);
            g.clearRect(0, 0, canvas.width, canvas.height);
            g.drawImage(this.imageInfo.canvas, 0, 0);
            g.beginPath();
            g.moveTo(0, 0);
            g.lineTo(canvas.width, 0);
            g.lineTo(canvas.width, canvas.height);
            g.lineTo(0, canvas.height);
            g.lineTo(0, 0);

            var x = clipBounds.x * ratio, y = clipBounds.y * ratio, width = clipBounds.width * ratio,
                height = clipBounds.height * ratio;
            g.moveTo(x, y);
            g.lineTo(x, y + height);
            g.lineTo(x + width, y + height);
            g.lineTo(x + width, y);
            g.closePath();
            g.fillStyle = "rgba(0, 0, 0, 0.3)";
            g.fill();
            g.restore();
        }
        var onBoundsChange = function (bounds) {
            clipBounds = bounds;
            this.clipBounds = clipBounds;
            drawPreview.call(this);
            var w = clipBounds.width / this.imageInfo.scale | 0;
            var h = clipBounds.height / this.imageInfo.scale | 0;
            export_bounds.textContent = (clipBounds.x / this.imageInfo.scale | 0) + ", "
                + (clipBounds.y / this.imageInfo.scale | 0) + ", " + w + ", " + h;
            this.updateOutputSize();
        }
        this.updateOutputSize = function () {
            var export_scale = this._getChild(".graph-export-panel__export_scale");
            var scale = export_scale.value;
            var w = clipBounds.width / this.imageInfo.scale * scale | 0;
            var h = clipBounds.height / this.imageInfo.scale * scale | 0;
            var info = w + " X " + h;
            if (w * h > 3000 * 4000) {
                info += "<span style='color: #F66;'>" + "</span>";
            }
            export_size.innerHTML = info;
        }
        var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange.bind(this));
        this.update = function () {
            var ratio = this.canvas.ratio || 1;
            var width = this.imageInfo.width / ratio;
            var height = this.imageInfo.height / ratio;
            this.canvas.setSize(width, height);
            resizeHandler.update(width, height);
        }
    },
    destroy: function () {
        this.graph = null;
        this.imageInfo = null
        this.clipBounds = null;
        this.bounds = null;
    },
    show: function (graph) {
        $(this.html).modal("show");

        this.graph = graph;
        var bounds = graph.bounds;
        this.bounds = bounds;

        var canvas_size = this._getChild(".graph-export-panel__canvas_size");
        canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

        var size = Math.min(500, screen.width / 1.3);
        var imageScale;
        if (bounds.width > bounds.height) {
            imageScale = Math.min(1, size / bounds.width);
        } else {
            imageScale = Math.min(1, size / bounds.height);
        }
        if (!this.canvas) {
            this.initCanvas();
        }
        this.imageInfo = graph.exportImage(imageScale * this.canvas.ratio);
        this.imageInfo.scale = imageScale;

        this.update();
    }
}
var exportPanel;

function showExportPanel(graph) {
    if (!exportPanel) {
        exportPanel = new ExportPanel();
    }
    exportPanel.show(graph);
}

Q.showExportPanel = showExportPanel;

export default Q;
!function (window, document) {
    var saveAs = saveAs
        // IE 10+ (native saveAs)
        || (typeof navigator !== "undefined" &&
            navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
        // Everyone else
        || (function (view) {
            "use strict";
            // IE <10 is explicitly unsupported
            if (typeof navigator !== "undefined" &&
                /MSIE [1-9]\./.test(navigator.userAgent)) {
                return;
            }
            var
                doc = view.document
                // only get URL when necessary in case Blob.js hasn't overridden it yet
                , get_URL = function () {
                    return view.URL || view.webkitURL || view;
                }
                , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
                , can_use_save_link = "download" in save_link
                , click = function (node) {
                    var event = doc.createEvent("MouseEvents");
                    event.initMouseEvent(
                        "click", true, false, view, 0, 0, 0, 0, 0
                        , false, false, false, false, 0, null
                    );
                    node.dispatchEvent(event);
                }
                , webkit_req_fs = view.webkitRequestFileSystem
                , req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
                , throw_outside = function (ex) {
                    (view.setImmediate || view.setTimeout)(function () {
                        throw ex;
                    }, 0);
                }
                , force_saveable_type = "application/octet-stream"
                , fs_min_size = 0
                // See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
                // https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
                // for the reasoning behind the timeout and revocation flow
                , arbitrary_revoke_timeout = 500 // in ms
                , revoke = function (file) {
                    var revoker = function () {
                        if (typeof file === "string") { // file is an object URL
                            get_URL().revokeObjectURL(file);
                        } else { // file is a File
                            file.remove();
                        }
                    };
                    if (view.chrome) {
                        revoker();
                    } else {
                        setTimeout(revoker, arbitrary_revoke_timeout);
                    }
                }
                , dispatch = function (filesaver, event_types, event) {
                    event_types = [].concat(event_types);
                    var i = event_types.length;
                    while (i--) {
                        var listener = filesaver["on" + event_types[i]];
                        if (typeof listener === "function") {
                            try {
                                listener.call(filesaver, event || filesaver);
                            } catch (ex) {
                                throw_outside(ex);
                            }
                        }
                    }
                }
                , FileSaver = function (blob, name) {
                    // First try a.download, then web filesystem, then object URLs
                    var
                        filesaver = this
                        , type = blob.type
                        , blob_changed = false
                        , object_url
                        , target_view
                        , dispatch_all = function () {
                            dispatch(filesaver, "writestart progress write writeend".split(" "));
                        }
                        // on any filesys errors revert to saving with object URLs
                        , fs_error = function () {
                            // don't create more object URLs than needed
                            if (blob_changed || !object_url) {
                                object_url = get_URL().createObjectURL(blob);
                            }
                            if (target_view) {
                                target_view.location.href = object_url;
                            } else {
                                var new_tab = view.open(object_url, "_blank");
                                if (new_tab == undefined && typeof safari !== "undefined") {
                                    //Apple do not allow window.open, see http://bit.ly/1kZffRI
                                    view.location.href = object_url
                                }
                            }
                            filesaver.readyState = filesaver.DONE;
                            dispatch_all();
                            revoke(object_url);
                        }
                        , abortable = function (func) {
                            return function () {
                                if (filesaver.readyState !== filesaver.DONE) {
                                    return func.apply(this, arguments);
                                }
                            };
                        }
                        , create_if_not_found = { create: true, exclusive: false }
                        , slice
                        ;
                    filesaver.readyState = filesaver.INIT;
                    if (!name) {
                        name = "download";
                    }
                    if (can_use_save_link) {
                        object_url = get_URL().createObjectURL(blob);
                        save_link.href = object_url;
                        save_link.download = name;
                        click(save_link);
                        filesaver.readyState = filesaver.DONE;
                        dispatch_all();
                        revoke(object_url);
                        return;
                    }
                    // Object and web filesystem URLs have a problem saving in Google Chrome when
                    // viewed in a tab, so I force save with application/octet-stream
                    // http://code.google.com/p/chromium/issues/detail?id=91158
                    // Update: Google errantly closed 91158, I submitted it again:
                    // https://code.google.com/p/chromium/issues/detail?id=389642
                    if (view.chrome && type && type !== force_saveable_type) {
                        slice = blob.slice || blob.webkitSlice;
                        blob = slice.call(blob, 0, blob.size, force_saveable_type);
                        blob_changed = true;
                    }
                    // Since I can't be sure that the guessed media type will trigger a download
                    // in WebKit, I append .download to the filename.
                    // https://bugs.webkit.org/show_bug.cgi?id=65440
                    if (webkit_req_fs && name !== "download") {
                        name += ".download";
                    }
                    if (type === force_saveable_type || webkit_req_fs) {
                        target_view = view;
                    }
                    if (!req_fs) {
                        fs_error();
                        return;
                    }
                    fs_min_size += blob.size;
                    req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
                        fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
                            var save = function () {
                                dir.getFile(name, create_if_not_found, abortable(function (file) {
                                    file.createWriter(abortable(function (writer) {
                                        writer.onwriteend = function (event) {
                                            target_view.location.href = file.toURL();
                                            filesaver.readyState = filesaver.DONE;
                                            dispatch(filesaver, "writeend", event);
                                            revoke(file);
                                        };
                                        writer.onerror = function () {
                                            var error = writer.error;
                                            if (error.code !== error.ABORT_ERR) {
                                                fs_error();
                                            }
                                        };
                                        "writestart progress write abort".split(" ").forEach(function (event) {
                                            writer["on" + event] = filesaver["on" + event];
                                        });
                                        writer.write(blob);
                                        filesaver.abort = function () {
                                            writer.abort();
                                            filesaver.readyState = filesaver.DONE;
                                        };
                                        filesaver.readyState = filesaver.WRITING;
                                    }), fs_error);
                                }), fs_error);
                            };
                            dir.getFile(name, { create: false }, abortable(function (file) {
                                // delete file if it already exists
                                file.remove();
                                save();
                            }), abortable(function (ex) {
                                if (ex.code === ex.NOT_FOUND_ERR) {
                                    save();
                                } else {
                                    fs_error();
                                }
                            }));
                        }), fs_error);
                    }), fs_error);
                }
                , FS_proto = FileSaver.prototype
                , saveAs = function (blob, name) {
                    return new FileSaver(blob, name);
                }
                ;
            FS_proto.abort = function () {
                var filesaver = this;
                filesaver.readyState = filesaver.DONE;
                dispatch(filesaver, "abort");
            };
            FS_proto.readyState = FS_proto.INIT = 0;
            FS_proto.WRITING = 1;
            FS_proto.DONE = 2;

            FS_proto.error =
                FS_proto.onwritestart =
                FS_proto.onprogress =
                FS_proto.onwrite =
                FS_proto.onabort =
                FS_proto.onerror =
                FS_proto.onwriteend =
                null;

            return saveAs;
        }(
            typeof self !== "undefined" && self
            || typeof window !== "undefined" && window
            || this.content
        ));
    // `self` is undefined in Firefox for Android content script context
    // while `this` is nsIContentFrameMessageManager
    // with an attribute `content` that corresponds to the window

    // if (typeof module !== "undefined" && module !== null) {
    //     module.exports = saveAs;
    // } else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
    //     define([], function() {
    //         return saveAs;
    //     });
    // }
    window.saveAs = saveAs;
}(window, document);
!function (Q) {
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    Q.isFileSupported = window.requestFileSystem != null;

    if (Q.isFileSupported) {
        function readerSingleFile(file, ext, cb) {
            var name = file.name;
            if (Q.isString(ext)) {
                var reg = new RegExp('.' + ext + '$', 'gi');
                if (!reg.test(name)) {
                    alert('Please selects .' + ext + ' file');
                    return;
                }
            } else if (ext instanceof Function) {
                cb = ext;
            }
            var fileReader = new FileReader();
            fileReader.onload = function (evt) {
                cb(fileReader.result);
            }
            fileReader.readAsText(file, 'utf-8');
        }

        Q.readerSingleFile = readerSingleFile;
    }
}(Q)
