var base_url = "http://www.saa.dz/"
$(function(){


	$('.flexslider').flexslider({
		animation: "fade",
		controlNav: false,
	});



})

function openQuotationForm(){
	$('#pageContainer').addClass('devisMode');
	
	$("#devis-of .sectionWrapper.quotationHeader").sticky({topSpacing:0});
				$('#devis-of .sectionWrapper.quotationContainer').css('height', 'calc( 100% - '+$('#devis-of .sectionWrapper.quotationHeader .sectionContainer').outerHeight()+'px )');
				
				console.log($('#devis-of .sectionWrapper.quotationHeader .sectionContainer').outerHeight());
}

function cancelQuotation(){
	$('#pageContainer').removeClass('devisMode');
}

function scrollToBottom(){
	
	var quotationContainer = $('#devis-of .sectionWrapper.quotationContainer');
	$(quotationContainer).scrollTop($(quotationContainer)[0].scrollHeight);
	
	
	
}


function openCarSelector(){
	$('#carSelector').remove();
	$('body').append('<div id="carSelector">'+$('#carSelectorTemplate').html()+'</div>')

}

function selectCarBrand(carBrand){

	$.getJSON( "./ajax.getModels/"+carBrand+"/", function( models ) {

	  $('#carSelector .brandsList').hide();
	  $('#carSelector .modelsList .listContainer').html('');

	  $('#carSelector .carSelectorHeader .selectedBrand').css('background-image',$('#carSelector .brandsList .brandBlock[data-brand="'+carBrand+'"] .brandImage').css('background-image'));

	  $('#carSelector .carSelectorHeader.brand').hide();
	  $('#carSelector .carSelectorHeader.model').show();
	  $('#carSelector .modelsList .searchContainer .notFound').attr("onclick", "vehicleNotFound("+carBrand+")");


	  	for(var i=0; i<models.length; i++){

		  $('#carSelector .modelsList .listContainer').append('<div class="modelWrapper">'+
												'	<div class="modelBlock" data-brand="'+carBrand+'" data-model="'+models[i]['id']+'" onclick="selectCarModel('+models[i]['id']+');">'+
												'		<div class="modelImage" style="background-image:url('+models[i]['image']+')" ></div>'+
												'		<div class="modelName">'+models[i]['modelName']+'</div>'+
												'	</div>'+
												'</div>');

		}

		$('#carSelector .modelsList').show();

	});

}
function selectCarBrandHome(carBrand){

	$.getJSON( "./ajax.getModels/"+carBrand+"/", function( models ) {

	  $('#carSelector .brandsList').hide();
	  $('#carSelector .modelsList .listContainer').html('');

	  $('#carSelector .carSelectorHeader .selectedBrand').css('background-image',$('#carSelector .brandsList .brandBlock[data-brand="'+carBrand+'"] .brandImage').css('background-image'));

	  $('#carSelector .carSelectorHeader.brand').hide();
	  $('#carSelector .carSelectorHeader.model').show();
	  $('#carSelector .modelsList .searchContainer .notFound').attr("onclick", "vehicleNotFound("+carBrand+")");


	  	for(var i=0; i<models.length; i++){

		  $('#carSelector .modelsList .listContainer').append('<div class="modelWrapper">'+
												'	<div class="modelBlock" data-brand="'+carBrand+'" data-model="'+models[i]['id']+'" onclick="selectCarModelHome('+models[i]['id']+');">'+
												'		<div class="modelImage" style="background-image:url('+models[i]['image']+')" ></div>'+
												'		<div class="modelName">'+models[i]['modelName']+'</div>'+
												'	</div>'+
												'</div>');

		}

		$('#carSelector .modelsList').show();

	});

}

function vehicleNotFoundHome(){
	window.location.href="/offer/auto/?carBrand=0&carModel=0&carVersion=0";
}

function selectCarModel(carModel){

	$.getJSON( "./ajax.getVersions/"+carModel+"/", function( versions ) {

	  $('#carSelector .brandsList').hide();
	  $('#carSelector .modelsList').hide();

	  $('#carSelector .carSelectorHeader.model').hide();
	  $('#carSelector .carSelectorHeader.version').show();

	 $('#carSelector .versionsList .searchContainer .notFound').attr("onclick", "vehicleNotFound("+$('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"]').attr('data-brand')+", "+carModel+")");


	 $('#carSelector .carSelectorHeader .selectedModel').html($('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"] .modelName').html());




	  $('#carSelector .versionsList .modelImage').css('background-image', $('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"] .modelImage').css('background-image'));
	  $('#carSelector .versionsList .modelName').html($('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"] .modelName').html());

	  $('#carSelector .versionsList .versionsTable tbdoy').html('');

	  for(var i=0; i<versions.length; i++){

		  $('#carSelector .versionsList .versionsTable tbody').append('<tr data-brand="'+$('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"]').attr('data-brand')+'" data-model="'+carModel+'" data-version="'+versions[i]['id']+'" onclick="selectCarVersion('+versions[i]['id']+')">'+
		 										'	<td>'+versions[i]['versionName']+'</td>'+
		 										'	<td>'+versions[i]['year']+'</td>'+
		 										'	<td>'+versions[i]['energy']+'</td>'+
		 										'</tr>');

	  }

	  $('#carSelector .versionsList').show();


	});

}
function selectCarModelHome(carModel){

	$.getJSON( "./ajax.getVersions/"+carModel+"/", function( versions ) {

	  $('#carSelector .brandsList').hide();
	  $('#carSelector .modelsList').hide();

	  $('#carSelector .carSelectorHeader.model').hide();
	  $('#carSelector .carSelectorHeader.version').show();

	 $('#carSelector .versionsList .searchContainer .notFound').attr("onclick", "vehicleNotFound("+$('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"]').attr('data-brand')+", "+carModel+")");


	 $('#carSelector .carSelectorHeader .selectedModel').html($('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"] .modelName').html());




	  $('#carSelector .versionsList .modelImage').css('background-image', $('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"] .modelImage').css('background-image'));
	  $('#carSelector .versionsList .modelName').html($('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"] .modelName').html());

	  $('#carSelector .versionsList .versionsTable tbdoy').html('');

	  for(var i=0; i<versions.length; i++){

		  $('#carSelector .versionsList .versionsTable tbody').append('<tr data-brand="'+$('#carSelector .modelsList .modelBlock[data-model="'+carModel+'"]').attr('data-brand')+'" data-model="'+carModel+'" data-version="'+versions[i]['id']+'" onclick="selectCarVersionHome('+versions[i]['id']+')">'+
		 										'	<td>'+versions[i]['versionName']+'</td>'+
		 										'	<td>'+versions[i]['year']+'</td>'+
		 										'	<td>'+versions[i]['energy']+'</td>'+
		 										'</tr>');

	  }

	  $('#carSelector .versionsList').show();


	});

}


