/**
 * Robin.io 2020.06.23
 * You just got hired into a new engineering position - congratulations! The employer required you relocate, so you moved into a new apartment with a bunch of old typical boring picture frames. Before you even think about hosting a housewarming party with your new coworkers, you might want to decorate your living room with eccentric picture frames that you can create using your coding skills. You wish to build a machine that prints out a frame with the provided width, height, and any character as an input. For example, if you were to build a 4 x 4 frame with the # symbol, your frame would look like:

[["####"], ["# #"], ["# #"], ["####"]]

In this case, for all the enclosed brackets, there should 4 characters printed, and only the start and end of the bracket should have the # character printed - the remaining two characters should be two spaces. If the number were five, for example, we should display the two brackets each started and ending with # symbols and with three spaces in between.

Since you do not own any small photos, you need to make sure that your machine won't make a frame if the width or height is 3 or less.
 */

 // I don't quite understand this question.
 // Not sure what enclosed bracket means in this context
 // ASSUMPTION:  we always display all characters for the vertical sides
 // only display the two edge characters with the appropriate number of spaces
 // in between

 const makeFrame = (width, height, myChar) => {

        // frame has four sides so we'll have four sub-arrays 

        let leftSide = '';
        let rightSide = '';
        let top = '';
        let bottom = '';

        if ( height < 3 || width < 3) {
            return 'Sorry Too Small';
        }

        for (let i=0; i < height; i++) {
            leftSide += myChar;
            rightSide += myChar;
        }

        let numSpaces = width -2;

        top += myChar;
        bottom += myChar;

        for (let j=0; j< numSpaces; j++) {
            top += ' ';
            bottom += ' ';
        }

        top += myChar;
        bottom += myChar;


        // return [[leftSide], [top], [bottom], [rightSide]];

        return `[[${leftSide}], [${top}], [${bottom}], [${rightSide}]]`;
 }


//  console.log(makeFrame(4,4,'*'));

console.log(makeFrame(6,6,'*'));