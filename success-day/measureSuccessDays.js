// SUCCESS:  calories < previous day && exercise > previous day

days = [
    {
        calories: 2200,
        exercise: 1
    },
    {
        calories: 2000,
        exercise: 1.5
    },
    {
        calories: 2000,
        exercise: 1.5
    },
    {
        calories: 1900,
        exercise: 2
    },
    {
        calories: 1850,
        exercise: 2
    },
    {
        calories: 1800,
        exercise: 2.5
    }
];


const measureSuccess = (theDays) => {

    // the first day we exercise, we'll consider a success day.
    let successDays = 0;
    let previousCalories = 0;

    let previousExercise = 0;


    theDays.forEach((day) => {
        
        if ( day.calories < previousCalories && day.exercise > previousExercise) {
            console.log('Found a success day!');
            successDays++;
        }

        previousCalories = day.calories;
        previousExercise = day.exercise;
        
    });
    
    return successDays;

}


console.log(measureSuccess(days));
