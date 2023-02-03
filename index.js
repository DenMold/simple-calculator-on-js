const inputA = document.querySelector(".js_input_a");
const inputB = document.querySelector(".js_input_b");
const select = document.querySelector(".js_select");
const result = document.querySelector(".js-result");
const output = document.querySelector(".js-output");

result.addEventListener('click', function(){
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = select.value;

    const result = calculate({
        a, 
        b, 
        operation
    });

    output.innerHTML = result;
}
)
