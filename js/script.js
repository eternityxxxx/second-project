// Ссылка на JSON
const dataURL = 'https://api.myjson.com/bins/jcmhn';

// Массив полей (Совпадает с айдишниками input)
const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
];

// Функция заполнения объекта
function getFormValues () {
	let obj = {};

	// Перебор массива полей => заполнение объекта
	fields.forEach(function(field) {
		obj[field] = $("#" + field).val();
	})

	return obj;
}

// Main функция
function handleData (data) {
	let finalMessage = "";

	let obj = getFormValues();

	// Перебор JSON объекта
	data["text"].forEach(function (line) {
		// Замена
		for (key in obj) {
			line = line.replace("{" + key + "}", obj[key]);
		}
		finalMessage += line + "<br>";	
	})

	$('.result').html(finalMessage);
}

// Обработчик кнопки
function handleButton () {
	$.getJSON(dataURL, handleData);
	$('form').hide();
}

// Интерфейс
function init () {
	$('.btn').click(handleButton);
}

// Обработчик готовности документа
$(document).ready(init);