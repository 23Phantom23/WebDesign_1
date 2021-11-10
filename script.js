function calculator(a,b)
{
	this.read = function()
	{
		this.a = Number(prompt("Vvedite a chislo", 0));
		this.b = Number(prompt("Vvedite b chislo", 0));
	},
	this.sum = function()
	{
		let sum;
		sum = this.a + this.b;
		console.log("sum = " + sum);
		return sum;
	},
	this.mul = function(){
		let mul;
		mul = this.a * this.b;
		console.log("mul = " + mul);
		return mul;
	}
}
let constructors = new calculator(0,0);
constructors.read();
constructors.sum();
constructors.mul();



function constructor(startingValue)
{
	this.startingValue = startingValue,
	this.value = this.startingValue,

	this.add = function()
	{
		let number;
		number = Number(prompt("Vvedite chislo: ",1));
		this.value = this.value + number;
		console.log("Number = " + number + ", value = " + this.value + ", but startingValue = " + this.startingValue);
		return this;
	}
}

let zadanie = new constructor(23);
zadanie.add();














/*let calculator =
{
	a: 0,
	b: 0,

	read:function()
	{
		this.a = Number(prompt("Vvedite a chislo", 0));
		this.b = Number(prompt("Vvedite b chislo", 0));
	},

	sum:function()
	{
		let sum;
		sum = this.a + this.b;
		alert("Sum = " + sum);
		console.log("sum = " + sum);
		return sum;
	},

	mul:function(){
		let mul;
		mul = this.a * this.b;
		alert("Mul = " + mul);
		console.log("mul = " + mul);
		return mul;
	}
}
calculator.read();
calculator.sum();
calculator.mul();

let ladder = 
{
	step: 0,

	up:function()
    {
		this.step = this.step + 1;
		console.log("up " + this.step);
        return this;
	},

	down:function()
	{
		this.step = this.step - 1;
		console.log("down " + this.step);
        return this;
	},

	showStep:function()
	{
		alert("Step = " + this.step);
		console.log("Step = " + this.step);
	}
}
ladder.up().up().down().showStep();*/









/*let user = {
	name: "Ivan",
	Say: function()
	{
		console.log(this);
	}

}

user.Say();

function makeUser(){
	return {
		name: "asd",
		ref (){
			return this;
		}
	};
}


let user1 = makeUser();*/









/*let zarp = 
{
	Danya: 5000,
	Misha: 4500,
	Roma: 1000,
	Andrey: 0009
}

function checkzp(){
	let sum = 0;
	for(Key in zarp)
	{
		sum+=zarp[Key];
	}
	return sum;
}

console.log(checkzp())

let zarpl = 
{
	Danya: 5000,
	name1:"Danya",
	Misha: 4500,
	name2:"Misha",
	Roma: 1000,
	name3:"Andry",
	Andrey: 0009
}

function check(){
	let sum = 0;
	for(Key in zarp)
	{
		if(typeof(Key) == Number)
		{
			
		}
		sum+=zarpl[Key];
	}
	return sum;
}

console.log(check())*/







/*let obj = 
{
	name:" ",
	surname:" ",
	age: " ",
	zarplata: " "
}

obj.name = "Danya";
obj.surname = "Marchenko";
obj.age = "18";
obj.zarplata = "4800";

obj.surname = "Yumanov";

delete obj.name;

for(let Key in obj)
{
	console.log(obj[Key]);
}

function check(key){
	for(Key in obj)
	{
		if(key==Key){
			return true;
		}
	}
	return false;
}

console.log(check('age'))*/