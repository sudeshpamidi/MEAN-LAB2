$(document).ready(function() {

    $("#btnCall").on("click", () => {
        let url = "http://localhost:3000/leagues";
        $.getJSON(url, function(leagues) {
            populateTable(leagues);
        });
    });

    function populateTable(data) {
        $("#tableTeams tbody").empty();
        data.forEach(function(e) {
            let url = `<span>
                         <a class= 'details mr-2' href='teamdetails.html?id=${e.Name}' title='Details' data-toggle='tooltip'><i class="far fa-file-alt fa-lg"></i></a>
                         <a class='edit mr-2' title='Edit' data-toggle='tooltip' href='team.html?id=${e.Name}&edit=true'> <i class='fa fa-pencil fa-lg' aria-hidden='true'></i></a>
                         <a class="delete" title="Delete" data-teamid=${e.Name} data-toggle="modal" data-target="#myModal">                
                         <i class="fas fa-trash-alt fa-lg"></i>
                         </a>
                     </span>`

            let markup = "<tr><td>" + e.Name + "</td><td>" + $("#leagues option[value='" + e.League + "']").text() + "</td><td>" + e.Code + "</td><td>" + e.Description + "</td><td>" + url + "</td> </tr>";
            $("#tableTeams tbody").append(markup);
        });
    }



});