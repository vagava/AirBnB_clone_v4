
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
