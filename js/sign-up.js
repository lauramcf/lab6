//signup.js 
// add your JavaScript code to this file

$(function(){
	var option;
    var idx;
    var state;
    var stateSelect = $('#state');
    for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            stateSelect.append(option);
    }
});

$('.signup-form').submit(function(){
    //code to execute when the sign-up form is submitted
    //this is the raw DOM form element
    //wrap it in a jQuery object so we can use jQuery methods on it
    var signupForm = $(this);	
    var addr1Input = signupForm.find('input[name="addr-1"]');
    var addr1Value = addr1Input.val();
    if(null != addr1Value && addr1Value.length > 0){
	    var zipInput = signupForm.find('input[name="zip"]');
	    var zipValue = zipInput.val();
	    var valid = (null != zipValue && zipValue.length > 0);
	    if(!valid) {
	    	alert("Please input your zip code");
	    }
	  return valid;  
	}
});