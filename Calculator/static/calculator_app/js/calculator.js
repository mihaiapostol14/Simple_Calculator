const CalcInput = document.getElementById("calculator_input");

function insert(data) {
    CalcInput.value = CalcInput.value + data
}

function input(digit) {
    insert(digit)
}

function ClearAll() {
    CalcInput.value = ''
}

function GetSqrt() {
    var ResultSqrt = CalcInput.value = Math.sqrt(CalcInput.value)
    ClearAll()
    insert(ResultSqrt)

}

function result() {
    var CalcResult = eval(CalcInput.value)
    ClearAll()
    insert(CalcResult)
}