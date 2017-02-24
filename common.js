$('.btn1').on('click', function() {

});
//UNDERSCORE

//forEach
console.info('1.Аналог forEach');
var arr = ['sergey', 'dima', 'roma', 'vasya'];
console.log(arr);
_.each(arr, function(element, index) {
   console.log('Элемент: ' + element + ', ' + 'Индекс: ' + index);
});

//every Каждый эллемент = true
console.info('2.Аналог every');
var arr = [1, 2,3,4, -10, 0];
console.log(arr);
var result = _.all(arr);
console.log('Каждый эллемент = true: ' + result);

//some Хотябы 1 эллемент = true
console.info('3.Аналог some');
var arr = [1, 2,3,4, -10, 0];
console.log(arr);
var result = _.any(arr);
console.log('Хотябы 1 эллемент = true: ' + result);

// Вытаскиваем массив значений по ключу
console.info('4. Вытаскиваем массив значений по ключу');
var user = [{
   name: 'Vasya',
   age: '22'
},{
   name: 'Alex',
   age: '31'
}];
var result = _.pluck(user, 'name');
console.log(result);

//template
$('.btn1').on('click', function() {
   var compiled = _.template("<% console.log('Hello ' + name); %>");
   compiled({name: "Andrey"});

   var myTemplate = _.template("<li class='users'> <%= name %> </li>"); // Создаем свой темплейт
   var users = [{
      name: 'Alex',
      age: 23
   },{
      name: 'Vasya',
      age: 31
   },{
      name: 'John',
      age: 35
   }];
   var HTML = '';
   _.each(users, function(item, index) {  // Выводим наш темплейт с данными
      HTML += myTemplate({name: item.name});
   });
   $('.main2').append(HTML);
});