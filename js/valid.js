window.isValid = true;
window.chckArr = new Array();
var validateFrm = function (a, b) {
    $("#" + b).click(function (f) {
        f.preventDefault();
        $("#" + a + " input,select,textarea").each(function (g, k) {
            var j = $(k).attr("type");
            if (($.inArray(j, ["hidden", "button", "submit", "reset"]) == -1)) {
                var l = $(k).attr("maxlength");
                var e = $(k).attr("minlength");
                if ($(k).hasClass("required")) {
                    var m = true;
                    $("input:radio").each(function () {
                        var i = $(this).attr("name");
                        if ($("input:radio[name=" + i + "]:checked").length == 0) {
                            m = false
                        }
                    });
                    if (($.trim($(k).val()) == "" || $.trim($(k).val()) == "0" || $.trim($(k).val()) == "Select") || (m == false)) {
                        if($(k).prop('nodeName').toLowerCase() !='select'){
							var v = 'Enter';
						}else{
							var v = 'Select';
						}		
						
						if($(k).attr('name').indexOf("_") != -1){
							var w = $(k).attr('name').replace("_"," "); 
						}
						else{
							var w = $(k).attr('name'); 
						}
						toggleError(k, '1', v+' '+w); 
                        chckArr[$(k).attr("id")] = "1";
                        return
                    } else {
                        chckArr[$(k).attr("id")] = "0";
                        toggleError(k, "0", "")
                    }
                }
                if ($(k).hasClass("email")) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(k).val())) {
                        toggleError(k, "0", "");
                        chckArr[$(k).attr("id")] = "0"
                    } else {
                        toggleError(k, "1", "Invalid Email");
                        chckArr[$(k).attr("id")] = "1";
                        return
                    }
                }
                if ($(k).hasClass("maxlen")) {
                    if ($(k).val().length > l) {
                        toggleError(k, "1", "Please enter " + l + " characters");
                        chckArr[$(k).attr("id")] = "1";
                        return
                    } else {
                        toggleError(k, "0", "");
                        chckArr[$(k).attr("id")] = "0"
                    }
                }
                if ($(k).hasClass("minlen")) {
                    if ($(k).val().length < e) {
                        toggleError(k, "1", "Please enter atleast " + e + " characters");
                        chckArr[$(k).attr("id")] = "1";
                        return
                    } else {
                        toggleError(k, "0", "");
                        chckArr[$(k).attr("id")] = "0"
                    }
                }
                if ($(k).hasClass("anyone")) {
                    var h = $(k).val();
                    $("input[rel=" + $(k).attr("rel") + "], textarea[rel=" + $(k).attr("rel") + "]").each(function (n, i) {
                        if ($(i).attr("id") != $(k).attr("id")) {
                            if (($.trim(h) == "" && $.trim($(i).val()) == "") || ($.trim(h) != "" && $.trim($(i).val()) != "")) {
                                toggleError(k, "1", "Please choose any one of " + $(k).attr("name").replace("_", " ") + " or " + $(i).attr("name").replace("_", " "));
                                chckArr[$(k).attr("id")] = "1";
                                return
                            } else {
                                toggleError(k, "0", "");
                                chckArr[$(k).attr("id")] = "0"
                            }
                        }
                    })
                }
            }
        });
        var d = 0;
        for (var c in chckArr) {
            d = parseInt(d) + parseInt(chckArr[c])
        }
        if (d > 0) {
            isValid = false
        }
        if (isValid) {
            if ($("#" + a).find(".anyone").length > 0) {
                $(".anyone").each(function (e, g) {
                    checkLenAnyone(g)
                })
            }
            var d = 0;
            for (var c in chckArr) {
                d = parseInt(d) + parseInt(chckArr[c])
            }
            if (d > 0) {
                isValid = false
            }
            if (isValid) {
                $("#" + a).submit()
            }
        }
    });
    $("#" + a + " input,select,textarea").each(function (c, e) {
        var d = $(e).attr("type");
        if (($.inArray(d, ["hidden", "button", "submit", "reset"]) == -1)) {
            if (d == "text" || d == "password" || $(e).prop("nodeName").toLowerCase() == "textarea") {
                $(e).bind("keyup", onpress);
                $(e).attr("autocomplete", "off")
            } else {
                if ($(e).prop("nodeName").toLowerCase() == "select") {
                    $(e).bind("change", onpress)
                }
            }
        }
    })
};
var onpress = function () {
    var b = $(this).attr("maxlength");
    var a = $(this).attr("minlength");
    if ($(this).hasClass("required")) {
        var c = true;
        $("input:radio").each(function () {
            var d = $(this).attr("name");
            if ($("input:radio[name=" + d + "]:checked").length == 0) {
                c = false
            }
        });
        if (($.trim($(this).val()) == "" || $.trim($(this).val()) == "0" || $.trim($(this).val()) == "Select") || (c == false)) {
            if($(this).prop('nodeName').toLowerCase() !='select'){
				var r = 'Enter';
			}else{
				var r = 'Select';
			}		
			
			if($(this).attr('name').indexOf("_") != -1){
				var z = $(this).attr('name').replace("_"," "); 
			}
			else{
				var z = $(this).attr('name'); 
			}
			toggleError(this, '1', r+' '+z); 
            chckArr[$(this).attr("id")] = "1";
            return
        } else {
            toggleError(this, "0", "");
            chckArr[$(this).attr("id")] = "0"
        }
    }
    if ($(this).hasClass("email")) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(this).val())) {
            toggleError(this, "0", "");
            chckArr[$(this).attr("id")] = "0"
        } else {
            toggleError(this, "1", "Invalid Email");
            chckArr[$(this).attr("id")] = "1";
            return
        }
    }
    if ($(this).hasClass("maxlen")) {
        if ($(this).val().length > b) {
            toggleError(this, "1", "Please enter a " + b + " digit number");
            chckArr[$(this).attr("id")] = "1";
            return
        } else {
            toggleError(this, "0", "");
            chckArr[$(this).attr("id")] = "0"
        }
    }
    if ($(this).hasClass("minlen")) {
        if ($(this).val().length < a) {
            toggleError(this, "1", "Please enter atleast " + a + " digits");
            chckArr[$(this).attr("id")] = "1";
            return
        } else {
            toggleError(this, "0", "");
            chckArr[$(this).attr("id")] = "0"
        }
    }
};

