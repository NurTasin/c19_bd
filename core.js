/*
Core.js is a part of c19_bd project
github.com/NurTasin/c19_bd/core.js
*/
let totalCases=0;
let totalDeath=0;
let totalMale=0;
let totalFemale=0;
let totalHealed=0;
function c19Query(newCase_,newDeath_,male_,female_,newHealed_){
	totalCases+=newCase_;
	totalDeath+=newDeath_;
	totalMale+=male_;
	totalFemale+=female_;
	totalHealed+=newHealed_;
	if(male_+female_!=newCase_){
		throw err;
	}else{
		return {
			newCase:newCase_,
			newDeath:newDeath_,
			newMale:male_,
			newFemale:female_,
			total:{
				death:totalDeath,
				cases:totalCases,
				male:totalMale,
				female:totalFemale,
				healed:totalHealed;
			}
		};
	}
}
