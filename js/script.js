$(document).ready(function() {

    $("#tab-profile").click(function() {
        $("#tab-profile").attr("class", "current-label");
        $("#tab-user-friends").attr("class", "label-tab");

        $("#user-profile").show();
        $("#user-friends").hide();
        $("#list").getNiceScroll().hide();
    });

    $("#tab-user-friends").click(function() {
        $("#tab-user-friends").attr("class", "current-label");
        $("#tab-profile").attr("class", "label-tab");

        $("#user-profile").hide();
        $("#user-friends").show();
        $("#list").getNiceScroll().resize();
        $("#list").getNiceScroll().show();
    });

    $("#list").niceScroll({
        cursorcolor: "#0f7bb1",
        cursorwidth: "5px",
        cursoropacitymin: "1",
        background: "#dfdfdf",
        cursorborder:"none"
    });

    $("input").attr("maxlength", 30);

    var name = localStorage.name;
    if (name == "") {
        name =  $("#name-link").text();
    } else {
        $("#name-link").text(name);
        $("#name-field").val(name);
    }

    $("#name-link").click(function () {
        $("#name-link").hide();
        $("#name-section").attr("class", ".user-name.current-user-name");
    });

    $("#name-section").mouseout(function () {
        $("#name-section").attr("class", "visually-hidden");
        $("#name-link").show();

        name = $("#name-field").val();
        $("#name-link").text(name);
    });

    var phone = localStorage.phone;
    if (phone == ""){
        phone =  $("#user-phone").text();
    } else {
        $("#user-phone").text(phone);
        $("#phone-field").val(phone);
    }

    $("#user-phone").click(function () {
        $("#user-phone").hide();
        $("#user-phone-section").attr("class", "user-phone");
    });

    $("#user-phone-section").mouseout(function () {
        $("#user-phone-section").attr("class", "visually-hidden");
        $("#user-phone").show();

        phone = $("#phone-field").val();
        $("#user-phone").text(phone);
    });

    var email = localStorage.email;
    if (email == "") {
        $("#user-e-mail").text();
    } else {
        $("#user-e-mail").text(email);
        $("#e-mail-field").val(email);
    }

    $("#user-e-mail").click(function () {
        $("#user-e-mail").hide();
        $("#e-mail-section").attr("class", "user-e-mail");
    });

    $("#e-mail-section").mouseout(function () {
        $("#e-mail-section").attr("class", "visually-hidden");
        $("#user-e-mail").show();

        email = $("#e-mail-field").val();
        $("#user-e-mail").text(email);
    });

    $(window).on("unload", saveSettings);
    loadSettings();

    function loadSettings() {
        console.log(localStorage);
        $("#name-field").val(localStorage.name);
        $("#name-link").val(localStorage.name);

        $("#phone-field").val(localStorage.phone);
        $("#e-mail-field").val(localStorage.email);
    }

    function saveSettings() {
        localStorage.name = $("#name-field").val();
        localStorage.phone = $("#phone-field").val();
        localStorage.email = $("#e-mail-field").val();
    }

    var interestsArr = ["музыка", "компьютеры", "радио"];

    function renderInterests() {
        $("#interests").empty();
        $.each(interestsArr,function(index,value){
            var interest = $("<li/>", {
                text: value,
                click: function() {
                    deleteInterest($(this).text());
                }
            });
            $("#interests").append(interest);
        });
    }

    renderInterests();


    $("#interests-container").mouseover(function () {
        $("#add-interests-button").show();
    });


    $("#add-interests-button").click(function () {
        $("#modal-interests").attr("class", "modal-show");
    });

    $("#interests-button").click(function () {
        if ($("#add-interests").val() != "") {
            interestsArr.unshift($("#add-interests").val());
            renderInterests();
            $("#add-interests").val("");
            $("#modal-interests").attr("class", "modal");
        } else {
            $("#modal-interests").attr("class", "modal");
        }
    });

    $("#modal-close").click(function () {
        $("#modal-interests").attr("class", "modal");
            $("#add-interests-button").hide()
    });

    function deleteInterest(interestStr) {
        var number = interestsArr.indexOf(interestStr);
        if (number > -1) {
            interestsArr.splice(number, 1);
            renderInterests();
        }
    }
});