function selectCarVersion(carVersion){
	$('#carSelector').hide();

	$('.quotationForm.auto .quotationFormStep1 .noCarSelected').hide();

	$('.quotationForm.auto .quotationFormStep1 .carResume').show();
	$('.quotationForm.auto .quotationFormStep1 .inputsContainer').show();

	$('.quotationForm.auto .quotationFormStep1 .carResume .carImage').css('background-image', $('#carSelector .versionsList .modelImage').css('background-image'));

	$('.quotationForm.auto .quotationFormStep1 .carResume .modelName').html( $('#carSelector .versionsList .modelName').html() );


	var carBrand = $('#carSelector .versionsList .versionsTable [data-version="'+carVersion+'"]').attr('data-brand');
	var carModel = $('#carSelector .versionsList .versionsTable [data-version="'+carVersion+'"]').attr('data-model');



	$('#autoQuotation [data-input="brand"] input').val($('#carSelector .brandsList .brandBlock[data-brand='+carBrand+'] .brandName').html()).prop('disabled', true);
	$('#autoQuotation [data-input="model"] input').val($('#carSelector .modelsList .modelBlock[data-model='+carModel+'] .modelName').html()).prop('disabled', true);
	$('#autoQuotation [data-input="version"] input').val($('#carSelector .versionsList .versionsTable [data-version="'+carVersion+'"] td:eq(0)').html()).prop('disabled', true);
	//$('.quotationContainer select[name="energy"]').val($('#carSelector .versionsList .versionsTable [data-version="'+carVersion+'"] td:eq(2)').html());

	$('#autoQuotation [data-input="brand"]').removeClass('current').addClass('correct');
	$('#autoQuotation [data-input="model"]').show().addClass('correct');
	$('#autoQuotation [data-input="version"]').show().addClass('correct');
	$('#autoQuotation [data-input="horsePower"]').show().addClass('current');




	scrollToQuotation();
}

function selectCarVersionHome(carVersion){

	var carBrand = $('#carSelector .versionsList .versionsTable [data-version="'+carVersion+'"]').attr('data-brand');
	var carModel = $('#carSelector .versionsList .versionsTable [data-version="'+carVersion+'"]').attr('data-model');
	var carVers = carVersion;
	window.location.href="/offer/auto/?carBrand="+carBrand+"&carModel="+carModel+"&carVersion="+carVers;
}

function backToBrands(){
	$('#carSelector .carSelectorHeader.brand').show();
	  $('#carSelector .carSelectorHeader.model').hide();

	  $('#carSelector .modelsList').hide();
	  $('#carSelector .brandsList').show();
}

function backToModels(){
	$('#carSelector .carSelectorHeader.model').show();
	$('#carSelector .carSelectorHeader.version').hide();

	$('#carSelector .versionsList').hide();
	  $('#carSelector .modelsList').show();

}

function filterCarBrands(input){

	$('#carSelector .brandsList .brandWrapper').hide();

	$('#carSelector .brandsList .brandWrapper').each(function(){
		if($(this).find('.brandName').html().toLowerCase().search($(input).val().toLowerCase()) >= 0) $(this).show();
	});

}


function filterCarModels(input){

	$('#carSelector .modelsList .modelWrapper').hide();

	$('#carSelector .modelsList .modelWrapper').each(function(){
		if($(this).find('.modelName').html().toLowerCase().search($(input).val().toLowerCase()) >= 0) $(this).show();
	});

}

function closeCarSelector(){
	$('#carSelector').remove();
}




function fillCommunesListTo(selectElement, communesContainer){

	var selectedWilaya = $(selectElement).val();

	var communeSelect = $(communesContainer);

	$(communeSelect).html('<option value="0">- COMMUNE -</option>')

	if(selectedWilaya != "0"){

		for (var key in wilayas[selectedWilaya]["Communes"]) {
		   if (wilayas[selectedWilaya]["Communes"].hasOwnProperty(key)) {
		      	$(communeSelect).append('<option value="'+key+'">'+wilayas[selectedWilaya]["Communes"][key]+'</option>')
		    }
		}

		var communeSelect = $(communesContainer+' option');

		communeSelect.sort(function(a, b) {
		    var at = $(a).text(), bt = $(b).text();
		    return (at > bt)?1:((at < bt)?-1:0);
		});

		$(communesContainer).html(communeSelect);
		$(communesContainer).val("0")
	}

}

