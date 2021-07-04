/**
 * objective is to confirm all brackets are properly opened and closed in the given input.
 */

function isValid(code){

    const openersToClosers = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    const openers = new Set(['(', '[', '{']);
    const closers = new Set([')', ']', '}']);

    const openersStack = [];

    for ( let i = 0; i < code.length; i++){
        const char = code.charAt(i);

        if (openers.has(char)) {

            openersStack.push(char);
        } else if (closers.has(char)) {
            if (!openersStack.length) { // if openers stack is empty, then this closer doesn't have a match.
                return false;
            }

            const lastUnclosedOpener = openersStack.pop();

            /**
             * if the closer doesn't match the most recent unclosed opener, then we know we have a problem.
             */

            if (openersToClosers[lastUnclosedOpener] !== char) {
                return false;
            }

        }
    }

    return openersStack.length === 0;
}




console.log(isValid("{ [ ] ( ) }"));

console.log(isValid("{[]()}"));

console.log(isValid("{}[]()"));

console.log(isValid("{ [ ( ] ) }"));

console.log(isValid("{ [ }"));
