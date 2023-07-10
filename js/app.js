const BASE_URL = "https://www.balldontlie.io/api/v1/players?search=";

const $team = $('#team');
const $conference = $('#conference');
const $abbreviation = $('#abbreviation');
const $height = $('#height');
const $position = $('#position');
const $weight = $('#weight');
const $input = $('input[type="text"]');

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