function autoGoToStep2(){
	$(".error-text").remove();
	var marque=$("input[name='marque']").val();
	var modele=$("input[name='modele']").val();
	var version = $("input[name='version']").val();
	var puissancefiscale = parseInt($("select[name='puissancefiscale']").val());
	var nbplaces = parseInt($("select[name='nbplaces']").val());
	var immatriculation =$("input[name='immatvehicule']").val();
	var datecirc =$("input[name='datecirculation']").val();
	var valveinale = parseInt($("input[name='valeurveinale']").val()) || 0;
	var usage = parseInt($("select[name='usagevehicule']").val());
	var zone = parseInt($("select[name='zonevehicule']").val());
	var catpermis = parseInt($("select[name='catpermis']").val());
	var age = $('.inputContainer[data-input="lessThan25"] .option.selected').data("val");
	var permis = $('.inputContainer[data-input="newDriverLicense"] .option.selected').data("val");
	// var inflammable = $('.inputContainer[data-input="transportFlammables"] .option.selected').data("val");

	validate = true;
	if(marque.trim().length==0){
		validate = false;
		$("input[name='marque']").parent().parent().append("<span class='error-text'>Veuillez indiquer La marque du véhicule</span>");

	}

	if(modele.trim().length==0){
		validate = false;
		$("input[name='modele']").parent().parent().append("<span class='error-text'>Veuillez indiquer Le modèle du véhicule</span>");

	}

	if(version.trim().length==0){
		validate = false;
		$("input[name='version']").parent().parent().append("<span class='error-text'>Veuillez indiquer La version du véhicule</span>");

	}

	if( !Number.isInteger(puissancefiscale)){
		validate = false;
		$("select[name='puissancefiscale']").parent().parent().append("<span class='error-text'>Veuillez indiquer une puissance fiscale valide</span>");

	}else{
		if(parseInt(puissancefiscale)>50 || parseInt(puissancefiscale)<1){
			validate = false;
			$("select[name='puissancefiscale']").parent().parent().append("<span class='error-text'>Veuillez indiquer une puissance fiscale valide</span>");

		}
	}
	if( !Number.isInteger(nbplaces)){
		validate = false;
		$("select[name='nbplaces']").parent().parent().append("<span class='error-text'>Veuillez indiquer un nombre de places valide</span>");

	}else{
		if(parseInt(nbplaces)>20 || parseInt(nbplaces)<1){
			validate = false;
			$("select[name='nbplaces']").parent().parent().append("<span class='error-text'>Veuillez indiquer un nombre de places valide</span>");

		}
	}
	if(immatriculation.trim().length<3){
		validate = false;
		$("input[name='immatvehicule']").parent().parent().append("<span class='error-text'>Veuillez indiquer une immatriculation valide</span>");

	}

	if(!CheckDate("input[name='datecirculation']")){
		validate = false;
		$("input[name='datecirculation']").parent().parent().append("<span class='error-text'>Veuillez indiquer une date de circulation valide</span>");

	}

	if( !Number.isInteger(valveinale)){
		validate = false;
		$("select[name='valeurveinale']").parent().parent().append("<span class='error-text'>Veuillez indiquer une valeur veinale valide</span>");

	}else{
		if(parseInt(valveinale)<1){
			validate = false;
			$("select[name='valeurveinale']").parent().parent().append("<span class='error-text'>Veuillez indiquer une valeur veinale valide</span>");

		}
	}

	if( !Number.isInteger(usage)){
		validate = false;
		$("select[name='usagevehicule']").parent().parent().append("<span class='error-text'>Veuillez indiquer l'usage de votre véhicule</span>");

	}else{
		if(parseInt(usage)>6 || parseInt(usage)<1){
			validate = false;
			$("select[name='usagevehicule']").parent().parent().append("<span class='error-text'>Veuillez indiquer l'usage de votre véhicule</span>");

		}
	}
	if( !Number.isInteger(catpermis)){
		validate = false;
		$("select[name='catpermis']").parent().parent().append("<span class='error-text'>Veuillez indiquer la catégorie de votre permis</span>");

	}else{
		if(parseInt(catpermis)>6 || parseInt(catpermis)<1){
			validate = false;
			$("select[name='catpermis']").parent().parent().append("<span class='error-text'>Veuillez indiquer le capital à assurer</span>");

		}
	}
	if( !Number.isInteger(zone)){
		validate = false;
		$("select[name='zonevehicule']").parent().parent().append("<span class='error-text'>Veuillez indiquer la zone de circulation de votre véhicule</span>");

	}else{
		if(parseInt(zone)>2 || parseInt(zone)<1){
			validate = false;
			$("select[name='zonevehicule']").parent().parent().append("<span class='error-text'>Veuillez indiquer la zone de circulation de votre véhicule</span>");

		}
	}

	if( !Number.isInteger(age)){
		validate = false;
		$('.inputContainer[data-input="lessThan25"] .option.selected').parent().parent().append("<span class='error-text'>Veuillez indiquer si un des conducteurs du véhicule est âgé de moins de 25 ans</span>");

	}else{
		if(parseInt(age)>1 || parseInt(age)<0){
			validate = false;
			$('.inputContainer[data-input="lessThan25"] .option.selected').parent().parent().append("<span class='error-text'>Veuillez indiquer si un des conducteurs du véhicule est âgé de moins de 25 ans</span>");

		}
	}

	if( !Number.isInteger(permis)){
		validate = false;
		$('.inputContainer[data-input="newDriverLicense"] .option.selected').parent().parent().append("<span class='error-text'>Veuillez indiquer si un des conducteurs à un permis de moins d'une année</span>");

	}else{
		if(parseInt(permis)>1 || parseInt(permis)<0){
			validate = false;
			$('.inputContainer[data-input="newDriverLicense"] .option.selected').parent().parent().append("<span class='error-text'>Veuillez indiquer si un des conducteurs à un permis de moins d'une année</span>");

		}
	}

	// if( !Number.isInteger(inflammable)){
	// 	validate = false;
	// 	$('.inputContainer[data-input="transportFlammables"] .option.selected').parent().parent().append("<span class='error-text'>Veuillez indiquer si un des conducteurs à un permis de moins d'une année</span>");
	//
	// }else{
	// 	if(parseInt(inflammable)>1 || parseInt(inflammable)<0){
	// 		validate = false;
	// 		$('.inputContainer[data-input="transportFlammables"] .option.selected').parent().parent().append("<span class='error-text'>Veuillez indiquer si un des conducteurs à un permis de moins d'une année</span>");
	//
	// 	}
	// }

	if(validate){
		$('.quotationFormStep1').hide();
		$('.quotationFormStep2').show();

		$('ol.cd-multi-steps li').removeClass('current,visited');
		$('ol.cd-multi-steps li:eq(0)').addClass('visited');
		$('ol.cd-multi-steps li:eq(1)').addClass('current');
		$("#form-access-devis-auto button.pushFormButton").fadeIn();
		
		setTimeout(function(){
							$('.bottomPriceBarWrapper').removeClass('closed');
						}, 300)
						
	} else {
		
		var myContainer = $('#devis-of .sectionWrapper.quotationContainer');
	    myContainer.animate({
	        scrollTop: $('#devis-of .error-text').first().parent().offset().top - myContainer.offset().top + myContainer.scrollTop() - 16
	    });
   
		
	}
}

