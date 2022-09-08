import $ from 'jquery';
import {Fireworks} from 'fireworks-js';

$(function () {
    $("#btntest").on('click', function () {
        const msg = 'abcde';
        $('#app').html(msg);
        console.log(msg);
        $.ajax({
            url: './data.json', type: 'get', dataType: 'json', success: function (data) {
                console.log('data: ', data)
            }

        })
        new Fireworks(document.body).start()

    })
})
