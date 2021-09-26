$('#amenity_filtrer').change(function() {
    var amenity_info = {}
    if (($(this).prop("checked", true))){
        amenity_info[this.data-id] = this.data-name;
    }
    if (($(this).prop("checked", false))){
        delete  amenity_info [this.data-id];
    }
    amanity_name = Object.values(amenity_info)
    $('.amenities h4').text(amanity_name)
});