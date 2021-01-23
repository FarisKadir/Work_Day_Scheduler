/*Psuedocode
When the page loads
    Display the current date at the top - Done
    Display timeslots for each hour of the day
        Each timeslot should contain:
            A time, ex: 9 am
                Assign a color to the time slot boxes:
                    The current time's timeslot should have a red background.
                    Any timeslots that are in the past should have a gray background.
                        Would need to capture the current time.
                    Any timeslots that are in the future should have a green background.
                The boxes only have borders on the top, bottom, and left.
                
            An input box to type in events.
            A save button.
                When the save button is clicked it should save the entry from the input box to local storage.
*/

//start of document ready
$(document).ready(function()    {

    //Get today's date
    var today = moment().format("dddd, MMMM Do, YYYY");

    //Set today's date in the header
    $("#currentDay").text(today);



    

});
//End of document ready
