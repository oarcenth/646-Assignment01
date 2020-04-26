
// STEP 16
// $(function() {
//     $('#btn1').click(function () {
//         window.alert("You clicked Button 1 !");
//     })

// }); 

// STEP 17 

$(function() {
    $('#btn2').bind("click", function(){
        window.alert("You clicked Button 2 and the .bind method was used")
    });
});

//STEP 18

$(function() {
    $('#btn3').on("click", function(){
        window.alert("You clicked Button 3 and the .on method was used")
    });
});

// STEP 19 

$(function(){
    $('.step19').on("click", function(){
        window.alert("You clicked on the button for Step 19!");
    });
});

//STEP 20 

// $(function(){
//     $('#step20').css({'width': '400px', 'height': '400px', 'backgroundColor': 'gray', 'color': 'white'});
//     $("#step20").on({
//         mouseenter: function(){
//             window.console.log("The cursor has entered the DIV");
//         },
//         mouseleave: function() {
//             window.console.log("The cursor has left the DIV"); 
//         },
//         click: function() {
//             window.alert("You have clicked on the DIV"); 
//         }    
//     });
// }); 

//STEP 21 

// $(function(){
//     $('#step20').css({'width': '400px', 'height': '400px', 'backgroundColor': 'gray', 'color': 'white'});
//     $("#step20").on({
//         mouseenter: function(){
//             $('#span20').append('THE CURSOR HAS ENTERED THE DIV');
//             // window.console.log("The cursor has entered the DIV");
//         },
//         mouseleave: function() {
//             $('#span20').append('THE CURSOR HAS LEFT THE DIV');
//             // window.console.log("The cursor has left the DIV"); 
//         },
//         click: function() {
//             $('#span20').append('THE CURSOR HAS CLICKED THE DIV');
//             // window.alert("You have clicked on the DIV"); 
//         }    
//     });
// }); 

// STEP 22 
// $ (function() {
//     $('div p a').on('click', function (e){
//         e.preventDefault();  // use eevent object's preventDefault property 
//         $(this).css('color', 'red'); // use this to referr to the div p a (what you already clicked on)
//         window.alert("The name of the node that triggered this event is: " +  e.target.nodeName); // use e event target nodeName property
//     }); 
// }); 

// STEP 23
// $(function () {
//     $(window).resize(function () {
//         $('#step23').text("The width of the div is" + $('#step23').width() +"And the height of the div is: " + $('#step23').height()); 
//         // window.console.log($('#step23').width()); 
//     })

// }); 

// STEP 24

// $(function() {
//     $('#step24').focus(function () {
//         $(this).css("backgroundColor", "grey"); 
//     }); 
    
//     $('#step24').blur(function(){
//         $(this).css("backgroundColor", "white"); 
//     });
// });

//STEP 25

$ (function(){
    $('#submit').click(function(){
        window.console.log("Click on submit function is running");
        if ($('#name').val() == '') {
            $('#name').css('borderColor', 'red');
            window.alert("NEED A NAME MAN!");
        } else {
            $('#name').css('borderColor', 'green'); 
        }

        if ($('#email').val() == '') {
            $('#email').css('borderColor', 'red');
            window.alert("NEED YOUR EMAIL MAN!");
        } else {
            $('#email').css('borderColor', 'green'); 
        }
    }); 
})
