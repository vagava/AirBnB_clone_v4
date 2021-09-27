$(document).ready(() => {
    let listAmenities= {}
    $("input:checkbox").click(function() {
        if ($(this).is(':checked')) {
            listAmenities[$(this).attr('data-name')] = ($(this).attr('data-id'));
        }else{
            delete listAmenities[$(this).attr('data-name')]
        }
        $('.amenities h4').text(Object.keys(listAmenities))
    })
})
$.getJSON("http://0.0.0.0:5001/api/v1/status/", function (json){
   if (json.status == "OK") {
        $("div#api_status").addClass("available")
   }else{
        $("div#api_status").removeClass("available")
   }
})
