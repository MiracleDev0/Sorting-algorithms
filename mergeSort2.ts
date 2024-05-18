// function isValid(s: string): boolean {
//     // Create a list named stack
//     let stack = [];

//     // Iterate list
//     for(let idx = 0; idx < s.length; idx++){
//         // Only pop out the elements from stack if stack is not empty and
//         // Only pop out the elements if current value is closing bracket and 
//         // stack top is opening bracket corresponding to same closing bracket
//         if(stack.length && stack[stack.length - 1] == '(' && s[idx] == ')')
//             stack.pop();
//         else if(stack.length && stack[stack.length - 1] == '{' && s[idx] == '}')
//             stack.pop();
//         else if(stack.length && stack[stack.length - 1] == '[' && s[idx] == ']')
//             stack.pop();
//         // Else add element at the top of stack
//         else
//             stack.push(s[idx]);
//     }

//     // If stack is empty meaning it is valid else it is not valid
//     return stack.length === 0;
// };