function autoGoToStep3(){
	//Validate
	$civDevis = $("select[name='civDevis']");
	$nomDevis = $("input[name='nomDevis']");
	$prenomDevis = $("input[name='prenomDevis']");
	$entrepriseDevis = $("input[name='corporateDevis']");
	$emailDevis = $("input[name='emailDevis']");
	$professionDevis = $("select[name='professionDevis']");
	$wDevis = $("select[name='wDevis']");
	$cDevis = $("select[name='cDevis']");
	$adresseDevis = $("input[name='adresseDevis']");
	$telDevis = $("input[name='telDevis']");


	//Remove last state
	$("#form-access-devis-auto span.error-text").remove();
	$("#form-access-devis-auto input, div#form-acces-devis-auto select").removeClass("error-border");
	//$("#form-access-devis-auto .pushFormButton").html("<i class='fa fa-spinner fa-pulse'></i> PATIENTEZ");
	//Test validation
	var validate = true;
	if (!$civDevis.val().match(/^[0-9]{1,}$/)) {
		$civDevis.parent().parent().append("<span class='error-text'>Veuillez indiquer votre status.</span>");
		$civDevis.addClass("error-border");
		validate = false;
	}
	if (!$nomDevis.val().match(/^[a-zA-Z\s]{3,}$/)) {
		$nomDevis.parent().append("<span class='error-text'>Votre nom doit contenir au moins 3 caractères.</span>");
		$nomDevis.addClass("error-border");
		validate = false;
	}
	if (!$prenomDevis.val().match(/^[a-zA-Z\s]{3,}$/)) {
		$prenomDevis.parent().append("<span class='error-text'>Votre prénom doit contenir au moins 3 caractères.</span>");
		$prenomDevis.addClass("error-border");
		validate = false;
	}
	// if (!$entrepriseDevis.val().match(/^(.)*$/)) {
	// 	$entrepriseDevis.parent().append("<span class='error-text'>Le nom de votre entreprise doit contenir au moins 2 caractères.</span>");
	// 	$entrepriseDevis.addClass("error-border");
	// 	validate = false;
	// }
	if (!$emailDevis.val().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
		$emailDevis.parent().append("<span class='error-text'>Veuillez saisir une adresse email valide</span>");
		$emailDevis.addClass("error-border");
		validate = false;
	}
	if (!$professionDevis.val().match(/^[0-9]{1,}$/)) {
		$professionDevis.parent().parent().append("<span class='error-text'>Veuillez indiquer votre profession.</span>");
		$professionDevis.addClass("error-border");
		validate = false;
	}
	if (!$wDevis.val().match(/^[0-9]{1,}$/)) {
		$wDevis.parent().parent().append("<span class='error-text'>Veuillez indiquer votre wilaya.</span>");
		$wDevis.addClass("error-border");
		validate = false;
	}
	if (!$cDevis.val().match(/^[0-9]{1,}$/)) {
		$cDevis.parent().parent().append("<span class='error-text'>Veuillez indiquer votre région.</span>");
		$cDevis.addClass("error-border");
		validate = false;
	}
	if (!$adresseDevis.val().match(/^[a-zA-Z0-9\s,'-]*$/)) {
		$adresseDevis.parent().append("<span class='error-text'>Votre adresse doit contenir au moins 3 caractères.</span>");
		$adresseDevis.addClass("error-border");
		validate = false;
	}
	if (!$telDevis.val().match(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/)) {
		$telDevis.parent().append("<span class='error-text'>Veuillez indiquer un numéro de téléphone valide.</span>");
		$telDevis.addClass("error-border");
		validate = false;
	}

	if (validate) {
		var marque=$("input[name='marque']").val();
		var modele=$("input[name='modele']").val();
		var version = $("input[name='version']").val();
		var puissancefiscale = parseInt($("select[name='puissancefiscale']").val());
		var nbplaces = parseInt($("select[name='nbplaces']").val());
		var immatriculation =$("input[name='immatvehicule']").val();
		var datecirc =$("input[name='datecirculation']").val();
		var valveinale = parseInt($("input[name='valeurveinale']").val()) || 0;
		var usage = parseInt($("select[name='usagevehicule']").val());
		var zone = parseInt($("select[name='zonevehicule']").val());
		var catpermis = parseInt($("select[name='catpermis']").val());
		var age = $('.inputContainer[data-input="lessThan25"] .option.selected').data("val");
		var permis = $('.inputContainer[data-input="newDriverLicense"] .option.selected').data("val");
		var inflammable = $('.inputContainer[data-input="transportFlammables"] .option.selected').data("val");
		$.ajax({
			dataType: "text",
			method: "POST",
			url: base_url+"ajax.genDevDataSaveAuto",
			data: {
				civDevis: $civDevis.val(),
				nomDevis: $nomDevis.val(),
				prenomDevis: $prenomDevis.val(),
				entrepriseDevis: $entrepriseDevis.val(),
				emailDevis: $emailDevis.val(),
				professionDevis: $professionDevis.val(),
				wDevis: $wDevis.val(),
				cDevis: $cDevis.val(),
				adresseDevis: $adresseDevis.val(),
				telDevis: $telDevis.val(),
			  marque:marque,
				modele:modele,
				version:version,
				puissancefiscale:puissancefiscale,
				nbplaces:nbplaces,
				immatriculation:immatriculation,
				datecirc:datecirc,
				valveinale:valveinale,
				usage:usage,
				zone:zone,
				age:age,
				permis:permis,
				catpermis:catpermis,
				inflammable:inflammable,
				autotoken: $("input[name='autotoken']").val()
			},
			success: function(data) {
				var result = JSON.parse(data);
				var errorplus = "";
				if (result.status == "error") {
					var errors = result.errors;
					errors.forEach(function(element) {
						if (element.type == "second") {
							if (element.select == true) {
								$el = $("select[name='" + element.name + "']");
							} else {
								$el = $("input[name='" + element.name + "']");
							}
							$el.parent().append("<span class='error-text'>" + element.message + "</span>");
							$el.addClass("error-border");
						} else if (element.type == "first") {
							errorplus += element.message + "<br>";
						}
					});
					if (errorplus != "") {
						$.notify(errorplus);
					}
				} else if (result.status == "success") {
					var refdevis= result.ref_devis;
					$("input[name='refdevis']").val(refdevis);
					$('.quotationFormStep2').hide();
					$('.quotationFormStep1').hide();
					$('.quotationFormStep3').show();

					scrollToQuotation();
					selectAutoPack(5);
					
					setTimeout(function(){
						$('.bottomPriceBarWrapper').removeClass('closed');
					}, 300);
						
						
				} else if (result.status == 504) {
					$.notify(result.message);
				} else {
					$.notify("Une érreur est survenue, veuillez recharger la page !");
				}
			},
			error: function(e) {
				$.notify("Une érreur est survenue, veuillez recharger la page ou contacter un administrateur");
			}
		});
	}



}




function scrollToQuotation(){
	$('html, body').animate({
        scrollTop: $(".scrolling").offset().top - 20
    }, 300);

}



function selectAutoPack(selectedPack){
	var datecirc =$("input[name='datecirculation']").val();
	var diffdate = Math.floor(moment(new Date()).diff(moment(datecirc,"DD/MM/YYYY"),'years',true));
	if(diffdate>10 && (selectedPack == 5 || selectedPack == 6 || selectedPack == 7)){
		$('.quotationForm.auto .quotationFormStep3 .packSelector .selectItem[data-pack="5"],.quotationForm.auto .quotationFormStep3 .packSelector .selectItem[data-pack="6"],.quotationForm.auto .quotationFormStep3 .packSelector .selectItem[data-pack="7"]').addClass('disabled');
		$.notify("Vous ne pouvez pas souscrire au pack Prémium, Silver, Gold. Votre véhicule est en circulation depuis plus de 10 ans");
		selectAutoPack(4);
		$('.quotationForm.auto .quotationFormStep3 .packSelector').find('.selected').removeClass('selected');
		$('.quotationForm.auto .quotationFormStep3 .packSelector [data-pack="4"]').addClass('selected');
		return false;

	}else{
		$('.quotationForm.auto .quotationFormStep3 .packSelector .selectItem').removeClass('selected');
		$('.quotationForm.auto .quotationFormStep3 .packSelector').find('.selected').removeClass('selected');
		$('.quotationForm.auto .quotationFormStep3 .packSelector [data-pack="'+selectedPack+'"]').addClass('selected');
		updateAutoGaranties();
	}

}

function updateAutoGaranties(){
	var pack = $('.quotationForm.auto .quotationFormStep3 .packSelector').find('.selected').attr('data-pack');
	var garantiesSelector = $('.quotationForm.auto .quotationFormStep3 .garantiesSelector');


	$(garantiesSelector).find('[data-id="10"], [data-id="11"], [data-id="12"], [data-id="13"]').hide();
	$(garantiesSelector).find('.selectionGarantie').html('<div class="included"></div>');


	if(pack == "1"){
		$(garantiesSelector).find('[data-id="10"]').show();
		$(garantiesSelector).find('[data-id="4"],[data-id="5"],[data-id="6"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
		$(garantiesSelector).find('[data-id="7"],[data-id="9"]').find('.selectionGarantie').html('<div class="unavailable"></div>');
	}
	if(pack == "2"){
		$(garantiesSelector).find('[data-id="11"]').show();
		$(garantiesSelector).find('[data-id="4"],[data-id="5"],[data-id="6"],[data-id="7"],[data-id="9"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
	}
	if(pack == "3"){
		$(garantiesSelector).find('[data-id="12"]').show();
		$(garantiesSelector).find('[data-id="5"],[data-id="7"],[data-id="9"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
		$(garantiesSelector).find('[data-id="6"]').find('.selectionGarantie').html('<div class="unavailable"></div>');
	}
	if(pack == "4"){
		$(garantiesSelector).find('[data-id="12"]').show();
		$(garantiesSelector).find('[data-id="5"],[data-id="7"],[data-id="9"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
	}
	if(pack == "5"){
		$(garantiesSelector).find('[data-id="13"]').show();
		$(garantiesSelector).find('[data-id="5"],[data-id="7"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
		$(garantiesSelector).find('[data-id="9"]').find('.selectionGarantie').html('<div class="unavailable"></div>');
	}
	if(pack == "6"){
		$(garantiesSelector).find('[data-id="13"]').show();
		$(garantiesSelector).find('[data-id="5"],[data-id="9"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
	}
	if(pack == "7"){
		$(garantiesSelector).find('[data-id="13"]').show();
		$(garantiesSelector).find('[data-id="5"]').find('.selectionGarantie').html('<div class="optional" onclick="toggleGarantie(this)"></div>');
	}


	calcAutoGaranties();
}

function toggleGarantie(element){

	$(element).toggleClass('checked');
	calcAutoGaranties();
}




function calcAutoGaranties(){

	var selectedPack = $('.quotationForm.auto .quotationFormStep3 .packSelector .selected').attr('data-pack');
	var totalPrimeRemise = 0;
	var totalPrimeNoRemise = 0;

	var RC;
	var RCBASE;
	var RCTable;
	var PTTable;
	$.ajax({
		method:"POST",
		url:"/ajax.getTableRcAuto",
		async:false,
		data:{},
		success:function(data){
			var response = JSON.parse(data);
			RCTable = response.RC;
		},error:function(e){
			alert("Une érreur est survenue");
		}
	});
	$.ajax({
		method:"POST",
		url:"/ajax.getTablePT",
		async:false,
		data:{},
		success:function(data){
			var response = JSON.parse(data);
			PTTable = response.PT;
		},error:function(e){
			alert("Une érreur est survenue");
		}
	});
	var valeurVeinale = parseInt($('#autoQuotation [data-input="carValue"] input').val().replace(' ',''));
	var horsePowerNumeric = parseInt($('#autoQuotation [data-input="horsePower"] select').val());

	var horsePower = horsePowerNumeric;
	//
	// if(horsePowerNumeric <= 4) horsePower = '0-4';
	// else if(horsePowerNumeric <= 6) horsePower = '5-6';
	// else if(horsePowerNumeric <= 10) horsePower = '7-10';
	// else if(horsePowerNumeric <= 14) horsePower = '11-14';
	// else if(horsePowerNumeric <= 23) horsePower = '15-23';
	// else if(horsePowerNumeric <= 50) horsePower = '24-50';

	var activity = parseInt($('#autoQuotation [data-input="usage"] select').val());
	// var wilaya = $('#autoQuotation .quotationFormStep2 [name="wilaya"]').val();

	var zone ="nord" ;
	if($("select[name='zonevehicule']").val()=="2"){
		zone="sud";
	}

	// if($.inArray(wilaya, ['01','03','07','08','11','30','32','33','37','39','45','47'])) zone = 'sud';


	var jeuneConducteur=($('#autoQuotation [data-input="lessThan25"] .selected').attr('data-val') == '1') ? true : false;
	var nouveauPermis   = ($('#autoQuotation [data-input="newDriverLicense"] .selected').attr('data-val') == '1') ? true : false;
	// var matiereInflammable = ($('#autoQuotation [data-input="transportFlammables"] .selected').attr('data-val') == '1') ? true : false;

	var pack = $('.quotationForm.auto .quotationFormStep3 .packSelector').find('.selected').attr('data-pack');
	var garantiesSelector = $('.quotationForm.auto .quotationFormStep3 .garantiesSelector');
	var defrec=0,assistauto=0,BDG=0,BDGTP=0,viv=0,rachatVetuste=0,pea=1000,topRep=0,dommageCollisionLimitee=0,dommageCollisionVV=0,DASCLimitee=0,DASC=0,PTRANSP=0;
	$(garantiesSelector).find('.selectItem:visible').each(function(){

		if($(this).find('.included, .optional.checked').length > 0){

			if($(this).attr('data-id') == 1){

				RCTable.forEach(function(element){
					if(horsePower>=parseInt(element.min) && horsePower<=parseInt(element.max)  &&  element.zone == zone && parseInt(element.usagevehicule) == activity) {
						RC = parseFloat(element.prix);
						RCBASE = parseFloat(element.prix);
						console.log("RC TABLE RESULT : "+RCBASE);
					}
				});

				var majoration = 0;

				if(nouveauPermis) majoration += 0.25;console.log("Majoration permis appliquée");
				if(jeuneConducteur && !nouveauPermis) majoration += 0.15;console.log("Majoration jeune conducteur appliquée");
				// if(matiereInflammable) majoration += 0.25;console.log("Majoration Inflammables appliquée");


				RC = RCBASE * (1+majoration);
				totalPrimeNoRemise +=RC;

				$(this).find('.price').attr('data-price', RC ).html(RC.formatMoney(2, ',', ' '));


			} else if($(this).attr('data-id') == 2){

				defrec = 600; //Toujrs 600 Car pas de possiilité de faire un choix entre tourstique et utilitaire
				totalPrimeRemise +=defrec;
				$(this).find('.price').attr('data-price', 600 ).html((defrec).formatMoney(2, ',', ' '));

			} else if($(this).attr('data-id') == 3){

				assistauto=1150;
				$(this).find('.price').attr('data-price', 1150 ).html((assistauto).formatMoney(2, ',', ' '));
				totalPrimeNoRemise +=assistauto;
			} else if($(this).attr('data-id') == 4){
				BDG = 0.0017*valeurVeinale; //TPM ou TPC
				if(BDG < 1500) BDG = 1500;

				if(isInArray(pack, ['5', '6', '7'])){
					BDG = 0;
					$(this).find('.price').attr('data-price', BDG).html('Offert');
				} else {
					$(this).find('.price').attr('data-price', BDG).html(BDG.formatMoney(2, ',', ' '));
				}
				totalPrimeRemise +=BDG;
			} else if($(this).attr('data-id') == 5){
				BDGTP=2000;
				if(isInArray(pack, ['5', '6', '7'])){
					BDGTP=0;
					$(this).find('.price').attr('data-price', BDGTP).html('Offert');
				} else {
					$(this).find('.price').attr('data-price', 2000).html((2000).formatMoney(2, ',', ' '));
				}
				totalPrimeRemise +=BDGTP;
			} else if($(this).attr('data-id') == 6){

				if(horsePowerNumeric > 11){
					viv = 0.016 * valeurVeinale;
				} else{
					viv = 0.01 * valeurVeinale;
				}

				/* TODO */
				$(this).find('.price').attr('data-price', viv).html(viv.formatMoney(2, ',', ' '));
				totalPrimeRemise +=viv;


			} else if($(this).attr('data-id') == 7){
				rachatVetuste = 0.0037 * valeurVeinale;
				if(rachatVetuste < 2300) rachatVetuste = 2300;
				$(this).find('.price').attr('data-price', rachatVetuste).html(rachatVetuste.formatMoney(2, ',', ' '));
				totalPrimeNoRemise +=rachatVetuste;
			} else if($(this).attr('data-id') == 8){

				if(activity == 1) pea = 1000;
				if(activity == 2) pea = 1200;
				if(activity == 3) pea = 1000;
				if(activity == 4) pea = 1500;
				if(activity == 5) pea = 1300;
				totalPrimeNoRemise +=pea;
				$(this).find('.price').attr('data-price', pea).html(pea.formatMoney(2, ',', ' '));

			} else if($(this).attr('data-id') == 9){
				topRep = 0.006 * valeurVeinale;
				if(topRep < 7000) topRep = 7000;
				$(this).find('.price').attr('data-price', topRep).html(topRep.formatMoney(2, ',', ' '));
				totalPrimeNoRemise +=topRep;
			} else if($(this).attr('data-id') == 10){

				dommageCollisionLimitee = 0;
				var DCType = $(this).find('select').val();
				if(DCType == 3){ dommageCollisionLimitee = RCBASE * 3.9; }
				if(DCType == 4){ dommageCollisionLimitee = RCBASE * 4.5; }
				if(DCType == 5){ dommageCollisionLimitee = RCBASE * 4.8; }

				$(this).find('.price').attr('data-price', dommageCollisionLimitee).html(dommageCollisionLimitee.formatMoney(2, ',', ' '));
				totalPrimeRemise +=dommageCollisionLimitee;
			} else if($(this).attr('data-id') == 11){

				dommageCollisionVV = valeurVeinale * 0.025;

				$(this).find('.price').attr('data-price', dommageCollisionVV).html(dommageCollisionVV.formatMoney(2, ',', ' '));

				totalPrimeRemise +=dommageCollisionVV;

			} else if($(this).attr('data-id') == 12){

				DASCLimitee = 0;
				var DASCType = $(this).find('select').val();
				if(DASCType == 2){ DASCLimitee = 28000; }
				if(DASCType == 3){ DASCLimitee = 31000; }
				if(DASCType == 5){ DASCLimitee = 35000; }

				$(this).find('.price').attr('data-price', DASCLimitee).html(DASCLimitee.formatMoney(2, ',', ' '));
				totalPrimeRemise +=DASCLimitee;
			} else if($(this).attr('data-id') == 13){

				DASC = valeurVeinale * 0.05;

				$(this).find('.price').attr('data-price', DASC).html(DASC.formatMoney(2, ',', ' '));

				totalPrimeRemise +=DASC;

			} else if($(this).attr('data-id') == 14){
				// MANQUE TABLEAU PERSONNES TRANSPORTEES
				PTRANSP = 0;
				var capdeces=0;
				var tauxdc=0;
				var capipp=0;
				var tauxipp=0;
				var capfm=0;
				var montantfm=0;
				var nbplaces = parseInt($("select[name='nbplaces']").val());
				var catpermis = parseInt($("select[name='catpermis']").val());
				PTTable.forEach(function(element){
					if(element.cat_permis == catpermis){
						capdeces=parseInt(element.capital_deces);
						tauxdc=parseFloat(element.taux_deces);
						capipp=parseInt(element.capital_ipp);
						tauxipp=parseFloat(element.taux_ipp);
						capfm=parseInt(element.capital_fm);
						montantfm=parseFloat(element.montant_fm);
					}
				});

				var primeparplace = (capdeces*(tauxdc)/100)+(capipp*(tauxipp)/100)+montantfm;
				PTRANSP = (primeparplace*parseInt(nbplaces))+50;
				$(this).find('.price').attr('data-price', 0).html(PTRANSP.formatMoney(2, ',', ' '));
				totalPrimeRemise +=PTRANSP;

			}

		} else if($(this).length) {
			$(this).find('.price').attr('data-price', 0)//.html('-');
		}



	});
	// if(isInArray($(this).attr('data-id'), ['1', '3', '7', '8', '9'] ))
		totalPrimeNoRemise = parseFloat(RC+assistauto+rachatVetuste+pea+topRep);
	// else
		totalPrimeRemise = parseFloat(defrec+BDG+BDGTP+viv+dommageCollisionLimitee+dommageCollisionVV+DASCLimitee+DASC+PTRANSP);

	console.log('remise '+ totalPrimeRemise);
	console.log('no remise '+ totalPrimeNoRemise);



	$('.quotationForm.auto .quotationFormStep3 .rightPanel .primeTotale span').html((totalPrimeNoRemise +  totalPrimeRemise ).formatMoney(2, ',', ' '));

	if(selectedPack == "1") totalPrimeRemise = totalPrimeRemise *0.9;
	else if(selectedPack == "2") totalPrimeRemise = totalPrimeRemise *0.8;
	else if(selectedPack == "3") totalPrimeRemise = totalPrimeRemise *0.75;
	else if(selectedPack == "4") totalPrimeRemise = totalPrimeRemise *0.7;
	else if(selectedPack == "5") totalPrimeRemise = totalPrimeRemise *0.6;
	else if(selectedPack == "6") totalPrimeRemise = totalPrimeRemise *0.55;
	else if(selectedPack == "7") totalPrimeRemise = totalPrimeRemise *0.45;

	$('.quotationForm.auto .quotationFormStep3 .rightPanel .primeTotaleAvecRemise span').html((totalPrimeNoRemise +  totalPrimeRemise).formatMoney(2, ',', ' '));



	//APPLICATION DES Timbres
	var globalHT=totalPrimeRemise+totalPrimeNoRemise;
	var timbregrasdue=0;
	if(parseInt(horsePower)<11){
		if(globalHT<=2500){
			console.log("TAXE : 300DA");
			timbregrasdue+=300;
		}
		if(globalHT>2500 && globalHT<=10000){
			console.log("TAXE 5% : "+globalHT*0.05);
			timbregradue=300+(globalHT-2500)*0.05;
		}
		if(globalHT>10000 && globalHT<=50000){
			console.log("TAXE 3% : "+globalHT*0.03);
			timbregradue=300+(10000-2500)*0.05+(globalHT-10000)*0.03;
		}
		if(globalHT>50000){
			console.log("TAXE 2% : "+globalHT*0.02);
			timbregradue=300+(10000-2500)*0.05+(50000-10000)*0.03+(globalHT-50000)*0.02;
		}
	}else{
		if(globalHT<=2500){
			console.log("TAXE : 600DA");
			timbregrasdue+=600;
		}
		if(globalHT>2500 && globalHT<=10000){
			console.log("TAXE 10% : "+globalHT*0.1);
			timbregradue=600+(globalHT-2500)*0.1;
		}
		if(globalHT>10000 && globalHT<=50000){
			console.log("TAXE 6% : "+globalHT*0.06);
			timbregradue=600+(10000-2500)*0.1+(globalHT-10000)*0.06;
		}
		if(totalPrimeNoRemise>50000){
			console.log("TAXE 4% : "+globalHT*0.04);
			timbregradue=600+(10000-2500)*0.1+(50000-10000)*0.06+(globalHT-50000)*0.04;
		}
	}
	var accessoireTimbre = 240;
	var fga=((200+RCBASE)*0.03);
	var tva = (globalHT)*0.19;
	var primetotale=globalHT+timbregradue+accessoireTimbre+fga+tva;

	$('.quotationForm.auto .quotationFormStep3 .rightPanel .primeTotaleAvecRemiseTTC span').html(primetotale.formatMoney(2, ',', ' '));
}


function vehicleNotFound(brand, model){
	brand = brand || 0;
	model = model || 0;


	if(brand){
		$('#autoQuotation [data-input="brand"] input').val($('#carSelector .brandsList .brandBlock[data-brand='+brand+'] .brandName').html()).prop('disabled', true);
		$('#autoQuotation [data-input="brand"]').removeClass('current').addClass('correct');


		if(model){

			$('#autoQuotation [data-input="model"] input').val($('#carSelector .modelsList .modelBlock[data-model='+model+'] .modelName').html()).prop('disabled', true);
			$('#autoQuotation [data-input="model"]').show().addClass('correct');

			$('#autoQuotation [data-input="version"]').show().addClass('current');
			$('#autoQuotation [data-input="version"] input').focus();

			$('.quotationForm.auto .quotationFormStep1 .carResume').show();

			$('.quotationForm.auto .quotationFormStep1 .carResume .carImage').css('background-image', $('#carSelector .versionsList .modelImage').css('background-image'));

			$('.quotationForm.auto .quotationFormStep1 .carResume .modelName').html( $('#carSelector .versionsList .modelName').html() );

		} else {
			$('#autoQuotation [data-input="model"]').show().addClass('current');
			$('#autoQuotation [data-input="model"] input').focus();
		}
	}


	$('.quotationForm.auto .quotationFormStep1 .noCarSelected').hide();

	$('.quotationForm.auto .quotationFormStep1 .inputsContainer').show();

	$('#carSelector').hide();

	scrollToQuotation();

}





/* New quotation JS */

function toggleOption(element){
	$(element).parent().find('.selected').removeClass('selected');
	if($(element).parent().parent().hasClass("appart-container-choices")){
		$(".appart-container-choices .option.selected").removeClass("selected");
	}
	$(element).addClass('selected');
}

function onEnterPress(element, event, callback){

    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {
      callback(element);
      return false;
    }
}


function checkInput(element){

	var inputIsCorrect = false;

	if(typeof $(element).attr('data-check') !== typeof undefined && $(element).attr('data-check') !== false){

		switch ($(element).attr('data-check')){

			case 'brand' :

				if($(element).find('input').val().length > 3) inputIsCorrect = true;

				break;

		}



	} else {

		if($(element).find('select').length > 0){

			if($(element).find('select').val() != "") inputIsCorrect = true;

		} else if($(element).find('input').length > 0){

			if($(element).find('input').val().length > 0) inputIsCorrect = true;

		} else if($(element).find('.optionSelector')){

			if($(element).find('.optionSelector .selected').length > 0) inputIsCorrect = true;

		}

	}


	if(inputIsCorrect)
		$(element).addClass('correct');
	else
		$(element).removeClass('correct');


	return inputIsCorrect;
}

function checkForm(currentElement){


	var inputContainer = $(currentElement).closest('.inputContainer')

	console.log(inputContainer);


	var alreadyCorrect = $(inputContainer).hasClass('correct');

	if(!checkInput(inputContainer)){
		$(inputContainer).nextAll('.inputContainer').hide();
	} else{
		$(inputContainer).closest('.inputsContainer').find('.inputContainer').removeClass('current')
		$(inputContainer).nextAll('.inputContainer').hide();


		if($(inputContainer).attr('data-input') == "goodsValue"){
			var homeValue = parseInt($(inputContainer).find('input').val().split(' ').join(''));

			if(homeValue <= 2000000){
				$('#mhQuotation [data-input="knowHomeValue"]').addClass('disabled');
				$('#mhQuotation [data-input="homeValue"]').addClass('disabled');
				$('#mhQuotation [data-input="homeArea"]').addClass('disabled');
				$('#mhQuotation [data-input="glacesValue"]').addClass('disabled');
			} else{
				$('#mhQuotation [data-input="knowHomeValue"]').removeClass('disabled');
				$('#mhQuotation [data-input="homeValue"]').removeClass('disabled');
				$('#mhQuotation [data-input="homeArea"]').removeClass('disabled');
				$('#mhQuotation [data-input="glacesValue"]').removeClass('disabled');
			}
		} else if($(inputContainer).attr('data-input') == "knowHomeValue"){
			var knowHomeValue = ($(inputContainer).find('.option.selected').attr('data-val') == '1') ? true : false ;

			if(knowHomeValue){
				$('#mhQuotation [data-input="homeArea"]').addClass('disabled');
				$('#mhQuotation [data-input="homeValue"]').removeClass('disabled');
			} else {
				$('#mhQuotation [data-input="homeValue"]').addClass('disabled');
				$('#mhQuotation [data-input="homeArea"]').removeClass('disabled');
			}
		} else if($(inputContainer).attr('data-input') == "estateNature"){
			var estateNature = ($(inputContainer).find('.option.selected').attr('data-val') == '1') ? true : false ;

			if(estateNature == "1"){
				$('#catnatQuotation [data-input="estateGoodsValue"]').addClass('disabled');
				$('#catnatQuotation [data-input="estateValue"]').addClass('disabled');

				$('#catnatQuotation [data-input="estateType"]').removeClass('disabled');
				$('#catnatQuotation [data-input="estateArea"]').removeClass('disabled');


			} else {
				$('#catnatQuotation [data-input="estateGoodsValue"]').removeClass('disabled');
				$('#catnatQuotation [data-input="estateValue"]').removeClass('disabled');

				$('#catnatQuotation [data-input="estateType"]').addClass('disabled');
				$('#catnatQuotation [data-input="estateArea"]').addClass('disabled');

			}

		}

		if($(inputContainer).nextAll('.inputContainer:not(.disabled)').first().length > 0){

			$(inputContainer).closest('.inputsContainer').find('.pushFormButton').hide();


			var nextInputContainer = $(inputContainer).nextAll('.inputContainer:not(.disabled)').first();

			$(nextInputContainer).removeClass('correct').addClass('current').show();

			if(!alreadyCorrect){
				$(inputContainer).find('.error-text').remove();
				scrollToBottom();
			}


		    $(nextInputContainer).find('select,input').val('').focus();
			$(nextInputContainer).find('.option').removeClass('selected').focus();
		} else{

			$(inputContainer).closest('.inputsContainer').find('.pushFormButton').show();
		}

	}

	//console.log(form);
}










Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return (s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "")) + ' DA' ;
 };

 function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
 $(function(){
	 $(".online").on("click",function(){
		 window.location.replace($(this).data("src"));
	 });

	 // $(".menuItem.menu-1").on("click",function(){
		//  if($(".dropMenu.m-1").hasClass("shown")){
		// 	 $(".dropMenu.m-1").removeClass("shown");
		// 	 $(".dropMenu.m-1").addClass("hidden");
		//  }else{
		// 	 $(".dropMenu.m-1").removeClass("hidden");
		// 	 $(".dropMenu.m-1").addClass("shown");
		// 	 $(".dropMenu.m-2").removeClass("shown");
		// 	 $(".dropMenu.m-2").addClass("hidden");
		//  }
	 // });
	 // $("dropMenu.m-1").mouseleave(function(){
		//  $(this).removeClass("shown");
		//  $(this).addClass("hidden");
	 // });
	 // $(".menuItem.menu-2").on("click",function(){
		//  if($(".dropMenu.m-2").hasClass("shown")){
		// 	 $(".dropMenu.m-2").removeClass("shown");
		// 	 $(".dropMenu.m-2").addClass("hidden");
		//  }else{
		// 	 $(".dropMenu.m-2").removeClass("hidden");
		// 	 $(".dropMenu.m-2").addClass("shown");
		// 	 $(".dropMenu.m-1").removeClass("shown");
		// 	 $(".dropMenu.m-1").addClass("hidden");
		//  }
	 // });
	 // $("dropMenu.m-2").mouseleave(function(){
		//  $(this).removeClass("shown");
		//  $(this).addClass("hidden");
	 // });
 });

function getsubsecteur(element){
	var d = parseInt($(element).data("val"));
	$elements="<option value=''>Selection votre branche d'activité</option>";
	$("#branche-secteur").html($elements);
	$.ajax({
			url:"./ajax.getActiviteByCat/?id="+d,
			type:"GET",
			dataType:"text",
			success:function(res){
				var secteurs = JSON.parse(res);
				if(secteurs.status==true){
					$.each(secteurs.data,function(index,value){
						$elements += "<option value='"+index+"' data-inc='"+value.inc+"' data-rc='"+value.rc+"' data-vol='"+value.vol+"'>"+value.nom+"</option>";
					});
					$("#branche-secteur").html($elements);
				}
			},
			error:function(){
				;
			}
	});

}
//MOBILE MENU
(function($) {

  $.fn.menumaker = function(options) {

      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) {
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

$(document).ready(function(){

	$("#cssmenu").menumaker({
	   title: "Menu",
	   format: "multitoggle"
	});
	$(".tab-element").on("click",function(){
		$(".tab-element").removeClass("current-tab");
		$(this).addClass("current-tab");
		var name=$(this).data("tabtitle");
		$('html, body').animate({
	        scrollTop: $("#"+name).offset().top - 180
	   }, 300);
	});
	$("#button-devis-scroll").on("click",function(){
		$('html, body').animate({
	        scrollTop: $("#devis-of").offset().top - 180
	   }, 300);
		 return false;
	});
	$(".quotationFormStep3 .subscribe-auto").on("click",function(){
		$button=$(this);
		$button.html("<i class='fa fa-spinner fa-cog'></i> Veuillez patienter !");

		var active_bdg=false;
		var active_bdgp=false;
		var active_viv= false;
		var active_rachatVetuste=false;
		var active_pj=false;
		var active_topRep=false;
		var active_ptransp=false;
		var limitedc= $("select[name='valdc']").val() || 0;
		var limitedasc=$("select[name='valdasc']").val() || 0;
		var packchoice = $(".packSelector .selectItem.selected").data("pack");

		var marque=$("input[name='marque']").val();
		var modele=$("input[name='modele']").val();
		var version = $("input[name='version']").val();
		var puissancefiscale = parseInt($("select[name='puissancefiscale']").val());
		var nbplaces = parseInt($("select[name='nbplaces']").val());
		var immatriculation =$("input[name='immatvehicule']").val();
		var datecirc =$("input[name='datecirculation']").val();
		var valveinale = parseInt($("input[name='valeurveinale']").val()) || 0;
		var usage = parseInt($("select[name='usagevehicule']").val());
		var zone = parseInt($("select[name='zonevehicule']").val());
		var catpermis = parseInt($("select[name='catpermis']").val());
		var age = $('.inputContainer[data-input="lessThan25"] .option.selected').data("val");
		var permis = $('.inputContainer[data-input="newDriverLicense"] .option.selected').data("val");
		var inflammable = $('.inputContainer[data-input="transportFlammables"] .option.selected').data("val");

		var periode = parseInt($("select[name='dureeSelector']").val());

		if($(".selectItem[data-id='4'] .optional").hasClass("checked")){
			active_bdg=true;
		}
		if($(".selectItem[data-id='5'] .optional").hasClass("checked")){
			active_bdgp=true;
		}
		if($(".selectItem[data-id='6'] .optional").hasClass("checked")){
			active_viv=true;
		}
		if($(".selectItem[data-id='7'] .optional").hasClass("checked")){
			active_rachatVetuste=true;
		}
		if($(".selectItem[data-id='8'] .optional").hasClass("checked")){
			active_pj=true;
		}
		if($(".selectItem[data-id='9'] .optional").hasClass("checked")){
			active_topRep=true;
		}
		if($(".selectItem[data-id='11'] .optional").hasClass("checked")){
			active_dc=true;
		}

		var ref=$("input[name='refdevis']").val();
		$.ajax({
			method:"POST",
			async:false,
			url:"/ajax.completeDataDevisAuto",
			dataType:"text",
			data:{
				active_bdg:active_bdg,
				active_bdgp:active_bdgp,
				active_viv:active_viv,
				active_rachatVetuste:active_rachatVetuste,
				active_pj:active_pj,
				active_topRep:active_topRep,
				active_ptransp:active_ptransp,
				limitedc:limitedc,
				limitedasc:limitedasc,
				packchoice:packchoice,
				periode:periode,
				ref:ref
			},success:function(data){
				$button.html("SOUSCRIRE EN LIGNE");
				var response=JSON.parse(data);
				if(response.status==true){
					$("#validation-devis-errors").hide();
					$("#validation-devis-errors").empty();
					window.location.href="/souscription-auto/"+response.token_devis;
				}else if(response.status==false){
					var errorstext="<ul>";
					response.message.forEach(function(element){
						errorstext+="<li>"+element.message+"</li>";
					});
					errorstext+="</ul>";
					$("#validation-devis-errors").show();
					$("#validation-devis-errors").html(errorstext);
					$('html, body').animate({
								scrollTop: $("#validation-devis-errors").offset().top - 180
					}, 300);
				}else if(response.status==504){
					$.notify("Une érreur est survenue : "+response.message);
				}else{
					$.notify("Une érreur est survenue, veuillez recharger la page ou contacter un administrateur");
				}
			},error:function(e){
				$button.html("SOUSCRIRE EN LIGNE");
				$.notify("Une érreur est survenue, veuillez recharger la page ou contacter un administrateur");
			}
		});
	});


	$(".insuranceType").on("click",function(){
		$(".insuranceType").removeClass("selected");
		$(this).addClass("selected");
		if($(this).attr("id")=="insauto"){
			$(".choiceSelectorIns").removeClass("selected");
			$(".choiceSelectorIns[data-typeins='auto']").addClass("selected");

			$("#dvsImgs").children(".selected").addClass("hidden");
			$("#dvsImgs").children(".selected").removeClass("selected");
			$("#dvsImgs").children("img:eq(0)").removeClass("hidden");
			$("#dvsImgs").children("img:eq(0)").addClass("selected");
		}
		if($(this).attr("id")=="insmh"){
			$(".choiceSelectorIns").removeClass("selected");
			$(".choiceSelectorIns[data-typeins='mh']").addClass("selected");

			$("#dvsImgs").children(".selected").addClass("hidden");
			$("#dvsImgs").children(".selected").removeClass("selected");
			$("#dvsImgs").children("img:eq(1)").removeClass("hidden");
			$("#dvsImgs").children("img:eq(1)").addClass("selected");

		}
		if($(this).attr("id")=="inscatnat"){
			$(".choiceSelectorIns").removeClass("selected");
			$(".choiceSelectorIns[data-typeins='catnat']").addClass("selected");

			$("#dvsImgs").children(".selected").addClass("hidden");
			$("#dvsImgs").children(".selected").removeClass("selected");
			$("#dvsImgs").children("img:eq(2)").removeClass("hidden");
			$("#dvsImgs").children("img:eq(2)").addClass("selected");
		}
		if($(this).attr("id")=="insmp"){
			$(".choiceSelectorIns").removeClass("selected");
			$(".choiceSelectorIns[data-typeins='mp']").addClass("selected");

			$("#dvsImgs").children(".selected").addClass("hidden");
			$("#dvsImgs").children(".selected").removeClass("selected");
			$("#dvsImgs").children("img:eq(3)").removeClass("hidden");
			$("#dvsImgs").children("img:eq(3)").addClass("selected");
		}
	});
});
function CheckDate(elm)
{
    var date  = $(elm).val();

    var year = date.split('-')[0];

    if(parseInt(year)>=1900)
    {
      return true

    }
    else
    {
        return false;
    }
}
function goToMp(val){
	window.location.href="http://pro.saa.dz/offer/multirisque-professionnelle/?secteur="+val;
}
function goToMh(tp){
	window.location.href="http://www.saa.dz/offer/multirisque-habitation/?tn="+tp;
}
