<?php 
/***
 * With hidden fields 
 * ***/
if(count($_POST) > 0){
	echo "Form posted";
	echo '<pre>';
	print_r($_POST);
	echo '</pre>';
}

$defaultVal = "test-default-val";
?>
<script src="js/jquery.1.8.2.min.js"></script>
<script src="js/valid.js"></script>
<script type="text/javascript"> 
		$(document).ready(function() {
			var hiddenArr = new Array();
			//hid1 - id of hidden field, gender - id of field who's TEXT needs to go in hidden field          
			//**to pick text 	~text is used
			hiddenArr['hid1~text'] = 'gender';	
			
			//hid2 - id of hidden field, father_name - id of field who's VALUE needs to go in hidden field    
			//**to pick value  	~val is used										
			hiddenArr['hid2~val'] = 'father_name';										
			
			//hid3 - id of hidden field, VALUE DEFINED AS A PHP VARIABLE already in hidden field		  
			//**to pick defualt php value as in hidden field      ~default is used 
			hiddenArr['hid3~default'] = '';								
			
			//hid4 - id of hidden field, ch1 - rel of CHECKBOX field who's value needs to go in hidden field          
			//**to pick value 	~check is used
			hiddenArr['hid4~check'] = 'ch1';	
			
			//hid5 - id of hidden field, children - name of RADIO field who's value needs to go in hidden field          
			//**to pick value 	~radio is used
			hiddenArr['hid5~radio'] = 'children';	
							
			validateFrm('frmRegisterHome','registerbtn',hiddenArr);
		});
</script>

<style>
    .red-error{border:1px solid red !important;}
    .spn-error{color:Red;display:none;}
    input[type="text"], input[type="password"], input[type="email"], textarea{padding: 2px 0px;border: 1px solid #CCCCCC;}
</style>

<form method="post" action="" name="frmRegisterHome" id="frmRegisterHome"> 
	<div>
		<input type="hidden" name="hid1" id="hid1" value="" />
		<input type="hidden" name="hid2" id="hid2" value="" />
		<input type="hidden" name="hid3" id="hid3" value="<?php echo $defaultVal;?>" />
		<input type="hidden" name="hid4" id="hid4" value="" />
		<input type="hidden" name="hid5" id="hid5" value="" />
	</div>
<ul>
	<li>
		<span>Vehicle:</span>
		<label>
			<input type="checkbox" name="vehicle[]" id="vehicle1" value="Bike" rel="ch1" class="required-chkbox" title="Please select checkbox" /><label>Bike</label>
			<input type="checkbox" name="vehicle[]" id="vehicle2" value="Car"  rel="ch1" class="required-chkbox" title="Please select checkbox" /><label>Car</label>
		</label> 
	</li>
	<li>
		<span>No of children:</span>
		<label>
			<input type="radio" name="children" id="children0" value="0" class="required"  title="Please select radio button"  /><label>0</label>
			<br>
			<input type="radio" name="children" id="children1" value="1" class="required"  title="Please select radio button"  /><label>1</label>
			<br>
			<input type="radio" name="children" id="children2" value="2" class="required"  title="Please select radio button"  /><label>2</label>
		</label> 
	</li>
	<li>
		<span>Your Email ID:</span>
		<label><input name="email_user_actual" type="text" id="email_user_actual" class="required email"  title="Please enter email"  /></label> 
	</li>
	<li>
		<span>Your Password:</span>
		<label><input type="password" name="password" id="password" value="" class="required"  title="Please enter password"  /></label> 
	</li>
	<li>
		<span>Your Name:</span>
		<label><input type="text" name="name" id="name" class="required"  title="Please enter name"  /></label> 
	</li>
	<li>
		<span>Your Age:</span>
		<label><input type="text" name="age" id="age" class="required" onkeypress="return isNumberKey(event);" maxlength="3"   title="Please enter age" /></label> 
	</li>
	<li>
		<span>Your Office Address:</span>
		<label><textarea name="office_address" id="office_address" row="10" columns="10" class="anyone" rel="group1"  title="Please choose any one of home address or office address"></textarea></label> 
	</li>
	<li>
		<span>Your Home Address:</span>
		<label><textarea name="home_address" id="home_address" row="10" columns="10" class="anyone" rel="group1"   title="Please choose any one of office address or home address" ></textarea></label> 
	</li>
	<li>
		<span>Your Phone:</span>
		<label><input type="text" name="phone" id="phone" class="required minlen maxlen digits" onkeypress="return isNumberKey(event);" maxlength="10" minlength="10" title="Please enter phone"/></label> 
	</li>
	<li>
		<span>Your Gender:</span>
		<label>
			<select name="gender" id="gender" class="required" title="Please select gender">
				<option value="Select">Select</option>
				<option value="M">Male</option>
				<option value="F">Female</option>
			</select>
		</label> 
	</li>
	<li>
		<span>Your Father Name:</span>
		<label><input type="text" name="father_name" id="father_name" class="anyone minlen-choice" rel="group2" maxlength="20" minlength="20" title="Please choose any one of father name or mother name"/></label> 
	</li>
	<li>
		<span>Your Mother Name:</span>
		<label><input type="text" name="mother_name" id="mother_name" class="anyone minlen-choice" rel="group2" maxlength="20" minlength="20" title="Please choose any one of mother name or father name"/></label> 
	</li>
	<li>
	<a href="#" id="registerbtn">Register</a> 
	</li>  
</ul>
</form>
