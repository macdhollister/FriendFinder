const questions = [
    'question 1',
    'question 2',
    'question 3',
    'question4',
    'question5',
    'question6',
    'question7',
    'question8',
    'question9',
    'question10'
]

function addQuestion(question, q) {
    let HTML = `
    <h3>Question ${q}</h3>
    <h4>${questions[q-1]}</h4>
    <select class="chosen-select" id="q${q}">
        <option value=""></option>
        <option value="1">1 (Strongly Disagree)</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 (Strongly Agree)</option>
    </select>
    `

    document.getElementById('questions').insertAdjacentHTML('beforeend', HTML);
}

for (let i = 0; i < 10; i++) {
    addQuestion(questions[i], i+1);
}