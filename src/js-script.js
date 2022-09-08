import $ from 'jquery';
// import {Fireworks} from 'fireworks-js';

var msg = '2022-09-08 16:02:23';
$('#app').html(msg);
$(function () {
    $("#btntest").on('click', function () {
        // const msg = 'abcde';
        // $('#app').html(msg);
        // console.log(msg);
        // $.ajax({
        //     url: './data.json', type: 'get', dataType: 'json', success: function (data) {
        //         console.log('data: ', data)
        //     }
        //
        // })
        // new Fireworks(document.body).start()

        console.log(msg);

        // function pow(x, n) {
        //     if (n == 1) {
        //         return x;
        //     } else {
        //         return x * pow(x, n - 1);
        //     }
        // }
        //
        // alert(pow(2, 3));


    })
})


function f() {
    let msg = "the closest value";

    function g() {
        // console.log(msg)
        debugger; // 在 console 中：输入 alert(value); Surprise!
    }

    return g;
}

let g = f();
g();


// const a: number | undefined = undefined;  // 这里是ts 语法哦
// const b: number = a!;
// console.log(b);
