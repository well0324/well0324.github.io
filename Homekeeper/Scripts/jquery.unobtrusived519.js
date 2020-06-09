(function ($) {
    $.common = {
        options: {
            dateFormat: "yyyy-MM-dd",
            datetimeFormat: "yyyy-MM-dd HH:mm"
        },
        popup: function (url, size, onComplete, onClosed) {
            var filterFancySize = function (val) {
                /// <summary>專門判斷Fancybox寬高的私有函式</summary>
                try {
                    var temp = val.toLowerCase();
                    if (temp.indexOf('%') != -1) {
                        return temp;
                    } else if (temp.indexOf('p') != -1) {
                        return temp.replace('p', '%');
                    } else {
                        temp = parseInt(temp, 10);
                        if (!isNaN(temp)) { return temp; } else { throw ''; }
                    }
                }
                catch (e) { alert('Lightbox Class Fail! \nUsing Default Size 50%'); return '50%'; }
            };

            if (!size || size.toLowerCase() == "true") {
                size = ["98%", "98%"];
            } else {
                size = size.split(",");
                size[0] = filterFancySize(size[0]);
                size[1] = filterFancySize(size[1]);
            }

            $.fancybox({
                'href': url,
                'width': size[0],
                'height': size[1],
                'padding': 5,
                'type': 'iframe',
                'autoSize': false,
                'fitToView': false,
                'hideOnOverlayClick': false,
                'beforeShow': onComplete,
                'beforeClose': onClosed
            });
        },
        popupimage: function (url, onComplete, onClosed) {
            $.fancybox({
                'href': url,
                'padding': 5,
                'type': 'image',
                'autoSize': true,
                'fitToView': true,
                'hideOnOverlayClick': false,
                'beforeShow': onComplete,
                'beforeClose': onClosed
            });
        },
        closeWindow: function () {
            if (/fancybox/.test(window.name)) {
                window.parent.$.fancybox.close();
            } else {
                window.close();
            }
        },
        getFunction: function (code, argNames) {
            argNames = argNames || [];
            var fn = window, parts = (code || "").split(".");
            while (fn && parts.length) {
                fn = fn[parts.shift()];
            }
            if (typeof (fn) === "function") {
                return fn;
            }
            argNames.push(code);
            return Function.constructor.apply(null, argNames);
        }
    };

    $(function () {
        //加上切換
        $.unobtrusive.switcher.initialize();
    });

    $.unobtrusive = {};

    $.unobtrusive.switcher = {
        initialize: function () {
            //input的初始化
            Initailize();

            //input事件
            $("body").on("change", "input[data-switch-for]", inputSwitch);

            //a事件
            $("body").on("click", "a[data-switch-for]", aSwitch);

            //select的事件
            $("body").on("change", "select[data-switch-for]", selectSwitch);

            function Initailize() {
                $("a[data-switch-for]").each(function (index, elem) {
                    var $elem = $(elem);
                    var $target = $("[data-switch-from=" + $elem.attr("data-switch-for") + "]");

                    if ($elem.attr("data-switch-add-class-id")) {
                        var $addClass = $("#" + $elem.attr("data-switch-add-class-id"));
                        if ($addClass.hasClass($elem.attr("data-switch-select-class"))) {
                            $target.show();
                            $target.find(":input").each(function (index, elem) {
                                elem.removeAttribute("disabled");
                            });
                        } else {
                            $target.hide();
                            $target.find(":input").attr("disabled", "disabled");
                            $addClass.removeClass($elem.attr("data-switch-select-class"));
                        }
                    } else {
                        if ($elem.hasClass("data-switch-select-class")) {
                            $target.show();
                            $target.find(":input").each(function (index, elem) {
                                elem.removeAttribute("disabled");
                            });
                        } else {
                            $target.hide();
                            $target.find(":input").attr("disabled", "disabled");
                            $elem.removeClass($elem.attr("data-switch-select-class"));
                        }
                    }
                });

                $("input[data-switch-for]").each(function (index, elem) {
                    var $elem = $(elem);
                    var $target = $("[data-switch-from=" + $elem.attr("data-switch-for") + "]");
                    if (elem.checked) {
                        if (!$elem.attr("disabled")) {
                            $target.show();
                            $elem.addClass($elem.attr("data-switch-select-class"));
                            $target.find(":input").each(function (index, elem) {
                                elem.removeAttribute("disabled");
                            });
                        }
                    } else {
                        $target.hide();
                        $target.find(":input").attr("disabled", "disabled");
                        $elem.removeClass($elem.attr("data-switch-select-class"));
                    }
                });

                $("select option[data-switch-for]").each(function (index, elem) {
                    var $elem = $(elem);
                    var $target = $("[data-switch-from=" + $elem.attr("data-switch-for") + "]");
                    var $targets = $("[data-switch-group=" + $elem.attr("data-switch-for") + "]");

                    if ($target.length > 0) {
                        if (elem.selected) {
                            $target.show();
                        } else {
                            $target.hide();
                        }
                    } else if ($targets.length > 0) {
                        if (elem.selected) {
                            $targets.each(function () {
                                $(this).show();
                            });
                        } else {
                            $targets.each(function () {
                                $(this).hide();
                            });
                        }
                    }
                });
            }

            function aSwitch() {
                var $elem = $(this);
                var $target = $("[data-switch-from=" + $elem.attr("data-switch-for") + "]");

                $target.show();
                //只抓第一層的input做Remove disable
                $target.find(":input").not($target.find("[data-switch-from] :input")).each(function (index, elem) {
                    elem.removeAttribute("disabled");
                });

                //找出Group不管其他的
                var $groups = $("[data-switch-group=" + $elem.attr("data-switch-group") + "]");

                $groups.each(function (index, group) {
                    $group = $(group);
                    if ($group.attr("data-switch-for")) {
                        if ($group.attr("data-switch-add-class-id")) {
                            $("#" + $group.attr("data-switch-add-class-id")).removeClass($group.attr("data-switch-select-class"));
                        } else {
                            $group.removeClass($group.attr("data-switch-select-class"));
                        }
                    }
                });

                if ($elem.attr("data-switch-add-class-id")) {
                    var $addClass = $("#" + $elem.attr("data-switch-add-class-id"));
                    $addClass.addClass($elem.attr("data-switch-select-class"));
                } else {
                    $elem.addClass($elem.attr("data-switch-select-class"));
                }

                Initailize();

                //讓子層重新判斷
                $target.find("[data-switch-for]").each(function (index, elem) {
                    aSwitch.apply(elem);
                });
            }

            function inputSwitch() {
                var $elem = $(this);
                var $target = $("[data-switch-from=" + $elem.attr("data-switch-for") + "]");
                if (this.checked) {
                    $target.show();
                    //只抓第一層的input做Remove disable
                    $target.find(":input").not($target.find("[data-switch-from] :input")).each(function (index, elem) {
                        elem.removeAttribute("disabled");
                    });

                    //找出Group隱藏其他的
                    var $group = $("input[data-switch-group=" + $elem.attr("data-switch-group") + "]");

                    var $anthors = $group.not($elem);

                    $anthors.each(function (index, anthor) {
                        var $anthor = $("[data-switch-from=" + anthor.getAttribute("data-switch-for") + "]");
                        $anthor.hide();
                        $anthor.find(":input").attr("disabled", "disabled");
                    });

                    Initailize();

                    //讓子層重新判斷
                    $target.find("[data-switch-for]").each(function (index, elem) {
                        inputSwitch.apply(elem);
                    });
                } else {
                    //checkBox會用到
                    $target.hide();
                    $target.find(":input").attr("disabled", "disabled");
                }
            }

            function selectSwitch() {
                Initailize();
            }
        }
    };

    $.unobtrusive.popup = function () {
        var value = this.getAttribute("data-popup-url");
        var url;
        var size = this.getAttribute("data-popup-size");

        if (/^.*\/.*/.test(value)) {
            url = value;
        }

        url = url || this.getAttribute("src") || this.getAttribute("href");

        $.common.popup(url, size, $.common.getFunction(this.getAttribute("data-popup-completed")), $.common.getFunction(this.getAttribute("data-popup-closed")));
    }

    $.unobtrusive.popupimage = function () {
        var value = this.getAttribute("data-popup-image");
        var url;

        if (/^.*\/.*/.test(value)) {
            url = value;
        }

        url = url || this.getAttribute("src") || this.getAttribute("href");

        $.common.popupimage(url, $.common.getFunction(this.getAttribute("data-popup-completed")), $.common.getFunction(this.getAttribute("data-popup-closed")));
    }

    $("body").on("click", "[data-popup-close]", function () {
        var target = this.getAttribute("data-popup-close");
        if (target === "this") {
            $.common.closeWindow();
        }
    });

    $("body").on("click", "[data-popup-url]", function () {
        $.unobtrusive.popup.apply(this);
        return false;
    });

    $("body").on("click", "[data-popup-image]", function () {
        $.unobtrusive.popupimage.apply(this);
        return false;
    });

    //加有上data-datePicker會在click綁上My97
    $("body").on("click", "[data-datePicker]", function () {
        WdatePicker.apply(this, [{ dateFmt: $.common.options.dateFormat }]);
    });

    $("body").on("click", "[data-datetimePicker]", function () {
        WdatePicker.apply(this, [{ dateFmt: $.common.options.datetimeFormat }]);
    });
}(window.jQuery))