function checkLenAnyone(b) {
    var a = $(b).val();
    $("input[rel=" + $(b).attr("rel") + "]").each(function (d, c) {
        var e = $(this).attr("minlength");
        if ($(c).val() != "") {
            if ($(c).hasClass("minlen-choice")) {
                if ($(c).val().length < e) {
                    toggleError(c, "1", "Please enter atleast " + e + " digits");
                    chckArr[$(c).attr("id")] = "1";
                    return
                } else {
                    toggleError(c, "0", "");
                    chckArr[$(c).attr("id")] = "0"
                }
            }
        }
    });
    return true
}

function toggleError(c, b, d) {
    if ($(c).parent().find("span").length > 0) {
        $(c).parent().find("span").remove();
        $(c).after('<span class="spn-error"></span>');
        var a = $(c).parent().find("span")
    } else {
        $(c).after('<span class="spn-error"></span>');
        var a = $(c).parent().find("span")
    } if (b == "1") {
        $(a).html(d);
        $(a).show();
        $(c).addClass("red-error");
        isValid = false
    } else {
        $(a).html("");
        $(a).remove();
        $(c).removeClass("red-error");
        isValid = true
    }
    return true
}

function isNumberKey(b) {
    var a = (b.which) ? b.which : event.keyCode;
    if (a > 31 && (a < 48 || a > 57)) {
        if (a != 46) {
            return false
        }
    }
    return true
};
