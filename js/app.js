const BASE_URL = "https://www.balldontlie.io/api/v1/players?search=";
const imageURL = "data:image/jpeg;base64,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";

const $team = $('#team');
const $conference = $('#conference');
const $abbreviation = $('#abbreviation');
const $height = $('#height');
const $position = $('#position');
const $weight = $('#weight');
const $input = $('input[type="text"]');

const image = document.createElement("img");
image.src = imageURL;

const imageContainer = document.getElementById("imageContainer");
imageContainer.appendChild(image);


$(document).ready(function() {
    $('form').on('submit', handleGetData);
});

function handleGetData(event) {
    event.preventDefault();
    const userInput = $input.val().trim();

if (userInput !== '') {
$.ajax({
    url: BASE_URL + userInput
    }).then(
        (data) => {
            if (data.data.length > 0) {
                const player = data.data[0]; 
                render(player);
            } else {
                render(null);
            }
        },
        (error) => {
            console.log('Error:', error);
            render(null);
        }
);
}
}

function render(player) {
    if (player !== null) {
        $team.text('Team: ' + player.team.full_name);
        $abbreviation.text('Abbreviation: ' + player.team.abbreviation);
        $conference.text('Conference: ' + player.team.conference);
        $height.text('Height: ' + player.height_feet + "ft" + player.height_inches + 'in');
        $position.text('Position: ' + player.position);
        $weight.text('Weight: ' + player.weight_pounds + 'lbs');
    } else {
        $team.text('');
        $height.text('');
        $position.text('');
        $weight.text('Player not found');
    }
}