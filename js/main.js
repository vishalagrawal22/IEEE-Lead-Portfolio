$(document).ready(function() {
    $.get("https://codeforces.com/api/user.info?handles=vishalagrawal", function(data, status) {
        if (status === "success") {
            console.log("Connected to CF API!");
            let profile = data.result[0];
            let current_rating = Number(profile.rating);
            let max_raitng = Number(profile.maxRating);
            if (max_raitng >= current_rating) {
                let rank = profile.rank;
                let max_rank = profile.maxRank;
                if (rank != "candidate master") {
                    $(".codeforces").addClass(rank);
                } else {
                    $(".codeforces").addClass("candidate-master");
                }

                if (max_rank != "candidate master") {
                    $(".codeforces-max").addClass(max_rank);
                } else {
                    $(".codeforces-max").addClass("candidate-master");
                }

                $(".current-rating").text(`${rank.charAt(0).toUpperCase() + rank.slice(1)} (${current_rating})`);
                $(".max-rating").text(`${max_rank.charAt(0).toUpperCase() + max_rank.slice(1)} (${max_raitng})`);
            } else {
                alert("Codeforces is rejudging some contest...");
                console.log("Codeforces is rejudging some contest...");
            }
        } else {
            alert("Unable to connect to Codeforces API.");
            console.log("Unable to connect to Codeforces API.");
        }
    });
});