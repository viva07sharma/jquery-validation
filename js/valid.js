window.isValid = true;
window.chckArr = new Array();
var validateFrm = function (a, b, ar) {
    $("#" + b).click(function (f) {
        f.preventDefault();
        $("#" + a + " input,select,textarea").each(function (g, k) {
            var j = $(k).attr("type");
            if (($.inArray(j, ["hidden", "button", "submit", "reset", "checkbox"]) == -1)) {
                var l = $(k).attr("maxlength");
                var e = $(k).attr("minlength");
                if ($(k).hasClass("required")) {  
                    if (($.trim($(k).val()) == "" || $.trim($(k).val()) == "0" || $.trim($(k).val()) == "Select")) {
						toggleError(k, '1', $(k).attr('title'))
                        chckArr[$(k).attr("id")] = "1"
                        return
                    } else {
                        chckArr[$(k).attr("id")] = "0"
                        toggleError(k, "0", "")
                    }
                }
                if ($(k).hasClass("email")) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(k).val())) {
                        toggleError(k, "0", "");
                        chckArr[$(k).attr("id")] = "0"
                    } else {
                        toggleError(k, "1", "Invalid Email");
                        chckArr[$(k).attr("id")] = "1"
                        return
                    }
                }
                if ($(k).hasClass("maxlen")) {
                    if ($(k).val().length > l) {
						if($(k).hasClass("digits")){
							var digchar = 'digits';
						}
						else{
							var digchar = 'characters';
						}
                        toggleError(k, "1", "Please enter maximum " + l + " "+digchar);
                        chckArr[$(k).attr("id")] = "1";
                        return
                    } else {
                        toggleError(k, "0", "");
                        chckArr[$(k).attr("id")] = "0"
                    }
                }
                if ($(k).hasClass("minlen")) {
                    if ($(k).val().length < e) {
						if($(k).hasClass("digits")){
							var digchar = 'digits';
						}
						else{
							var digchar = 'characters';
						}
                        toggleError(k, "1", "Please enter atleast " + e + " "+digchar);
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
                            if (($.trim(h) == "" && $.trim($(i).val()) == "")) {
								var ch1 = replaceUnderscore($(k).attr('id')) 
								var ch2 = replaceUnderscore($(i).attr('id')) 
                                toggleError(k, "1", $(k).attr('title'))
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
        
        $("input:radio").each(function () {
			if($(this).hasClass("required")){
				var i = $(this).attr("name")  
				if ($("input:radio[name=" + i + "]:checked").length == 0) {
					toggleError(this, '1', $(this).attr('title'))
					chckArr[$(this).attr("id")] = "1"
					return
				}
				else{
					toggleError(this, "0", "");
                    chckArr[$(this).attr("id")] = "0"
				}
			}
		}); 
        
         $("input[type=checkbox]").each(function () {
			if($(this).hasClass("required-chkbox")){  
				if ($('input[rel='+$(this).attr('rel')+']:checked').length==0) { 
					toggleError(this, '1', $(this).attr('title'))
					chckArr[$(this).attr("id")] = "1"
					return
				}
				else{ 
					toggleError(this, "0", "");
                    chckArr[$(this).attr("id")] = "0"
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
				for (var ha in ar) {
					var hArr = ha.split('~'); 
					if(hArr[1]=='text'){
						var vl = $('#'+ar[ha]+' option:selected').text()
					} 
					else if(hArr[1]=='val'){
						var vl = $('#'+ar[ha]).val()
					}
					else if(hArr[1]=='default'){
						var vl = $('#'+hArr[0]).val()
					}
					else if(hArr[1]=='radio'){
						var vl = $('input[name='+ar[ha]+']:checked').val()
					}
					else if(hArr[1]=='check'){  
						var vl = $("input[rel="+ar[ha]+"]:checked").map(
									function () {return this.value;}
									).get().join(",")
					}
					
					$("#"+hArr[0]).val(vl) 
				}
                $("#" + a).submit()
            }
        }
    });
    $("#" + a + " input,select,textarea").each(function (c, e) {
        var d = $(e).attr("type");
        if (($.inArray(d, ["hidden", "button", "submit", "reset"]) == -1)) {
            if (d == "text" || d == "password" || $(e).prop("nodeName").toLowerCase() == "textarea") {
                $(e).bind("keyup", onpress)
                $(e).attr("autocomplete", "off")
            } else if ($(e).prop("nodeName").toLowerCase() == "select") {
				$(e).bind("change", onpress)
			} 
			else if(d=='radio' || d=='checkbox'){
				$(e).bind("change", onchng)
			}
        }
    })
}; 

var onpress = function () { 
    var b = $(this).attr("maxlength");
    var a = $(this).attr("minlength");
    if ($(this).hasClass("required")) { 
        if (($.trim($(this).val()) == "" || $.trim($(this).val()) == "0" || $.trim($(this).val()) == "Select")) { 
			toggleError(this, '1', $(this).attr('title')); 
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
			if($(this).hasClass("digits")){
				var digchar = 'digits';
			}
			else{
				var digchar = 'characters';
			}
            toggleError(this, "1", "Please enter maximum " + b + " "+digchar);
            chckArr[$(this).attr("id")] = "1";
            return
        } else {
            toggleError(this, "0", "");
            chckArr[$(this).attr("id")] = "0"
        }
    }
    if ($(this).hasClass("minlen")) {
        if ($(this).val().length < a) {
			if($(this).hasClass("digits")){
				var digchar = 'digits';
			}
			else{
				var digchar = 'characters';
			}
            toggleError(this, "1", "Please enter atleast " + a + " " + digchar);
            chckArr[$(this).attr("id")] = "1";
            return
        } else {
            toggleError(this, "0", "");
            chckArr[$(this).attr("id")] = "0"
        }
    }
}; 


var onchng = function (){
	$("input:radio").each(function () {
			if($(this).hasClass("required")){
				var i = $(this).attr("name")  
				if ($("input:radio[name=" + i + "]:checked").length == 0) {
					toggleError(this, '1', $(this).attr('title'))
					chckArr[$(this).attr("id")] = "1"
					return
				}
				else{
					toggleError(this, "0", "");
                    chckArr[$(this).attr("id")] = "0"
				}
			}
		});
		
	$("input[type=checkbox]").each(function () {
			if($(this).hasClass("required-chkbox")){  
				if ($('input[rel='+$(this).attr('rel')+']:checked').length==0) { 
					toggleError(this, '1', $(this).attr('title'))
					chckArr[$(this).attr("id")] = "1"
					return
				}
				else{ 
					toggleError(this, "0", "");
                    chckArr[$(this).attr("id")] = "0"
				} 
			} 
		}); 
};

function checkLenAnyone(b) {
    var a = $(b).val();
    $("input[rel=" + $(b).attr("rel") + "]").each(function (d, c) {
        var e = $(this).attr("minlength");
        if ($(c).val() != "") {
            if ($(c).hasClass("minlen-choice")) {
                if ($(c).val().length < e) {
					if($(c).hasClass("digits")){
						var digchar = 'digits';
					}
					else{
						var digchar = 'characters';
					}
                    toggleError(c, "1", "Please enter atleast " + e +" "+digchar);
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
        if($(c).attr('type')=='radio' || $(c).attr('type')=='checkbox'){
			$(c).parent().find('label').last().after('<span class="spn-error"></span>');
		}
		else{
			$(c).after('<span class="spn-error"></span>');
		}
        var a = $(c).parent().find("span")
    } else {
		if($(c).attr('type')=='radio' || $(c).attr('type')=='checkbox'){
			$(c).parent().find('label').last().after('<span class="spn-error"></span>');
		}
		else{
			$(c).after('<span class="spn-error"></span>');
		} 
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
}

function replaceUnderscore(strn){ 
	var tempRepl = strn
	while(tempRepl.indexOf("_") != -1 ){
		 tempRepl = tempRepl.replace("_"," ")  
	}  
	
	return tempRepl
}
